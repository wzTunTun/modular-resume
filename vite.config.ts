import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Unocss from 'unocss/vite'
import { presetUno, presetAttributify, presetIcons } from 'unocss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), Unocss({
    presets: [presetAttributify(), presetUno(), presetIcons()], // 使用自带的内部预设， 按需引用
    rules: [
      [
        'p-c',
        {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: `translate(-50%, -50%)`
        }
      ],
      [
        'p-t',
        {
          position: 'absolute',
          top: '0',
        }
      ],
      [
        'f-c',
        {
          display: 'flex',
          'justify-content': 'center',
          'align-items': 'center'
        }
      ],
      [
        'bg-or',
        {
          background-color: 'orange'
        }
      ]
    ]
  }
  )]
})
