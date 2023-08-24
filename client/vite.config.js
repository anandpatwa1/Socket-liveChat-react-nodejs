import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   proxy: {
  //     // string shorthand: http://localhost:5173/foo -> http://localhost:4567/foo
  //     '/foo': 'http://localhost:8000',
  //     // with options: http://localhost:5173/api/bar-> http://jsonplaceholder.typicode.com/bar
  //     '/api': {
  //       target: 'http://localhost:8000',
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, ''),
  //     },
  //   }
  // }
  // server: {
  //   proxy: {
  //     // string shorthand: http://localhost:5173/foo -> http://localhost:4567/foo
  //     '/foo': 'http://localhost:8000',
  //     // with options: http://localhost:5173/api/bar-> http://jsonplaceholder.typicode.com/bar
  //     '/api': {
  //       target: 'http://localhost:8000',
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, ''),
  //     },
     
  //     // Proxying websockets or socket.io: ws://localhost:5173/socket.io -> ws://localhost:5174/socket.io
  //     '/socket.io': {
  //       target: 'ws://localhost:5666',
  //       ws: true,
  //     },
  //   },
  // },
})
