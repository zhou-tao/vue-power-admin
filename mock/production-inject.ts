import Mock from 'mockjs'
import mockTemplates from '.'

export default (base: string) => {
  Object.entries(mockTemplates).forEach(([url, template]) => {
    const wrapData = data => ({
      code: 0,
      message: 'mock production inject response successful',
      data
    })

    Mock.mock(
      `${base}${url}`,
      typeof template === 'function'
        ? (options) => {
            try {
              options.body = JSON.parse(options.body)
            }
            catch (error) {
            // do nothing
            }
            return wrapData(Mock.mock(template(options)))
          }
        : wrapData(template))
  })
}
