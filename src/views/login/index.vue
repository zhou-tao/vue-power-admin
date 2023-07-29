<script setup lang="ts" name="Login">
  import LoginForm from './components/LoginForm.vue'
  import ThemeSwitch from '@/components/ThemeSwitch'
</script>

<template>
  <div
    relative
    w="screen"
    h="screen"
    flex="center"
    justify="around"
    overflow="hidden"
    bg="gradient-light dark:gradient-dark"
  >
    <img src="@/assets/images/login_banner.svg" w="lg">
    <div fixed top="3%" right="2%" text="xl">
      <ThemeSwitch />
    </div>
    <LoginForm />
  </div>
</template>
