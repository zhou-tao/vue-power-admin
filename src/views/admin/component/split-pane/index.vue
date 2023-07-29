<script setup lang="ts" name="SplitPane">
  const direction = ref('row')
  const draggable = ref(true)
</script>

<template>
  <div page-pure>
    <Splitter :direction="direction" :draggable="draggable" :trigger-size="8">
      <template #prev>
        <PageTitle title="分栏一" description="分栏通用动态拖拽组件, 支持 row、column 两种模式。" />
        <el-form
          label-position="top"
        >
          <el-form-item label="direction">
            <el-radio-group v-model="direction">
              <el-radio-button label="row" />
              <el-radio-button label="column" />
            </el-radio-group>
          </el-form-item>
          <el-form-item label="enable draggable">
            <el-switch
              v-model="draggable"
              size="large"
            />
          </el-form-item>
        </el-form>
      </template>
      <template #next>
        <PageTitle title="分栏二" />
      </template>
    </Splitter>
  </div>
</template>

<style lang="scss" scoped></style>
