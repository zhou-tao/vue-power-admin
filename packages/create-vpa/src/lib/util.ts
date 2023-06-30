import fs from 'node:fs'

export function formatTargetDir (dir: string) {
  return dir?.trim().replace(/\/+$/g, '')
}

export function isEmpty(path: string) {
  const files = fs.readdirSync(path)
  return files.length === 0 || (files.length === 1 && files[0] === '.git')
}

export function isValidPackageName(projectName: string) {
  return /^(?:@[a-z\d\-*~][a-z\d\-*._~]*\/)?[a-z\d\-~][a-z\d\-._~]*$/.test(
    projectName,
  )
}

export function toValidPackageName(projectName: string) {
  return projectName
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/^[._]/, '')
    .replace(/[^a-z\d\-~]+/g, '-')
}

export function getSignText() {
  return `
 ___      ___ ________  ________
|\\  \\    /  /|\\   __  \\|\\   __  \\
\\ \\  \\  /  / | \\  \\|\\  \\ \\  \\|\\  \\
 \\ \\  \\/  / / \\ \\   ____\\ \\   __  \\
  \\ \\    / /   \\ \\  \\___|\\ \\  \\ \\  \\
   \\ \\__/ /     \\ \\__\\    \\ \\__\\ \\__\\
    \\|__|/       \\|__|     \\|__|\\|__|`
}
