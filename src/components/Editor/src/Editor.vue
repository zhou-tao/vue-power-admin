<script setup lang="ts" name="Editor">
  import '@wangeditor/editor/dist/css/style.css'
  import { Editor, Toolbar } from '@wangeditor/editor-for-vue'

  const props = defineProps<{
    modelValue: string
  }>()

  const emit = defineEmits(['update:modelValue'])

  // 编辑器实例，必须用 shallowRef
  const editorRef = shallowRef()

  // 内容 HTML
  const valueHtml = ref(props.modelValue)

  const toolbarConfig = {}
  const editorConfig = {
    placeholder: '请输入内容...'
  }

  // 组件销毁时，也及时销毁编辑器
  onBeforeUnmount(() => {
    const editor = editorRef.value
    if (editor == null) return
    editor.destroy()
  })

  function handleCreated(editor: any) {
    editorRef.value = editor // 记录 editor 实例，重要！
  }

  function handleChange() {
    emit('update:modelValue', valueHtml.value)
  }

// 内容 HTML
</script>

<template>
  <div style="border: 1px solid #ccc">
    <Toolbar
      style="border-bottom: 1px solid #ccc"
      :editor="editorRef"
      :default-config="toolbarConfig"
      mode="default"
    />
    <Editor
      v-model="valueHtml"
      style="height: 500px; overflow-y: hidden;"
      :default-config="editorConfig"
      mode="default"
      @on-created="handleCreated"
      @on-change="handleChange"
    />
  </div>
</template>

<style lang="scss" scoped></style>
