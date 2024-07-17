import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "index" },
  ],
  npmClient: 'pnpm',
  proxy: {
    '/all': {
      target: 'https://v1.jinrishici.com',
      changeOrigin: true,
      pathRewrite: { '^/all': '' },
    },
  },
});
