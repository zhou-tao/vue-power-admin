<script setup lang="ts" name="AppMain"></script>

<template>
  <router-view v-slot="{ Component, route }">
    <transition name="fade-slide">
      <component :is="Component" :key="route.path" />
    </transition>
  </router-view>
</template>

<style lang="scss" scoped></style>
