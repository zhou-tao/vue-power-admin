<script setup lang="ts" name="AppMain"></script>

<template>
  <div>
    <router-view v-slot="{ Component, route }">
      <transition name="fade-slide">
        <component :is="Component" :key="route.path" />
      </transition>
    </router-view>
  </div>
</template>

<style lang="scss" scoped></style>
