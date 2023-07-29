<script setup lang="ts" name="Department">
  import type { FormInstance, FormRules } from 'element-plus'
  import { cloneDeep } from 'lodash-es'
  import { config, staticColumns, SubmitTypeEnum } from './usePage'
  import SearchModel from '@/components/SearchModel'
  import type { ColumnAttrs } from '@/components/TableModel'
  import TableModel, { useSlotButton } from '@/components/TableModel'
  import { getDepartmentList } from '@/api/_system/department'
  import type { DepartmentModel } from '@/api/_system/model/departmentModel'
  import { useMessage } from '@/hooks/web/useMessage'

  const tableModelRef = ref()
  const { $message } = useMessage()

  const queryData = reactive({
    name: ''
  })

  const loading = ref(false)
  const columns = ref([
    ...staticColumns,
    {
      fixed: 'right',
      label: '操作',
      width: '160',
      slot: ({ row }: ColumnAttrs<DepartmentModel>) =>
        [
          useSlotButton('编辑', () => {
            handleUpdate(row)
          }),
          useSlotButton('删除', () => {
            handleDelete([row])
          }, { type: 'danger' })
        ]
    }
  ])
  const tableData = ref<DepartmentModel[]>([])
  const selectedData = ref<DepartmentModel[]>([])

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

  function handleSelectionChange(rows: DepartmentModel[]) {
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

  function handleDelete(rows: DepartmentModel[]) {
    const { $msgbox } = useMessage()
    $msgbox.confirm(
      '确认删除选中数据条目吗？',
      '提示',
      {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }
    ).then(() => {
      console.log('do delete:', rows)
      loadData()
    })
  }

  function loadData() {
    loading.value = true
    setTimeout(async () => {
      const { list, current, total, size } = await getDepartmentList({
        query: queryData,
        ...pagination
      })
      pagination = { current, size, total }
      loading.value = false
      tableData.value = list
    }, 300)
  }

  loadData()

  let submitForm = reactive<Record<string, any>>({
    name: '',
    code: '',
    description: ''
  })

  function handleAdd() {
    submitType.value = SubmitTypeEnum.ADD
    submitForm = reactive({
      name: '',
      code: '',
      description: ''
    })
    visible.value = true
  }

  const submitFormRef = ref<FormInstance>()

  const rules = reactive<FormRules>({
    name: [
      { required: true, message: '请输入名称', trigger: 'blur' }
    ],
    code: [
      { required: true, message: '请输入代码', trigger: 'blur' }
    ]
  })

  function handleUpdate(row: DepartmentModel) {
    submitType.value = SubmitTypeEnum.UPDATE
    submitForm = reactive(cloneDeep(toRaw(row)))
    visible.value = true
  }

  function handleSubmit() {
    submitFormRef.value?.validate((valid) => {
      if (valid) {
        visible.value = false
        $message.success('保存成功！')
      }
      else {
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
        <div i-ri-add-fill mr-1 /> 新增
      </el-button>
      <el-button type="danger" :disabled="!selectedData.length" @click="handleDelete(selectedData)">
        <div i-ri-delete-bin-line mr-1 /> 删除
      </el-button>
    </div>
    <TableModel
      ref="tableModelRef"
      v-model:pagination="pagination"
      :loading="loading"
      :columns="columns"
      :data="tableData"
      row-key="id"
      @selection-change="handleSelectionChange"
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
        <el-form-item label="名称" prop="name">
          <el-input v-model="submitForm.name" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="代码" prop="code">
          <el-input v-model="submitForm.code" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="描述" prop="description">
          <el-input v-model="submitForm.description" type="textarea" placeholder="请输入" />
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
