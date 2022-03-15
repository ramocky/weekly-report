const { defineConfig } = require("@vue/cli-service");
const IS_PROD = ["production", "prod"].includes(process.env.NODE_ENV);
const AutoImport = require("unplugin-auto-import/webpack");
const Components = require("unplugin-vue-components/webpack");
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers");

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    historyApiFallback: true,
    open: true, // 是否打开浏览器
    host: "localhost",
    port: "8080", // 代理端口
    //开发反向代理
    // proxy: {
    //   "/api": {
    //     target: "11", // 目标代理接口地址
    //     secure: false,
    //     changeOrigin: true, // 开启代理，在本地创建一个虚拟服务端
    //     // ws: true, // 是否启用websockets
    //     pathRewrite: {
    //       "^/api": "/",
    //     },
    //   },
    // },
  },
  publicPath: IS_PROD ? process.env.VUE_APP_PUBLIC_PATH : "./", //部署应用包时的基本 URL
  productionSourceMap: !IS_PROD, // 生产环境的 source map
  runtimeCompiler: !IS_PROD, // 是否使用包含运行时编译器的 Vue 构建版本
  lintOnSave: !IS_PROD, //eslint 约束
  outputDir: "./dist",
  assetsDir: "./static",
  configureWebpack: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
  },
  css: {
    loaderOptions: {
      // 给 sass-loader 传递选项
      sass: {},
      scss: {},
      // 给 less-loader 传递 Less.js 相关选项
      less: {
        globalVars: {},
      },
    },
  },
});
