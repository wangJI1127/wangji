const path = require('path')
module.exports = {
    entry: './src/index.js',  // 入口
    output: { // 输出
        filename: 'bundle.js', // 打包的文件名
        path: path.resolve(__dirname, 'dist') // 打包到哪里，“__dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录
    }
}
