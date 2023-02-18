<script setup lang="ts" name="MenuItem">
  import type { RouteRecordName } from 'vue-router'
  import type { Menu, MenuItemComponent } from '@h/logic/useMenu'

  defineProps<{
    component: MenuItemComponent,
    title: string
    index: RouteRecordName | undefined
    icon?: string,
    children?: Menu[]
  }>()
</script>

<template>
  <component :is="component" :index="index">
    <template #title>
      <span>{{ title }}</span>
    </template>
    <template v-if="children?.length">
      <MenuItem v-for="child in children" :key="child.index" v-bind="child" />
    </template>
  </component>
</template>
