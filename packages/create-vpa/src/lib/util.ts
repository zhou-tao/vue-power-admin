import fs from 'node:fs'
import path from 'node:path'

export function getPkgManager() {
  const userAgent = process.env.npm_config_user_agent
  if (!userAgent) return undefined
  const pkgSpec = userAgent.split(' ')[0]
  const pkgSpecArr = pkgSpec.split('/')
  return {
    name: pkgSpecArr[0],
    version: pkgSpecArr[1],
  }
}

export function formatTargetDir (dir: string) {
  return dir?.trim().replace(/\/+$/g, '')
}

export function cleanDir(dir: string) {
  if (!fs.existsSync(dir)) return
  for (const file of fs.readdirSync(dir)) {
    if (file === '.git') continue
    fs.rmSync(path.resolve(dir, file), { recursive: true, force: true })
  }
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

export function logPkgText(pkgManager: string) {
  console.log()
  console.log()
  console.log('Done. Now run:')
  switch (pkgManager) {
    case 'yarn':
      console.log(`
    yarn
    yarn dev
      `)
      break
    default:
      console.log(`
  ${pkgManager} install
  ${pkgManager} run dev
      `)
      break
  }
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
