<script setup lang="ts" name="Login">
  import LoginForm from './components/LoginForm.vue'
  import ThemeSwitch from '@c/ThemeSwitch/index.vue'
</script>

<template>
  <div
    relative
    w="screen"
    h="screen"
    flex
    justify="around"
    items="center"
    overflow="hidden"
    bg="gradient-light"
    dark:bg="gradient-dark"
  >
    <img src="@/assets/images/login_banner.svg" w="lg" />
    <img src="/.github/logo.svg" alt="logo" fixed left="4%" top="2%" width="60" />
    <div fixed top="3%" right="2%" text="xl">
      <ThemeSwitch />
    </div>
    <LoginForm />
  </div>
</template>
