import { useMessage } from '@h/web/useMessage'

const Full_Screen_Event = 'fullscreenchange'

export const isSupported = document.fullscreenEnabled

export const isFullScreen = ref(false)

export function toggleFullScreen() {
  if (!isSupported) {
    const { $message } = useMessage()
    $message.warning('sorry, current browser does not supported!')
    return
  }

  // 监听点击与快捷键触发的全屏事件
  document.addEventListener(Full_Screen_Event, setFullScreenVal)
  if (isFullScreen.value) {
    document.exitFullscreen()
  }
  else {
    document.body.requestFullscreen()
  }
}

export function autoRemoveListener() {
  onBeforeUnmount(() => {
    document.removeEventListener(Full_Screen_Event, setFullScreenVal)
  })
}

function setFullScreenVal() {
  isFullScreen.value = !isFullScreen.value
}
