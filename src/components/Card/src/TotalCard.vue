<script setup lang="ts" name="TotalCard">
  import { Icon } from '@iconify/vue'

  defineProps<{
    title: string,
    total: number,
    icon: string,
    cls?: string,
    hover?: string
  }>()

  defineEmits(['query-list'])
</script>

<template>
  <Card :padding="false">
    <div flex items="center" p="6">
      <div
        w="16"
        h="16"
        rounded
        bg="stone-1"
        dark:bg="#282C35"
        flex
        items="center"
        justify="center"
        text="2.6rem"
        mr="12"
      >
        <Icon :icon="icon" :class="cls" />
      </div>
      <div flex="~ col">
        <span text="base secondary" tracking="wide">{{ title }}</span>
        <span
          text="3xl"
          font="mono"
          mt="2"
          cursor="pointer"
          :class="hover"
          @click="$emit('query-list')"
        >
          {{ total }}
        </span>
      </div>
    </div>
  </Card>
</template>

<style lang="scss" scoped></style>
