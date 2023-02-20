<script setup lang="ts" name="User">
  import type { FormInstance, FormRules } from 'element-plus'
  import SearchModel from '@/components/SearchModel'
  import TableModel, { ColumnAttrs, useSlotButton } from '@/components/TableModel'
  import { getUserList } from '@/api/_system/user'
  import { UserInfoModel } from '@/api/_system/model/userModel'
  import { useMessage } from '@/hooks/web/useMessage'
  import { config, staticColumns, SubmitTypeEnum } from './usePage'
  import { cloneDeep } from 'lodash-es'

  const tableModelRef = ref()
  const router = useRouter()
  const { $message } = useMessage()

  const queryData = reactive({
    username: '',
    name: '',
    gender: '',
    role: '',
    deptName: '',
    post: ''
  })

  const loading = ref(false)
  const columns = ref([
    ...staticColumns,
    {
      fixed:'right',
      label:'操作',
      width:'160',
      slot: ({ row }: ColumnAttrs<UserInfoModel>) =>
        [
          useSlotButton('详情', () => {
            router.push(`/system/user/detail/${row.id}`)
          }),
          useSlotButton('编辑', () => {
            handleUpdate(row)
          }),
          useSlotButton('删除', () => {
            handleDelete([row])
          }, { type: 'danger' })
        ]
    }
  ])
  const tableData = ref<UserInfoModel[]>([])
  const selectedData = ref<UserInfoModel[]>([])

  let pagination = reactive({
    current: 1,
    size: 10,
    total: 100
  })

  const visible = ref(false)
  const submitType = ref(SubmitTypeEnum.ADD)

  function handleQuery() {
    loadData()
  }

  function handleReset() {
    loadData()
  }

  function handleSelectionChange(rows: UserInfoModel[]) {
    selectedData.value = rows
  }

  function handlePageChange(current: number) {
    pagination.current = current
    loadData()
  }

  function handleSizeChange(size: number) {
    pagination.size = size
    loadData()
  }

  function handleDelete(rows: UserInfoModel[]) {
    const { $msgbox } = useMessage()
    $msgbox.confirm(
      '确认删除选中数据条目吗？',
      '提示',
      {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }
    ).then(() => {
      console.log('do delete:', rows)
      loadData()
    })
  }

  function loadData() {
    loading.value = true
    setTimeout(async () => {
      const { list, current, total, size } = await getUserList({
        query: queryData,
        ...pagination
      })
      pagination = { current, size, total }
      loading.value = false
      tableData.value = list
    },300)
  }

  loadData()

  let submitForm = reactive<Record<string, any>>({
    username: '',
    name: '',
    gender: null,
    mobile: '',
    roles: [],
    deptName: '',
    posts: []
  })

  function handleAdd() {
    submitType.value = SubmitTypeEnum.ADD
    submitForm = reactive({
      username: '',
      name: '',
      gender: null,
      mobile: '',
      roles: [],
      deptName: '',
      posts: []
    })
    visible.value = true
  }

  const submitFormRef = ref<FormInstance>()

  const rules = reactive<FormRules>({
    username: [
      { required: true, message: '请输入用户名', trigger: 'blur' }
    ],
    name: [
      { required: true, message: '请输入姓名', trigger: 'blur' }
    ],
    gender: [
      { required: true, message: '请选择性别', trigger: 'change' }
    ],
    mobile: [
      { required: true, message: '请输入联系电话', trigger: 'blur' }
    ],
    roles: [
      { required: true, message: '请选择权限', trigger: 'change' }
    ],
  })

  function handleUpdate(row: UserInfoModel) {
    submitType.value = SubmitTypeEnum.UPDATE
    // @ts-ignore
    const rowData: Record<string, any> = reactive(cloneDeep(toRaw(row)))
    rowData.roles = row.roles.map(r => r.code)
    rowData.posts = row.posts.map(p => p.code)
    submitForm = rowData
    visible.value = true
  }

  function handleSubmit() {
    submitFormRef.value?.validate(valid => {
      if (valid) {
        visible.value = false
        $message.success('保存成功！')
      } else {
        $message.warning('请完善必填选项！')
      }
    })
  }

</script>

<template>
  <div page-card>
    <SearchModel
      v-model="queryData"
      :config="config"
      :per-line-count="4"
      @query="handleQuery"
      @reset="handleReset"
    />
    <div flex items="center">
      <el-button type="primary" @click="handleAdd">
        <i-ri-add-fill /> 新增
      </el-button>
      <el-button type="danger" :disabled="!selectedData.length" @click="handleDelete(selectedData)">
        <i-ri-delete-bin-line /> 删除
      </el-button>
    </div>
    <TableModel
      ref="tableModelRef"
      :loading="loading"
      :columns="columns"
      :data="tableData"
      row-key="id"
      @selection-change="handleSelectionChange"
      v-model:pagination="pagination"
      @page-change="handlePageChange"
      @size-change="handleSizeChange"
    />
    <el-dialog
      v-model="visible"
      :width="600"
      :title="submitType"
      :show-close="false"
      :close-on-click-modal="false"
      @closed="submitFormRef?.resetFields()"
    >
      <el-form
        ref="submitFormRef"
        :model="submitForm"
        :rules="rules"
        label-width="100px"
        style="width: 95%"
        status-icon
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="submitForm.username" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="姓名" prop="name">
          <el-input v-model="submitForm.name" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="性别" prop="gender">
          <el-select v-model="submitForm.gender" style="width: 100%">
            <el-option label="男" value="1" />
            <el-option label="女" value="0" />
          </el-select>
        </el-form-item>
        <el-form-item label="电话" prop="mobile">
          <el-input v-model="submitForm.mobile" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="权限" prop="roles">
          <el-select v-model="submitForm.roles" multiple style="width: 100%">
            <el-option label="用户" value="1" />
            <el-option label="管理员" value="0" />
          </el-select>
        </el-form-item>
        <el-form-item label="部门" prop="deptName">
          <el-input v-model="submitForm.deptName" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="岗位" prop="posts">
          <el-select v-model="submitForm.posts" multiple style="width: 100%">
            <el-option label="前端" value="0" />
            <el-option label="后端" value="1" />
            <el-option label="产品" value="2" />
            <el-option label="测试" value="3" />
          </el-select>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="visible = false">取消</el-button>
          <el-button type="primary" @click="handleSubmit">
            保存
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
