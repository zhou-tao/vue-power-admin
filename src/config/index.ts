import { defineConfig } from './utils'

export default defineConfig({
  //系统设置
  APP: {
    //业务中心侧边菜单标题
    title: 'Bo Admin',
    // 是否显示底部版权（包括Footer的显示）
    copyright: true,
    // 密码安全检查
    security: false
  },
  //http相关
  HTTP: {
    timeout: 10000
  },
  OAUTH: {
    //是否执行Auth登录（包括路由、接口检查token有效性）
    execute: true,
    //oauth中请求头内需加密的client_id
    client_id: 'client',
    //oauth中请求头内需加密的client_secret
    client_secret: '123456'
  },
  //地图相关
  MAP: {
    //高德地图应用
    AMap: {
      key: '1a00b758d4ea0e8e32624577da319712',
      src: 'https://webapi.amap.com/maps?v=1.4.15&key=1a00b758d4ea0e8e32624577da319712&callback=AMapLoader'
    },
    //百度地图应用
    BMap: {
      key: 'dxy31QRkkZKnfttKSWfxMYt8yNUXuBGp',
      src: 'http://api.map.baidu.com/api?v=3.0&ak=dxy31QRkkZKnfttKSWfxMYt8yNUXuBGp&callback=BMapLoader',
      //GL-3D地图
      glSrc:
        'https://api.map.baidu.com/api?v=1.0&type=webgl&ak=dxy31QRkkZKnfttKSWfxMYt8yNUXuBGp&callback=BMapLoader'
    }
  }
})
