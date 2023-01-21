<script setup lang="ts" name="Theme-Switch">
  import { useDark, useToggle } from '@vueuse/core'
  import { Sunny, Moon } from '@element-plus/icons-vue'

  const props = defineProps({
    simply: Boolean
  })
  const isDark = useDark()
  const toggleDark = useToggle(isDark)

</script>

<template>
  <div @click="toggleDark()" cursor="pointer" text="base gray-2" dark:text="gray-8">
    <div
      v-if="props.simply"
      w="24px"
      h="24px"
      flex
      justify="center"
      items="center"
      rounded="1/2"
      border="1px solid gray-8"
      dark:border="gray-2"
      transition="base"
      :style="{ backgroundColor: isDark ? '#E5E7EB' : '#1F2937' }"
    >
      <el-icon>
        <component :is="isDark ? Sunny : Moon" />
      </el-icon>
    </div>
    <div v-else relative w="40px" h="22px" rounded-3 border="1px solid gray" bg="white" dark:border="white" dark:bg="black">
      <div>
        <el-icon>
          <component :is="isDark ? Sunny : Moon" />
        </el-icon>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
