import { ConsoleTypeEnum, ConsoleThemeEnum } from '@/enums/consoleEnum'

const BASIC_STYLE = 'border-radius: 0 20px 20px 0; color: #fff'

export const iconsole = {
  INFO(type: ConsoleTypeEnum, title: string, content = '') {
    console.log(
      `%c [${type}] ${title} `,
      `${ConsoleThemeEnum.INFO}${BASIC_STYLE}`,
      content
    )
  },

  SUCCESS(type: ConsoleTypeEnum, title: string, content = '') {
    console.log(
      `%c [${type}] ${title} `,
      `${ConsoleThemeEnum.SUCCESS}${BASIC_STYLE}`,
      content
    )
  },

  WARN(type: ConsoleTypeEnum, title: string, content = '') {
    console.log(
      `%c [${type}] ${title} `,
      `${ConsoleThemeEnum.WARN}${BASIC_STYLE}`,
      content
    )
  },

  ERROR(type: ConsoleTypeEnum, title: string, content = '') {
    console.log(
      `%c [${type}] ${title} `,
      `${ConsoleThemeEnum.ERROR}${BASIC_STYLE}`,
      content
    )
  }
}
