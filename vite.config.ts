import { resolve } from 'node:path'
import type { ConfigEnv } from 'vite'
import { defineConfig, loadEnv } from 'vite'
import { parse } from 'vite-plugin-env-parser'
import autoprefixer from 'autoprefixer'
import { createVitePlugins } from './build/vite/plugins'
import { createProxy } from './build/vite/proxy'
import { createOptimizeDeps } from './build/vite/optimize-deps'

// eslint-disable-next-line no-control-regex
const INVALID_CHAR_REGEX = /[\x00-\x1F\x7F<>*#"{}|^[\]`;?:&=+$,_]/g
const DRIVE_LETTER_REGEX = /^[a-z]:/i

export default ({ mode }: ConfigEnv) => {
  const root = process.cwd()
  const envDir = resolve(__dirname, 'env')
  const env = parse(loadEnv(mode, envDir))
  const {
    VITE_PORT,
    VITE_BASE_API,
    VITE_USE_PROXY,
    VITE_PUBLIC_PATH,
    VITE_PROXY_PREFIX,
    VITE_DROP_CONSOLE
  } = env
  return defineConfig({
    root,
    base: VITE_PUBLIC_PATH,
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
        '@c': resolve(__dirname, 'src/components'),
        '@h': resolve(__dirname, 'src/hooks'),
        '#': resolve(__dirname, 'types')
      }
    },
    envDir,
    server: {
      host: true,
      port: VITE_PORT,
      open: true,
      https: false,
      ...(VITE_USE_PROXY
        ? { proxy: createProxy(VITE_PROXY_PREFIX, VITE_BASE_API) }
        : {})
    },
    esbuild: {
      pure: VITE_DROP_CONSOLE ? ['console.log', 'debugger', 'alert'] : []
    },
    build: {
      reportCompressedSize: false,
      chunkSizeWarningLimit: 800,
      rollupOptions: {
        output: {
          manualChunks: {
            '@wangeditor/editor-for-vue': ['@wangeditor/editor-for-vue'],
            'mockjs': ['mockjs'],
            'echarts/core': ['echarts/core'],
            'echarts/charts': ['echarts/charts'],
            'echarts/components': ['echarts/components'],
            'vue': ['vue'],
            'vue-router': ['vue-router'],
            'pinia': ['pinia'],
            'element-plus': ['element-plus'],
            'viewerjs': ['viewerjs'],
            'vue-i18n': ['vue-i18n'],
            'axios': ['axios'],
            'nprogress': ['nprogress']
          },
          // fix: github page not found _plugin-vue_export-helper.xxx.js
          sanitizeFileName(name) {
            const match = DRIVE_LETTER_REGEX.exec(name)
            const driveLetter = match ? match[0] : ''
            return (
              driveLetter
              + name.slice(driveLetter.length).replace(INVALID_CHAR_REGEX, '')
            )
          }
        }
      }
    },
    css: {
      devSourcemap: false,
      postcss: {
        plugins: [
          autoprefixer as any
        ]
      }
    },
    plugins: createVitePlugins(env, mode === 'production'),
    // fix(vite): optimized dependencies changed. reloading
    optimizeDeps: createOptimizeDeps()
  })
}
