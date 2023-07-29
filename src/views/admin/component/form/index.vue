<script setup lang="ts" name="SearchForm">
  import type { SearchItemConfig } from '@/components/SearchModel'
  import { useComponent } from '@/components/SearchModel'
  import { useMessage } from '@/hooks/web/useMessage'

  const { ElInput, ElSelect } = useComponent()
  const config: SearchItemConfig[] = [
    { component: ElInput, label: '用户名', field: 'username', placeholder: '请输入' },
    { component: ElInput, label: '姓名', field: 'name', placeholder: '请输入' },
    { component: ElSelect, label: '性别', field: 'gender', clearable: true, options: [{ label: '男', value: '1' }, { label: '女', value: '0' }] },
    { component: ElSelect, label: '权限', field: 'role', clearable: true, options: [{ label: '用户', value: '1' }, { label: '管理员', value: '0' }] },
    { component: ElInput, label: '部门', field: 'deptName', placeholder: '请输入' },
    { component: ElInput, label: '岗位', field: 'post', placeholder: '请输入' }
  ]

  const queryData = reactive({
    username: '',
    name: '',
    gender: '',
    role: '',
    deptName: '',
    post: ''
  })

  const { $message } = useMessage()

  function handleQuery() {
    $message.success('do query!')
  }

  function handleReset() {
    $message.success('do reset!')
  }
</script>

<template>
  <div page-card>
    <PageTitle description="查询表单通用组件，可以通过传入查询表单配置项来生成统一风格的搜索组件。它适用于最常用的列表页，来搭配表格完成搜索过滤查询。" />
    <SearchModel
      v-model="queryData"
      :config="config"
      :per-line-count="4"
      @query="handleQuery"
      @reset="handleReset"
    />
  </div>
</template>

<style lang="scss" scoped></style>
