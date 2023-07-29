<script setup lang="ts" name="Dict">
  import type { FormInstance, FormRules } from 'element-plus'
  import { cloneDeep } from 'lodash-es'
  import { config, staticColumns, SubmitTypeEnum } from './usePage'
  import SearchModel from '@/components/SearchModel'
  import type { ColumnAttrs } from '@/components/TableModel'
  import TableModel, { useSlotButton } from '@/components/TableModel'
  import { getDictList } from '@/api/_system/dict'
  import type { DictModel } from '@/api/_system/model/dictModel'
  import { useMessage } from '@/hooks/web/useMessage'

  const tableModelRef = ref()
  const router = useRouter()
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
      slot: ({ row }: ColumnAttrs<DictModel>) =>
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
  const tableData = ref<DictModel[]>([])
  const selectedData = ref<DictModel[]>([])

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

  function handleSelectionChange(rows: DictModel[]) {
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

  function handleDelete(rows: DictModel[]) {
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
      const { list, current, total, size } = await getDictList({
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
    options: [{
      label: '',
      value: ''
    }],
    description: ''
  })

  function handleAdd() {
    submitType.value = SubmitTypeEnum.ADD
    submitForm = reactive({
      name: '',
      code: '',
      options: [{
        label: '',
        value: ''
      }],
      description: ''
    })
    visible.value = true
  }

  const submitFormRef = ref<FormInstance>()

  const rules = reactive<FormRules>({
    name: [
      { required: true, message: '请输入字典名称', trigger: 'blur' }
    ],
    code: [
      { required: true, message: '请输入字典代码', trigger: 'blur' }
    ],
    options: [
      { required: true, message: '请添加字典选项', trigger: 'change' }
    ]
  })

  function handleUpdate(row: DictModel) {
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

  const dictTypeData = [
    { label: '菜单', value: 'MENU_TYPE', children: [] },
    { label: '角色', value: 'AUTH_TYPE', children: [] },
    { label: '性别', value: 'GENDER', children: [] },
    { label: '职级', value: 'JOB_LEVEL', children: [] },
    {
      label: '岗位',
      value: 'POST',
      children: [
        { label: '开发', value: 'JOB_LEVEL', children: [] },
        { label: '测试', value: 'JOB_LEVEL', children: [] },
        { label: '运维', value: 'JOB_LEVEL', children: [] }
      ]
    }
  ]

  function handleNodeClick(node: any) {
    console.log('search by:', toRaw(node))
    loadData()
  }
</script>

<template>
  <div page-pure>
    <Splitter direction="row" :prev-default-percent="20" :draggable="false">
      <template #prev>
        <SearchTree enable-filter default-expand-all :data="dictTypeData" node-key="value" @node-click="handleNodeClick" />
      </template>
      <template #next>
        <SearchModel
          v-model="queryData"
          :config="config"
          :per-line-count="3"
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
            <el-form-item label="选项" prop="options">
              <div
                v-for="option in submitForm.options"
                :key="option.value"
                w-full
                flex="center"
                justify="between"
                gap="2"
                my="2"
              >
                <el-input v-model="option.label" placeholder="请输入选项名" />
                <el-input v-model="option.value" placeholder="请输入选项值" />
              </div>
              <el-button w="full" plain @click="submitForm.options.push({ label: '', value: '' })">
                添加
              </el-button>
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
      </template>
    </Splitter>
  </div>
</template>
