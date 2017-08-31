# gulp-webpack构建前端工作流
dreamhuan <fu_kaiqi@qq.com>
github: [gulp-webpack-study](https://github.com/dreamhuan/gulp-webpack-study)
  
### 使用
1. npm i
1. bower i
1. npm start
1. 访问localhost:3000/app/index.html
  
  
### 开发说明
1. HTML文件放在src/app,支持静态引入@@include("./xxx/xxx.html")见index.html的做法
1. 样式文件放在src/css,支持less,sass,css,less和sass会自动编译,css会自动添加浏览器前缀以及代码压缩
1. 需要自己在html引入文件路径写`编译完后`的路径"../css/xxx","../js/xxx","../lib/xxx/xxx"
1. 第三方库的话能用bower就用bower安装，装在src/lib/bower下，没有bower的就下载完放到src/lib下，然后正常引入就好，注意顺序

### 解决的问题
1. js编译，可以愉快的使用es6了
1. less，sass编译，可以愉快的...
1. 引入静态文件@@include 可以共享header和footer了，或者别的想要分块写的也行(对应的css也要@import哦)


