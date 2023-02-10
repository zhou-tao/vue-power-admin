import type { ConfigEnv } from 'vite'
import { defineConfig, loadEnv } from 'vite'
import { createVitePlugins } from './build/vite/plugins'
import { createProxy } from './build/vite/proxy'
import { envParse } from './build/utils'
import { resolve } from 'path'

export default ({ mode }: ConfigEnv) => {
  const root = process.cwd()
  const env = envParse(loadEnv(mode, root) as ImportMetaEnv)
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
    envDir: resolve(__dirname, '.env'),
    server: {
      host: true,
      port: VITE_PORT,
      open: true,
      https: false,
      ...(VITE_USE_PROXY
        ? { proxy: createProxy(VITE_PROXY_PREFIX, VITE_BASE_API as string) }
        : {})
    },
    esbuild: {
      pure: VITE_DROP_CONSOLE ? ['console.log', 'debugger', 'alert'] : []
    },
    build: {
      reportCompressedSize: false,
      chunkSizeWarningLimit: 800
    },
    css: {
      devSourcemap: false,
      preprocessorOptions: {
        scss: {
          additionalData: '@use "./src/styles/common/index.scss" as *;'
        }
      },
      postcss: {
        plugins: [
          require('autoprefixer')
        ]
      },
    },
    plugins: createVitePlugins(env, mode === 'production')
  })
}
