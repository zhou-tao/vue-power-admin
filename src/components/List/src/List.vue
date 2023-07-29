<script setup lang="ts" name="List">
  interface ListItem {
    id: string
    title: string
    description?: string
    avatar?: string
  }

  defineProps<{
    data: ListItem[]
  }>()
</script>

<template>
  <ul list="none" m="0" p="0">
    <template v-for="({ id, title, description, avatar }, index) in data" :key="id">
      <li my="2">
        <div flex items="center">
          <Avatar v-if="avatar" :src="avatar" mr="4" />
          <div text="sm">
            <p text="regular" my="2">
              {{ title }}
            </p>
            <p v-if="description" text="secondary" my="2">
              {{ description }}
            </p>
          </div>
        </div>
      </li>
      <el-divider v-if="index !== data.length - 1" />
    </template>
  </ul>
</template>

<style lang="scss" scoped></style>
