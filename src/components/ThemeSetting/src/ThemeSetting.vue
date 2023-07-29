<script setup lang="ts" name="ThemeSetting">
  import ThemeColorPicker from './ThemeColorPicker.vue'
  import ThemeSwitch from '@/components/ThemeSwitch'
  import { MenuLayout } from '@/enums/menuEnum'
  import { useSettingStore } from '@/store/modules/setting'
  import { getCssVar, setCssVar } from '@/hooks/web/useCssVar'
  import { CSSVarEnum } from '@/enums/appEnum'

  const settingStore = useSettingStore()
  const {
    hasBreadcrumb,
    hasTabView,
    hasFooter,
    hasLocales,
    hasFpLoading,
    hasPageAnimate,
    hasProgress,
    isVerticalMenu
  } = storeToRefs(settingStore)

  const drawer = ref(false)

  function onTabViewChange(value: boolean) {
    const height = getCssVar(value ? CSSVarEnum.CONTENT_MIN_HEIGHT : CSSVarEnum.CONTENT_NAX_HEIGHT)
    setCssVar(CSSVarEnum.CONTENT_HEIGHT, height)
  }

  function handleFpLoadingChange() {
    settingStore.toggleFpLoading()
    return true
  }
</script>

<template>
  <div
    flex="center"
    fixed
    z-3
    right-0
    top="30%"
    w-12
    h-12
    bg-light_hover
    text="1.7rem"
    rounded-l
    cursor-pointer
    op="80 hover:100"
    transition-base
    @click="drawer = true"
  >
    <div i-fluent-emoji-flat-artist-palette />
  </div>
  <el-drawer
    v-model="drawer"
    title="项目设置"
    direction="rtl"
    size="20%"
  >
    <div flex="~ col" items="between">
      <el-divider>主题</el-divider>
      <ThemeSwitch type="switch" />
      <el-divider mt-12>
        导航栏
      </el-divider>
      <div flex="center" gap="6" text="5xl regular">
        <el-tooltip
          effect="dark"
          content="侧边菜单"
          placement="bottom"
        >
          <span :class="{ active: isVerticalMenu }" @click="settingStore.setLayout(MenuLayout.VERTICAL)">
            <div i-app-layout cursor="pointer" />
          </span>
        </el-tooltip>
        <el-tooltip
          effect="dark"
          content="顶部菜单"
          placement="bottom"
        >
          <span :class="{ active: !isVerticalMenu }" @click="settingStore.setLayout(MenuLayout.HORIZONTAL)">
            <div i-app-layout transform rotate-90 cursor="pointer" />
          </span>
        </el-tooltip>
      </div>
      <el-divider mt-12>
        主题色
      </el-divider>
      <ThemeColorPicker />
      <el-divider mt-12>
        界面
      </el-divider>
      <div w-full flex="~ col" gap="2">
        <div class="between">
          <span>面包屑</span>
          <el-switch
            v-model="hasBreadcrumb"
            inline-prompt
            active-text="开"
            inactive-text="关"
          />
        </div>
        <div class="between">
          <span>标签页</span>
          <el-switch v-model="hasTabView" inline-prompt active-text="开" inactive-text="关" @change="onTabViewChange" />
        </div>
        <div class="between">
          <span>页脚</span>
          <el-switch v-model="hasFooter" inline-prompt active-text="开" inactive-text="关" />
        </div>
      </div>
      <el-divider mt-12>
        功能
      </el-divider>
      <div w-full flex="~ col" gap="2">
        <div class="between">
          <span>国际化</span>
          <el-switch v-model="hasLocales" inline-prompt active-text="开" inactive-text="关" />
        </div>
      </div>
      <el-divider mt-12>
        动效
      </el-divider>
      <div w-full flex="~ col" gap="2">
        <div class="between">
          <span>首屏动画</span>
          <el-switch :model-value="hasFpLoading" inline-prompt active-text="开" inactive-text="关" :before-change="handleFpLoadingChange" />
        </div>
        <div class="between">
          <span>切换动画</span>
          <el-switch v-model="hasPageAnimate" inline-prompt active-text="开" inactive-text="关" />
        </div>
        <div class="between">
          <span>进度条</span>
          <el-switch v-model="hasProgress" inline-prompt active-text="开" inactive-text="关" />
        </div>
      </div>
    </div>
  </el-drawer>
</template>

<style lang="scss" scoped>
.active {
  @apply text-primary;
}

.between {
  @apply flex-center justify-between;
}
</style>
