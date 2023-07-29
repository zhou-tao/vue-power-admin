<script setup lang="ts" name="Personal">
  import cloneDeep from 'lodash-es/cloneDeep'
  import { useMessage } from '@/hooks/web/useMessage'
  import { useUserStore } from '@/store/modules/user'
  import Previewer from '@/utils/previewer'

  const $router = useRouter()
  const { $message } = useMessage()
  const avatar = ref()
  const passwordFormRef = ref()
  const currentTab = ref('info')
  const userStore = useUserStore()
  const formData = reactive({
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  })

  const formRules = {
    oldPassword: [
      { required: true, message: '请输入原密码', trigger: 'blur' }
    ],
    newPassword: [
      { required: true, message: '请输入新密码', trigger: 'blur' }
    ],
    confirmPassword: [
      {
        required: true,
        trigger: 'blur',
        validator: (rule: any, value: any, callback: any) => {
          if (value === '') {
            callback(new Error('请再次输入新密码'))
          }
          else if (value !== formData.newPassword) {
            callback(new Error('两次输入的密码不一致!'))
          }
          else {
            callback()
          }
        }
      }
    ]
  }

  onMounted(() => {
    // eslint-disable-next-line no-new
    new Previewer(avatar.value)
    const route = useRoute()
    const { tab } = route.query
    currentTab.value = (tab as string) || 'info'
  })

  async function submit() {
    const valid = await passwordFormRef.value.validate()
    if (!valid) return
    $message.success('修改成功！请重新登录')
    $router.replace('/login')
  }

  const visible = ref(false)
  const submitFormRef = ref()

  let submitForm = reactive<Record<string, any>>({
    username: '',
    name: '',
    gender: null,
    mobile: '',
    roles: [],
    deptName: '',
    posts: []
  })
  const rules = {
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
    ]
  }

  async function handleSubmit() {
    const valid = await submitFormRef.value.validate()
    if (!valid) return
    $message.success('操作成功！')
  }

  function openDialog() {
    visible.value = true
    const user = toRaw(userStore.$state)
    const rowData: Record<string, any> = reactive(cloneDeep(user))
    rowData.roles = user.roles.map(r => r.id)
    rowData.posts = user.posts.map(p => p.id)
    submitForm = rowData
  }
</script>

<template>
  <div page-card h-content pl-0>
    <el-tabs v-model="currentTab" stretch tab-position="left" class="h-full" style="--el-tabs-header-height: 50px">
      <el-tab-pane name="info">
        <template #label>
          <div flex-center>
            <div i-ep-avatar mr-1 />
            <span>账户信息</span>
          </div>
        </template>
        <div class="pane">
          <el-descriptions size="large" title="用户信息" :column="2" border>
            <template #extra>
              <el-button type="primary" @click="openDialog">
                <div i-ep-edit mr-1 />
                资料修改
              </el-button>
            </template>
            <el-descriptions-item label="用户名">
              {{ userStore.username }}
            </el-descriptions-item>
            <el-descriptions-item label="头像">
              <img
                ref="avatar"
                :src="userStore.avatar"
                alt="avatar"
                width="80"
                rounded
                cursor="pointer"
              >
            </el-descriptions-item>
            <el-descriptions-item label="姓名">
              {{ userStore.name }}
            </el-descriptions-item>
            <el-descriptions-item label="性别">
              {{ userStore.gender === '1' ? '男' : '女' }}
            </el-descriptions-item>
            <el-descriptions-item label="电话">
              {{ userStore.mobile }}
            </el-descriptions-item>
            <el-descriptions-item label="角色">
              <el-tag v-for="role in userStore.roles" :key="role.id" type="success">
                {{ role.name }}
              </el-tag>
            </el-descriptions-item>
            <el-descriptions-item label="部门">
              {{ userStore.deptName }}
            </el-descriptions-item>
            <el-descriptions-item label="岗位">
              <el-tag v-for="post in userStore.posts" :key="post.id" type="warning" class="mx-1">
                {{ post.name }}
              </el-tag>
            </el-descriptions-item>
            <el-descriptions-item label="个人说明">
              树叶的一生，只是为了归根么？
            </el-descriptions-item>
          </el-descriptions>
        </div>
      </el-tab-pane>
      <el-tab-pane name="password">
        <template #label>
          <div flex-center>
            <div i-ep-lock mr-1 />
            <span>密码修改</span>
          </div>
        </template>
        <div class="pane" flex-center>
          <el-form
            ref="passwordFormRef"
            size="large"
            :model="formData"
            :rules="formRules"
            label-position="left"
            label-width="80px"
            status-icon
            class="w-120"
            mt-16
          >
            <el-form-item label="原密码" prop="oldPassword">
              <el-input v-model="formData.oldPassword" type="password" />
            </el-form-item>
            <el-form-item label="新密码" prop="newPassword">
              <el-input v-model="formData.newPassword" type="password" />
            </el-form-item>
            <el-form-item label="再次输入" prop="confirmPassword">
              <el-input v-model="formData.confirmPassword" type="password" />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submit">
                保存
              </el-button>
              <el-button>取消</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-tab-pane>
    </el-tabs>
    <el-dialog
      v-model="visible"
      :width="600"
      title="资料修改"
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
            <el-option label="用户" :value="1" />
            <el-option label="管理员" :value="0" />
          </el-select>
        </el-form-item>
        <el-form-item label="部门" prop="deptName">
          <el-input v-model="submitForm.deptName" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="岗位" prop="posts">
          <el-select v-model="submitForm.posts" multiple style="width: 100%">
            <el-option label="前端" :value="0" />
            <el-option label="后端" :value="1" />
            <el-option label="产品" :value="2" />
            <el-option label="测试" :value="3" />
            <el-option label="开源" :value="4" />
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

<style lang="scss" scoped>
.pane {
 @apply py-6 px-6;
}
</style>
