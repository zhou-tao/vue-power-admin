import fs from 'node:fs'
import ora from 'ora'
import download from 'download-git-repo'

export function downloadRepo (repo: string, dir: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const spinner = ora('DOWNLOADING...').start()
    download(repo, dir, { clone: true }, (err: any) => {
      if (err) {
        spinner.fail('Download failure, please try again later!')
        reject(err)
      } else {
        spinner.succeed('Scaffolding initialization succeeded!')
        resolve()
      }
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
