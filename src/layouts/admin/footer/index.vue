<script setup lang="ts" name="LayoutFooter">
  import { useSettingStore } from '@/store/modules/setting'

  const { hasFooter } = $(useSettingStore())
</script>

<template>
  <el-footer height="50px" v-show="hasFooter">
    <div h="footer" flex items="center" justify="center" text="placeholder">
      MIT Licensed <i-app-heart text="rose-600!" /> Copyright © 2022-present vue-power-admin
    </div>
  </el-footer>
</template>

<style lang="scss" scoped></style>
