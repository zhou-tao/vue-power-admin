<script setup lang="ts" name="TotalCard">
  import { Icon } from '@iconify/vue'

  const props = withDefaults(defineProps<{
    size?: 'small' | 'default'
    title: string
    total: number
    icon: string
    cls?: string
    hover?: string
  }>(), {
    size: 'default'
  })

  defineEmits(['queryList'])

  const isSmallSize = computed(() => props.size === 'small')
</script>

<template>
  <Card :padding="false">
    <div flex items="center" :class="isSmallSize ? 'p-3' : 'p-6'">
      <div
        :class="isSmallSize ? 'w-14 h-14 rounded-full text-3xl mr-4' : 'w-16 h-16 rounded text-2.6rem mr-12'"
        bg="light"
        flex="center"
      >
        <Icon :icon="icon" :class="cls" />
      </div>
      <div flex="~ col">
        <span text="base secondary" tracking="wide">{{ title }}</span>
        <span
          font="mono"
          mt="2"
          cursor="pointer"
          :class="`${hover} ${isSmallSize ? 'text-2xl' : 'text-3xl'}`"
          @click="$emit('queryList')"
        >
          {{ total }}
        </span>
      </div>
    </div>
  </Card>
</template>
