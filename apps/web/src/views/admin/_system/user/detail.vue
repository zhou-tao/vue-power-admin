<script setup lang="ts" name="UserDetail">
  const router = useRouter()
</script>

<template>
  <div page-card>
    <div flex items="center" mb-4>
      <el-button @click="router.go(-1)">
        <i-ri-arrow-go-back-fill />
        返回
      </el-button>
    </div>
    <!-- <div text="lg" font="medium" mb-2>基础信息</div> -->
    <el-descriptions
      :column="3"
      size="large"
      border
    >
      <el-descriptions-item :span="3">
        <template #label>
          <div flex items="center">
            <i-ri-user-3-line />
            用户名
          </div>
        </template>
        ikun
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <div>
            姓名
          </div>
        </template>
        坤坤
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <div>
            性别
          </div>
        </template>
        女
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <div>
            联系电话
          </div>
        </template>
        18818186868
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <div>
            权限
          </div>
        </template>
        <el-tag size="small">用户</el-tag>
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <div>
            所在部门
          </div>
        </template>
        产品研发部
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <div>
            就职岗位
          </div>
        </template>
        前端
      </el-descriptions-item>
    </el-descriptions>
    <div text="lg" font="medium" mt-6 mb-2>职业生涯</div>
    <el-timeline>
      <el-timeline-item timestamp="2018/4/12" placement="top">
        <el-card>
          <h4>Update Github template</h4>
          <p>Tom committed 2018/4/12 20:46</p>
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2018/4/3" placement="top">
        <el-card>
          <h4>Update Github template</h4>
          <p>Tom committed 2018/4/3 20:46</p>
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2018/4/2" placement="top">
        <el-card>
          <h4>Update Github template</h4>
          <p>Tom committed 2018/4/2 20:46</p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<style lang="scss" scoped></style>
