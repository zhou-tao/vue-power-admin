<script setup lang="ts" name="LayoutFooter">
  import { useSettingStore } from '@/store/modules/setting'

  const { hasFooter } = storeToRefs(useSettingStore())
</script>

<template>
  <el-footer v-show="hasFooter" h="footer">
    <div h="full" flex="center" text="placeholder">
      MIT Licensed <div i-app-heart mx="1" text="rose-600!" /> Copyright &copy; 2022-present toryz
    </div>
  </el-footer>
</template>

<style lang="scss" scoped></style>
