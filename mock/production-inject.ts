import Mock from 'mockjs'
import mockTemplates from '.'

export default (base: string) => {
  Object.entries(mockTemplates).forEach(([url, template]) => {
    Mock.mock(`${base}${url}`, {
      code: 0,
      message: 'mock production response success',
      data: template
    })
  })
}
