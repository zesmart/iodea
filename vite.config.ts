import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0', // 监听所有地址，包括局域网
    port: 5173, // 端口号,
    open: false,
    proxy: {
      '^/api/zhihu/(.*)': {
        target: 'https://zhida.zhihu.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/zhihu/, ''),
        configure: (proxy) => {
          proxy.on('proxyRes', (proxyRes) => {
            delete proxyRes.headers['x-frame-options']
            delete proxyRes.headers['content-security-policy']
            delete proxyRes.headers['x-content-type-options']
          })
        }
      },
      '^/api/metaso/(.*)': {
        target: 'https://metaso.cn',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/metaso/, ''),
        configure: (proxy) => {
          proxy.on('proxyRes', (proxyRes) => {
            delete proxyRes.headers['x-frame-options']
            delete proxyRes.headers['content-security-policy']
            delete proxyRes.headers['x-content-type-options']
          })
        }
      }
    }
  }
})
