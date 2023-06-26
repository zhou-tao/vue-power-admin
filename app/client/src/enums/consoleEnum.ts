/**
 * @description 打印颜色主题
 */
export enum ConsoleThemeEnum {
  INFO = 'background-image: linear-gradient( 135deg, #60a5fa 10%, #2563eb 100%);',
  SUCCESS = 'background-image: linear-gradient( 135deg, #34d399 10%, #059669 100%);',
  WARN = 'background-image: linear-gradient( 135deg, #fb923c 10%, #ea580c 100%);',
  ERROR = 'background-image: linear-gradient( 135deg, #f87171 10%, #dc2626 100%);'
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
