/**
 * @description 打印颜色主题
 */
export enum ConsoleThemeEnum {
  INFO = 'background-image: linear-gradient( 135deg, #2AFADF 10%, #4C83FF 100%);',
  SUCCESS = 'background-image: linear-gradient( 135deg, #69FF97 10%, #00E4FF 100%);',
  WARN = 'background-image: linear-gradient( 135deg, #FFF886 10%, #F072B6 100%);',
  ERROR = 'background-image: linear-gradient( 135deg, #FEB692 10%, #EA5455 100%);'
}

/**
 * @description 打印类型
 */
export enum ConsoleTypeEnum {
  VITE = 'VITE',
  ROUTER = 'ROUTER',
  PINIA = 'PINIA',
  AXIOS = 'AXIOS',
  MOCK = 'MOCK'
}
