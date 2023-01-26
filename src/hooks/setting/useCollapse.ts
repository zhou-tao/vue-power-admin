// 菜单展开与收缩
export const isCollapse = ref(false)

export function setCollapse() {
  isCollapse.value = !isCollapse.value
}
