import download from 'download-git-repo'

export function downloadApp (name) {
  download('zhou-tao/vue-power-admin', name, {}, function (err) {
    console.log(err ? 'Error' : 'Success')
  })
}
