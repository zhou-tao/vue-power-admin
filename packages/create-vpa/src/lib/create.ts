import ora from 'ora'
import download from 'download-git-repo'

export function downloadRepo (repo: string, dir: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const spinner = ora(`${repo} downloading...`).start()
    download(repo, dir, {}, (err: any) => {
      spinner.stop()
      err ? reject(err) : resolve()
    })
  })
}
