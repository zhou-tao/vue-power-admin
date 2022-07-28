import { defineConfig } from 'vite-plugin-windicss'

export default defineConfig({
  darkMode: 'class',
  plugins: [
    // 滚动条插件 https://cn.windicss.org/plugins/community/scrollbar.html
    require('@windicss/plugin-scrollbar'),

    // Animation.css插件 https://cn.windicss.org/plugins/community/animations.html
    require('@windicss/plugin-animations')({
      settings: {
        animatedSpeed: 750,
        heartBeatSpeed: 1000,
        hingeSpeed: 2000,
        bounceInSpeed: 750,
        bounceOutSpeed: 750,
        animationDelaySpeed: 1000
      }
    })
  ],
  theme: {
    extend: {
      screens: {
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        '2xl': '1600px'
      }
    }
  }
})
