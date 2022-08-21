<script setup lang="ts" name="Login">
  import LoginForm from './components/LoginForm.vue'
</script>

<template>
  <div
    relative
    w="screen"
    h="screen"
    overflow="hidden"
    bg="gradient-light"
    flex
    justify="around"
    items="center"
  >
    <img src="@/assets/images/login_banner.svg" w="lg" />
    <LoginForm />
  </div>
</template>
