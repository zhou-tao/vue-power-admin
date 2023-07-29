<script setup lang="ts" name="VerificationCode">
  const props = withDefaults(defineProps<{
    mode: 'base' | 'modal'
  }>(), {
    mode: 'base'
  })

  // 移动卡片切圆半径

  const emit = defineEmits(['change'])
  const image = ref()
  const overlay = ref()

  const dragger = ref(false)
  const scrollView = ref()
  const offset = ref(0) // 鼠标初始按下时偏移距离
  const left = ref(0) // 移动偏移距离
  const refresh = ref(false)
  const targetPosition = ref([0, 0])
  const errorRange = ref(8) // 拖动终止重合误差范围
  const succeed = ref(false)
  const showResult = ref(false)
  const loading = ref(false)

  const size = ref(40) // 移动卡片正方形部分长度
  const radius = ref(8)

  onMounted(() => {
    renderCode()
  })

  function renderCode() {
    const ctx = image.value.getContext('2d')
    const ctx2 = overlay.value.getContext('2d', {
      willReadFrequently: true
    })
    const img = new Image()
    img.setAttribute('crossOrigin', 'anonymous')
    img.onload = () => {
      // 初始化状态
      left.value = 0
      succeed.value = false
      showResult.value = false
      loading.value = false
      setRandomPosition()
      const [x, y] = targetPosition.value

      // 绘制图片并裁剪（有留白）
      overlay.value.width = 320
      ctx2.clearRect(0, 0, 320, 150)
      drawClipPath(ctx2, x, y)
      ctx2.clip()
      ctx2.drawImage(img, 0, 0)

      // 裁剪去除空白部分
      const clippedImageData = ctx2.getImageData(x, y - radius.value, size.value + radius.value, size.value + radius.value)
      overlay.value.width = size.value + radius.value
      ctx2.putImageData(clippedImageData, 0, y - radius.value)

      // 增加阴影与边框
      drawClipPath(ctx2, 0, y)
      ctx2.shadowColor = '#000'
      ctx2.shadowBlur = 6
      ctx2.strokeStyle = '#52525B'
      ctx2.stroke()

      // 底图绘制与镂空留白
      ctx.drawImage(img, 0, 0)
      drawClipPath(ctx, x, y)
      ctx.fillStyle = '#fff'
      ctx.fill()
      refresh.value = false
    }
    img.src = 'https://picsum.photos/320/150'
    watch(refresh, (v) => {
      if (v) {
        if (succeed.value && props.mode === 'modal') return
        img.src = `https://picsum.photos/320/150?id=${Date.now()}`
      }
    })
  }

  // 拼图卡片路径绘制
  function drawClipPath(ctx: CanvasRenderingContext2D, x: number, y: number) {
    const width = size.value
    ctx.beginPath()
    ctx.moveTo(x, y)
    ctx.arc(x + width / 2, y, radius.value, Math.PI, 2 * Math.PI)
    ctx.lineTo(x + width, y)
    ctx.arc(x + width, y + width / 2, radius.value, -Math.PI / 2, Math.PI / 2)
    ctx.lineTo(x + width, y + width)
    ctx.lineTo(x, y + width)
    ctx.arc(x, y + width / 2, radius.value, Math.PI / 2, Math.PI * 1.5, true)
    ctx.closePath()
  }

  // 生成随机位置
  function setRandomPosition() {
    const randomNum = (min: number, max: number) => Math.floor(Math.random() * (max - min) + min)
    targetPosition.value = [randomNum(80, 250), randomNum(40, 100)]
  }

  function onMouseDown(e: MouseEvent) {
    dragger.value = true
    left.value = 0
    offset.value = e.offsetX
  }

  function onMouseMove(e: MouseEvent) {
    if (dragger.value) {
      const boxLeft = scrollView.value.getBoundingClientRect().left
      const scrollLeft = e.x - boxLeft - offset.value
      left.value = scrollLeft <= 0 ? 0 : scrollLeft >= 280 ? 280 : scrollLeft
    }
  }

  function handleScrollBack(up: boolean) {
    if (up) {
      const isSuccess = Math.abs(left.value - targetPosition.value[0]) <= errorRange.value
      succeed.value = isSuccess
      showResult.value = true
      emit('change', succeed.value)
      refresh.value = true
    }
    else if (!showResult.value) {
      left.value = 0
    }
    dragger.value = false
  }
</script>

<template>
  <div w-320px>
    <div rounded overflow-hidden text-0 relative>
      <canvas ref="image" width="320" height="150" />
      <canvas
        ref="overlay"
        absolute
        z-2
        width="320"
        height="150"
        :style="{ left: `${left}px` }"
      />
      <div
        absolute
        z-3
        top-1
        right-1
        text="20px zinc-2 hover:primary"
        cursor-pointer
        @click="loading = true; refresh = true"
      >
        <div i-ep-refresh :class="{ 'animate-spin': loading }" />
      </div>
      <div
        v-show="showResult"
        absolute
        z-5
        bottom-0
        left-0
        right-0
        h-0
        overflow-hidden
        class="open" :class="{ succeed }"
      >
        {{ succeed ? '验证通过！' : '验证失败，请重试！' }}
      </div>
    </div>
    <div
      ref="scrollView"
      h-50px
      bg-slate-3
      rounded
      mt-12px
      relative
      flex="center"
      text-zinc
      select-none
    >
      <div
        absolute
        w-50px
        h-50px
        bg="stone-1 hover:stone-2 active:blue"
        shadow-card-dark
        cursor-pointer
        rounded-sm
        text="primary active:main"
        flex="center"
        text-20px
        :style="{ left: `${left}px` }"
        @mousedown="onMouseDown"
        @mousemove="onMouseMove"
        @mouseleave="handleScrollBack(false)"
        @mouseup="handleScrollBack(true)"
      >
        <div i-app-double-arrow />
      </div>
      <div
        absolute
        left-0
        h-50px
        bg-sky
        opacity-60
        :style="{ width: `${left}px` }"
      />
      拖动滑块完成拼图
    </div>
  </div>
</template>

<style lang="scss" scoped>
.open {
  @apply h-26px bg-rose text-12px text-#fff flex-center;
}
.succeed {
  @apply bg-green;
}
</style>
