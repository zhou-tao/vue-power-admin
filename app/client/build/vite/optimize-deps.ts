// used components for element-plus
const ElementPlusComponents = [
  'form', 'form-item', 'button', 'row', 'col',
  'checkbox', 'input', 'radio-group', 'radio-button',
  'dialog', 'table', 'select', 'option', 'loading', 'pagination',
  'table-column', 'tree', 'descriptions', 'descriptions-item', 'tag'
]

// preload all deps
export const createOptimizeDeps = () => ({
  include: [
    '@wangeditor/editor-for-vue',
    ...ElementPlusComponents.map(comp => `element-plus/es/components/${comp}/style/index`)
  ]
})
