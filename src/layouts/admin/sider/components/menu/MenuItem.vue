<script setup lang="ts" name="MenuItem">
  import type { RouteRecordName } from 'vue-router'
  import type { Menu, MenuItemComponent } from '@h/logic/useMenu'
  import { Icon } from '@iconify/vue'

  const props = defineProps<{
    component: MenuItemComponent
    title: string
    index: RouteRecordName | undefined
    icon?: string
    children?: Menu[]
  }>()

  const isSubMenu = computed(() => !!props.children?.length)
</script>

<template>
  <component :is="component" :index="index as any">
    <Icon v-if="icon && !isSubMenu" class="icon" :icon="icon" />
    <template #title>
      <Icon v-if="icon && isSubMenu" class="icon" :icon="icon" />
      <span>{{ $t(title) }}</span>
    </template>
    <template v-if="children?.length">
      <MenuItem v-for="child in children" :key="child.index" v-bind="child" />
    </template>
  </component>
</template>
