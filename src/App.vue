<script setup lang="ts" name="App">
  import { ConfigProvider } from 'ant-design-vue'
  import zhCN from 'ant-design-vue/es/locale/zh_CN'
  import dayjs from 'dayjs'
  import 'dayjs/locale/zh-cn'
  dayjs.locale('zh-cn')
</script>

<template>
  <config-provider :locale="zhCN">
    <router-view />
  </config-provider>
</template>
