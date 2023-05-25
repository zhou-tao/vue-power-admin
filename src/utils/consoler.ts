import { ConsoleThemeEnum } from '@/enums/consoleEnum'

const BASIC_STYLE = 'border-radius: 0 20px 20px 0; color: #f4f4f5; font-weight: 600'

// 自定义 console
export class Consoler {
  static INFO(type: string, content: any) {
    console.log(
      `%c [${type}] `,
      `${ConsoleThemeEnum.INFO}${BASIC_STYLE}`,
      content
    )
  }

  static SUCCESS(type: string, content: any) {
    console.log(
      `%c [${type}] `,
      `${ConsoleThemeEnum.SUCCESS}${BASIC_STYLE}`,
      content
    )
  }

  static WARN(type: string, content: any) {
    console.log(
      `%c [${type}] `,
      `${ConsoleThemeEnum.WARN}${BASIC_STYLE}`,
      content
    )
  }

  static ERROR(type: string, content: any) {
    console.log(
      `%c [${type}] `,
      `${ConsoleThemeEnum.ERROR}${BASIC_STYLE}`,
      content
    )
  }
}
