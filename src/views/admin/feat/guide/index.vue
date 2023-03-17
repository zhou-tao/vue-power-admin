<script setup lang="ts" name="Guide">
  import vGuide from '@/directives/guide'

</script>

<template>
  <div page-card grid grid-cols-12 gap-8>
    <div
      col-start-1
      col-end-3
      aspect-1
      bg-primary
      center
      v-guide="{ order: 1, title: '第一步', description: '第一步的一些描述' }"
    >
      1
    </div>

    <div
      col-start-5
      aspect-1
      col-end-6
      bg-amber-3
      center
      v-guide="{ order: 2, title: '第二步', description: '第二步的一些描述' }"
    >
      2
    </div>

    <div style="display: contents;">
      <div
        col-start-10
        col-end-12
        aspect="1/2"
        bg-red-4
        center
        v-guide="{ order: 3, title: '第三步', description: '第三步的一些描述', placement: 'left' }"
      >
        3
      </div>
    </div>

    <div
      row-start-2
      row-end-3
      col-start-4
      col-end-8
      bg-purple-4
      center
      v-guide="{ order: 4, title: '第三步', description: '第三步的一些描述', placement: 'top' }"
    >
      4
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>
