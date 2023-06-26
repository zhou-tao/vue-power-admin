import { ElMessage, ElMessageBox, ElNotification } from 'element-plus'

export const useMessage = () => ({
  $message: ElMessage,
  $msgbox: ElMessageBox,
  $notify: ElNotification
})
