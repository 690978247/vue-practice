const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  // 部署应用包时的基本 URL,用法和 webpack 本身的 output.publicPath 一致
  publicPath: '/',
  // 输出文件目录
  outputDir: 'dist',
  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,    
  // 是否使用包含运行时编译器的 Vue 构建版本
  runtimeCompiler: false,  
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,
  devServer: {
    // 项目运行自动打开浏览器
    open: true,
  },
   // webpack相关配置
  // webpack基本配置 该对象将会被 webpack-merge 合并入最终的 webpack 配置
  configureWebpack: {
    name: 'Vue 练手项目',
    devtool: 'source-map',
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },
  // webpack高级配置 可以更细粒度的控制 webpack 其内部配置
  chainWebpack: (config) => {

  }
}