<script setup lang="ts" name="SlideBlock">

  const image = ref()
  const clip = ref()
  const dragger = ref(false)
  const scrollView = ref()
  const offset = ref(0)
  const left = ref(0)
  const refresh = ref(false)
  const targetPosition = ref([0, 0])
  const errorRange = ref(8) // 误差范围
  const succeed = ref(false)
  const showResult = ref(false)
  const loading = ref(false)

  const emit = defineEmits(['succeed'])

  onMounted(() => {
    renderCode()
  })

  function renderCode () {
    const ctx = image.value.getContext('2d', {
      willReadFrequently: true
    })
    const ctx2 = clip.value.getContext('2d')
    const img = new Image()
    img.setAttribute('crossOrigin', 'anonymous')
    img.onload = () => {
      left.value = 0
      showResult.value = false
      loading.value = false
      ctx.drawImage(img, 0, 0)
      targetPosition.value = [Math.floor(Math.random()*120 + 150), Math.floor(Math.random()*100 + 1)]
      const [x, y] = targetPosition.value
      const clipImage = ctx.getImageData(x, y, 50, 50)
      ctx2.putImageData(clipImage, 0 ,0)
      imageClipper(ctx, x, y)
      refresh.value = false
    }
    img.src = 'https://picsum.photos/320/150'
    watch(refresh, v => {
      if (v) {
        if (succeed.value) {
          emit('succeed')
          img.src = `https://picsum.photos/320/150?id=${Date.now()}`
        }
      }
    })
  }

  function imageClipper(ctx: CanvasRenderingContext2D, x: number, y: number) {
    // ctx.shadowColor = '#000'
    // ctx.shadowBlur = 5
    ctx.fillStyle = '#fff'
    ctx.fillRect(x, y, 50, 50)
    // ctx.beginPath()
    // const region = new Path2D()
    // region.rect(50, 50, 50, 50)
    // ctx.clip(region)
  }

  function onMouseDown (e: MouseEvent) {
    dragger.value = true
    left.value = 0
    offset.value = e.offsetX
  }

  function onMouseMove (e: MouseEvent) {
    if (dragger.value) {
      const boxLeft = scrollView.value.getBoundingClientRect().left
      const scrollLeft = e.x - boxLeft - offset.value
      left.value = scrollLeft <= 0 ? 0 : scrollLeft >= 280 ? 280 : scrollLeft
    }
  }

  function handleScrollBack (up: Boolean) {
    if (up) {
      const isSuccess = Math.abs(left.value - targetPosition.value[0]) <= errorRange.value
      succeed.value = isSuccess
      showResult.value = true
    }
    dragger.value = false
    refresh.value = true
  }

</script>

<template>
  <div w-320px>
    <div rounded overflow-hidden text-0 relative>
      <canvas ref="image" width="320" height="150"></canvas>
      <canvas
        ref="clip"
        absolute
        z-2
        width="50"
        height="50"
        shadow
        :style="{ left: `${left}px`, top: `${targetPosition[1]}px` }"
      ></canvas>
      <div
        absolute
        z-3
        top-1
        right-0
        text="20px zinc-2 hover:zinc-3"
        cursor-pointer
        @click="loading = true; refresh = true"
      >
        <i-ep-refresh :class="{ 'animate-spin': loading }" />
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
        :class="{ open: true, succeed }"
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
      center
      text-zinc
      select-none
    >
      <div
        absolute
        w-50px
        h-50px
        bg="stone-1 hover:stone-2"
        shadow-card-dark
        cursor-pointer
        rounded-sm
        text-primary
        center
        text-20px
        active:bg-blue
        active:text-main
        :style="{ left: `${left}px` }"
        @mousedown="onMouseDown"
        @mousemove="onMouseMove"
        @mouseleave="handleScrollBack(false)"
        @mouseup="handleScrollBack(true)"
      >
        <i-app-double-arrow />
      </div>
      <div
        absolute
        left-0
        h-50px
        bg-sky
        opacity-60
        :style="{ width: `${left}px` }"
      ></div>
      拖动滑块完成拼图
    </div>
  </div>
</template>

<style lang="scss" scoped>
.open {
  @apply h-26px bg-rose text-12px text-#fff center;
}
.succeed {
  @apply bg-green;
}
</style>
