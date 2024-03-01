import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     host: '127.0.0.1',
//     port: 3030,
//     watch: {
//       usePolling: true,
//       interval: 100,
//     },
//   },
// });
export default defineConfig(({ command, mode, isSsrBuild, isPreview }) => {
  if (command === 'serve') {
    return {
      // dev specific config
      plugins: [react()],
      server: {
        host: '0.0.0.0',
        port: 3030,
        watch: {
          usePolling: true,
          interval: 100,
        },
      },
    }
  } else {
    // command === 'build'
    return {
      // build specific config
      base: '/victouriousprincess/',
      plugins: [react()]
    }
  }
})