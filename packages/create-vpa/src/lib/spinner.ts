import { lightGreen, lightYellow, lightMagenta, lightRed } from 'kolorist'

export class Spinner {
  static timer

  static start (text = 'LOADING...') {
    const colors = [lightGreen, lightGreen, lightMagenta, lightYellow]
    const P = [' ', '|', '/', '-']
    let x = 0
    this.timer = setInterval(() => {
      process.stdout.write('\r' + colors[x](P[x++]) + `  ${text}`)
      x &= 3
    }, 250)
  }

  static stop (code: number) {
    if (this.timer) {
      clearInterval(this.timer)
      const printText = code === 0 ? lightGreen('✔  Load Successfully!') : lightRed('✖  Load Failure!')
      process.stdout.write('\r' + printText)
      console.log('\n')
    }
  }
}
