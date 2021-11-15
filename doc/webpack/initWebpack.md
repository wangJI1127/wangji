### 创建一个简单的webpack项目
1. 新建一个文件夹，在文件夹目录执行`npm init -y`,会生成一个package.json文件
   1. > -y 指 yes;
   2. 在一个新的文件夹下执行完该命令后，会在该文件夹下生成一个package.json文件
   3. package.json:配置项目
2. 安装webpack核心
   1. `npm install webpack webpack-cli -D`




3. 安装eslint 依赖
   1. `npm install eslint eslint-config-enough eslint-webpack-plugin --save-dev`
   2. --save-dev:开发依赖
   3. --save:运行依赖

4. 安装babel:
   1. babel: 将es6语法转换为es5语法，向下兼容老的浏览器
   2. >npm install @babel/core @babel/preset-env babel-loader babel-eslint --save-dev
5. 新建src和dist目录
6. 在根目录下新建 <kbd>webpack.config.js</kbd>文件
7. 运行`npx webpack`打包
