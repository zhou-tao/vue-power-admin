<script setup lang="ts" name="LayoutFooter">
  import { useSettingStore } from '@/store/modules/setting'
  import { storeToRefs } from 'pinia'

  const { hasFooter } = storeToRefs(useSettingStore())
</script>

<template>
  <el-footer h="footer" v-show="hasFooter">
    <div h="full" flex="center" text="placeholder">
      MIT Licensed <i-app-heart text="rose-600!" /> Copyright © 2022-present vue-power-admin
    </div>
  </el-footer>
</template>

<style lang="scss" scoped></style>
