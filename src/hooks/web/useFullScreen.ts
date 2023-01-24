import { useMessage } from '@/hooks/web/useMessage'

export const isSupported = document.fullscreenEnabled

export const isFullScreen = ref(false)

export function toggleFullScreen() {
  if (!isSupported) {
    const { $message } = useMessage()
    $message.warning('sorry, current browser does not supported!')
    return
  }
  if (isFullScreen.value) {
    document.exitFullscreen()
  } else {
    document.body.requestFullscreen()
  }
  isFullScreen.value = !isFullScreen.value
}
