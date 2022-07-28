/**
 * @description: 检查密码复杂度(6-20位 数字和英文字母组合)
 * @param {String} password
 * @returns
 */
export const checkPassword = (password: string): boolean => {
  return /^(?=.*\d)(?=.*[A-Za-z])\w{6,20}$/.test(password)
}
