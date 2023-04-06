import { defineConfig } from 'vite'
import virtualHtml from 'vite-plugin-virtual-html'

// html 늘어나면 추가
const pages = {
  index: '/index.html',
  other: '/other.html',
};

export default defineConfig({
  base: './',
  plugins: [
    virtualHtml({ pages }),
  ],
  build: {
    rollupOptions: {
      // dist에 생성되는 경로
      output: {
        entryFileNames: `scripts/[name].js`,
        chunkFileNames: `scripts/[name].js`,
        assetFileNames: (chunkInfo) => {
          if (/\.(gif|jpe?g|tiff?|png|svg|webp|bmp)$/i.test(chunkInfo?.name)) {
            return `images/[name].[ext]`;
          }

          if (chunkInfo?.name.endsWith('.css')) {
            return `styles/[name].[ext]`;
          }

          return `[name].[ext]`;
        },
      }
    }
  }
});
