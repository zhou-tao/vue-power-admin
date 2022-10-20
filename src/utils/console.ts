import { ConsoleTypeEnum, ConsoleThemeEnum } from '@/enums/consoleEnum'

const BASIC_STYLE = 'border-radius: 0 20px 20px 0; color: #fff'

// 自定义 console
export class BConsole {
  static INFO(type: ConsoleTypeEnum, title: string, content = '') {
    console.log(
      `%c [${type}] ${title} `,
      `${ConsoleThemeEnum.INFO}${BASIC_STYLE}`,
      content
    )
  }

  static SUCCESS(type: ConsoleTypeEnum, title: string, content = '') {
    console.log(
      `%c [${type}] ${title} `,
      `${ConsoleThemeEnum.SUCCESS}${BASIC_STYLE}`,
      content
    )
  }

  static WARN(type: ConsoleTypeEnum, title: string, content = '') {
    console.log(
      `%c [${type}] ${title} `,
      `${ConsoleThemeEnum.WARN}${BASIC_STYLE}`,
      content
    )
  }

  static ERROR(type: ConsoleTypeEnum, title: string, content = '') {
    console.log(
      `%c [${type}] ${title} `,
      `${ConsoleThemeEnum.ERROR}${BASIC_STYLE}`,
      content
    )
  }
}
