<script setup lang="ts" name="User">
  import SearchModel from '@/components/SearchModel'
  import { SearchItemConfig, useComponent } from '@/components/SearchModel'

  const { ElInput, ElSelect, ElRadioButton } = useComponent()
  const data = reactive({
    username: '测试',
    name: '',
    gender: '',
    deptName: '',
    posts: ''
  })

  const config: SearchItemConfig[] = [
    { component: ElInput , label: '用户名', field: 'username', placeholder: '请输入' },
    { component: ElInput , label: '姓名', field: 'name', placeholder: '请输入' },
    { component: ElSelect , label: '性别', field: 'gender', options: [{ label: '男', value: '1' }, { label: '女', value: '0' }] },
    { component: ElInput , label: '部门', field: 'deptName', placeholder: '请输入' },
    { component: ElInput , label: '岗位', field: 'posts', placeholder: '请输入' },
    { component: ElRadioButton , label: '启用状态', field: 'enabled', options: [{ label: '是', value: '1' }, { label: '否', value: '0' }] }
  ]

  const tableData = Array(10).fill(0).map((r, i) => ({
    id: i+1,
    username: 'ikun',
    name: '坤坤',
    gender: '男',
    mobile: '18818186868',
    roles: '用户',
    deptName: '产品研发部',
    posts: '前端'
  }))

  const pageData = reactive({
    current: 1
  })

  function handleQuery() {
    console.log('query...', toRaw(data))
  }

  function handleReset() {
    console.log('reset...')
  }
</script>

<template>
  <div full-page>
    <SearchModel v-model="data" :config="config" :per-line-count="4" @query="handleQuery" @reset="handleReset" />
    <el-table
      size="large"
      :data="tableData"
      row-key="id"
      stripe
      border
      w-full
      mt-4
    >
      <el-table-column fixed prop="id" label="编号" width="80" align="center" />
      <el-table-column prop="username" label="用户名" width="180" />
      <el-table-column prop="name" label="姓名" width="140" />
      <el-table-column prop="gender" label="性别" width="100" />
      <el-table-column prop="mobile" label="联系电话" />
      <el-table-column prop="roles" label="权限" />
      <el-table-column prop="deptName" label="所在部门" />
      <el-table-column prop="posts" label="就职岗位" />
      <el-table-column fixed="right" label="操作" width="160">
        <template #default>
          <el-button
            link
            type="primary"
            size="small"
          >
            详情
          </el-button>
          <el-button link type="primary" size="small">编辑</el-button>
          <el-button link type="danger" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div mt-4 flex justify-end>
      <el-pagination
        v-model:current-page="pageData.current"
        :page-size="10"
        background
        layout="total, prev, pager, next"
        :page-sizes="[10, 20, 50, 100]"
        :total="100"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
