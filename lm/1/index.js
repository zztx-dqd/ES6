//Babel转码器，Babel是一个广泛使用的ES6转码器，可以将ES6代码转为ES5代码，从而在现有环境执行
//转码前
input.map(item=>item+1);
//转码后
input.map(function(item){
  return item+1;
});



//Babel游览器环境，Babel 6.0开始不在直接提供游览器版本而是要用构建工具构建出来。如果你没有或不想使用构建工具，可以通过安装5.x版本的babel-core模块获取;
//npm install babel-core@5;
//在node_modules/babel-coren目录中找browser.js，然后插入代码来执行
// <script src="node_modules/babel-core/browser.js"></script>
// <script type="text/babel">
//    Your ES6 code
// </script>


//**** 注意，网页中实时将ES6代码转为ES5，对性能会有影响。生产环境需要加载已经转码完成的脚本