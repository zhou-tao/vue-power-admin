import download from 'download-git-repo'

interface Template {
  name: string
  repo: string
  color: string
}

export const templates: Template[] = [
  { name: 'vpa', repo: 'zhou-tao/vue-power-admin', color: 'lightGreen' },
  { name: 'vpa-full', repo: 'zhou-tao/vue-power-admin#2.x', color: 'cyan' }
]

export function downloadApp (name: string) {
  download('zhou-tao/vue-power-admin', name, {}, function (err) {
    console.log(err ? 'Error' : 'Success')
  })
}
