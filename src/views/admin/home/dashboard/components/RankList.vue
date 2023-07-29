<script setup lang="ts" name="RankList">
  const contributors = [
    { name: 'Toryz', commits: 192, MoM: 0.2117 },
    { name: 'Dongs', commits: 123, MoM: 0.1223 },
    { name: 'EvanYou', commits: 90, MoM: -0.1131 },
    { name: 'AntFu', commits: 68, MoM: 0.0889 },
    { name: 'Github Bot', commits: 22, MoM: -0.2832 }
  ]

  const rankClass = ['first', 'second', 'third']

  function getPercent(val: number) {
    return `${val > 0 ? '+' : ''}${(val * 100).toFixed(2)}%`
  }
</script>

<template>
  <ul list="none" pl="0">
    <li v-for="({ name, commits, MoM }, index) in contributors" :key="name" my="4.5">
      <div flex="center" justify="between">
        <div flex items="center">
          <div
            w="8"
            h="8"
            leading="8"
            rounded="full"
            text="center"
            font="semibold mono"
            mr="4"
            :class="rankClass[index] || 'base'"
          >
            {{ index + 1 }}
          </div>
          <div flex="~ col">
            <span>{{ name }}</span>
            <span text="secondary" mt="0.5">{{ commits }} 次</span>
          </div>
        </div>
        <div flex items="center">
          <span mr="2" text="green-5" :class="{ decline: MoM < 0 }">
            <div i-app-growth />
          </span>
          <div font="medium" w="18">
            {{ getPercent(MoM) }}
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.base {
  @apply bg-stone-1 text-stone-5;
}

.first {
  @apply bg-yellow-2 text-yellow-5;
}

.second {
  @apply bg-sky-2 text-sky-5;
}

.third {
  @apply bg-slate-2 text-slate-5;
}

.decline {
  @apply rotate-x-180 text-rose-5;
}
</style>
