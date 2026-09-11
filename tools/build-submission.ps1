[CmdletBinding()]
param(
  [switch]$Draft,
  [switch]$PrintProof,
  [string]$EdgePath,
  [string]$ExtensionsPath = (Join-Path $env:USERPROFILE '.vscode\extensions')
)

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $PSScriptRoot
$screenFiles = @(Get-ChildItem -LiteralPath (Join-Path $root '04-screens') -Filter '*.png' -File)
$redlineFiles = @(Get-ChildItem -LiteralPath (Join-Path $root '06-handoff') -Filter '*.png' -File)
$required = @(
  @{ Name = 'Waiting (S-01)'; Files = $screenFiles; Pattern = '(?i)^S[-_ ]?01(?!\d)|waiting|home[-_ ](coming|arrived)' },
  @{ Name = 'In transit (S-04)'; Files = $screenFiles; Pattern = '(?i)^S[-_ ]?04(?!\d)|transit' },
  @{ Name = 'SOS (S-05 or S-06)'; Files = $screenFiles; Pattern = '(?i)^S[-_ ]?0[56](?!\d)|sos' },
  @{ Name = 'Home redlines'; Files = $redlineFiles; Pattern = '(?i)redlines?' }
)
$missing = @($required | Where-Object {
  @($_.Files | Where-Object Name -Match $_.Pattern).Count -eq 0
} | ForEach-Object { $_.Name })

if ($missing.Count -gt 0) {
  $message = 'Missing mandatory exports: ' + ($missing -join ', ')
  if (-not $Draft) {
    throw ($message + '. Final export blocked; existing outputs were not changed. Use -Draft explicitly for a review copy.')
  }
  Write-Warning ($message + '. Building a DRAFT, not a submission-ready PDF.')
}

$node = (Get-Command node -ErrorAction Stop).Source
$arguments = @((Join-Path $PSScriptRoot 'render-submission.cjs'), '--root', $root, '--extensions', $ExtensionsPath)
if ($Draft) { $arguments += '--draft' }
if ($PrintProof) { $arguments += '--print-proof' }
if ($EdgePath) { $arguments += @('--edge', $EdgePath) }
& $node @arguments
if ($LASTEXITCODE -ne 0) {
  throw ('PDF build or validation failed (exit ' + $LASTEXITCODE + '). No final-ready claim is valid.')
}
