<script setup lang="ts" name="User">
  import SearchModel from '@/components/SearchModel'
  import TableModel, { ColumnAttrs, useSlotButton } from '@/components/TableModel'
  import { SearchItemConfig, useComponent } from '@/components/SearchModel'
  import { getUserList } from '@/api/_system/user'
  import { UserInfoModel } from '@/api/_system/model/userModel'
  const router = useRouter()
  const { ElInput, ElSelect, ElRadioButton } = useComponent()
  const data = reactive({
    username: '',
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

  const loading = ref(false)
  const columns = ref([
    { fixed: true, type: 'selection', width: '50' },
    { fixed: true, prop:'id', label:'编号', width:'70', align:'center' },
    { prop: 'username', label:'用户名', width:'180' },
    { prop: 'name', label:'姓名', width:'140' },
    { prop: 'gender', label:'性别', width:'80' },
    { prop: 'mobile', label:'联系电话' },
    { prop: 'roles', label:'权限' },
    { prop: 'deptName', label:'所在部门' },
    { prop: 'posts', label:'就职岗位' },
    {
      fixed:'right',
      label:'操作',
      width:'160',
      slot: ({ row }: ColumnAttrs<UserInfoModel>) =>
        [
          useSlotButton('详情', () => {
            router.push(`/admin/user/detail/${row.id}`)
          }),
          useSlotButton('编辑', () => {
            console.log(`edit: ${row.id}`)
          }),
          useSlotButton('删除', () => {
            console.log(`delete: ${row.id}`)
          }, { type: 'danger' })
        ]
    }
  ])
  const tableData = ref<UserInfoModel[]>([])

  const pagination = reactive({
    current: 1,
    size: 10,
    total: 100
  })

  function handleQuery() {
    loadData()
    console.log('query...', toRaw(data))
  }

  function handleReset() {
    loadData()
    console.log('reset...')
  }

  function onPageChange(current: number) {
    loadData()
    console.log(`to page: ${current}`)
  }

  function loadData() {
    loading.value = true
    setTimeout(async () => {
      const { list } = await getUserList()
      loading.value = false
      tableData.value = list
    },300)
  }

  loadData()
</script>

<template>
  <div page-card>
    <SearchModel v-model="data" :config="config" :per-line-count="4" @query="handleQuery" @reset="handleReset" />
    <div flex items="center">
      <el-button type="primary">
        <i-ri-add-fill /> 新增
      </el-button>
      <el-button type="danger">
        <i-ri-delete-bin-line /> 删除
      </el-button>
    </div>
    <TableModel
      :loading="loading"
      :columns="columns"
      :data="tableData"
      rowKey="id"
      v-model:pagination="pagination"
      @page-change="onPageChange"
    />
  </div>
</template>

<style lang="scss" scoped></style>
