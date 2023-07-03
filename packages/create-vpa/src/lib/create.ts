import fs from 'node:fs'
import { spawn } from 'node:child_process'
import { Spinner } from './spinner'

const GITHUB_BASE_URL = 'https://github.com/'

export function downloadRepo (repo: string, dir: string) {
  const [url, branch = 'main'] = repo.split('#')
  return new Promise((resolve, reject) => {
    Spinner.start()
    const clone = spawn('git', ['clone', '--depth=1', `${GITHUB_BASE_URL}${url}`, '-b', branch, dir])
    clone.on('exit', code => {
      spawn('rm', ['-rf', `${dir}/.git`])
      Spinner.stop(code)
      code === 0 ? resolve(null) : reject()
    })
  })
}

export function writePackageJson(path: string, name: string) {
  const pkg = JSON.parse(fs.readFileSync(path, 'utf-8'))
  pkg.name = name
  pkg.version = '0.0.0'

  const removeKeys = ['author', 'repository', 'publishConfig', 'bugs', 'homepage', 'keywords', 'license']
  for (const key of removeKeys) {
    Reflect.deleteProperty(pkg, key)
  }

  fs.writeFileSync(path, JSON.stringify(pkg, null, 2))
}
