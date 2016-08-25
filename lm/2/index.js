//let命令
//ES6新增了let命令，用来声明变量。它的用法类似于var，但是所声明的变量，只在let命令所在的代码块内有效
{
    var a=1;
    let b=1;
}
console.log(a);  //1
console.log(b);  //b is not defind

//for循环的计数器，就很合适使用let命令。
for (let i = 0; i < arr.length; i++) {}
//console.log(i);
//ReferenceError: i is not defined

// ***let不像var那样会发生“变量提升”现象。所以，变量一定要在声明后使用，否则报错。
var tmp="123";
for(true){
    tmp="abc"; //ReferenceError
    let tmp;
}

//****在代码块内，使用let命令声明变量之前，该变量都是不可用的。这在语法上，称为“暂时性死区”（temporal dead zone，简称TDZ）。
if(true){
    //TDZ开始
    tmp="abc";  //ReferenceError
    console.log(tmp);  //ReferenceError

    let tmp;//TDZ结束
    console.log(tmp); // undefined

    tmp=123;
     console.log(tmp); // 123
}

//****变量一定要在声明之后使用，否则就报错。

//let不允许在相同作用域内，重复声明同一个变量。

// 报错
function(){
    let a=10;
    var a=5;
}
// 报错
function(){
    let a=10;
    let a=5;
}

//块级作用域
//let实际上为JavaScript新增了块级作用域
function f1(){
    let n=5;
    if(true){
        let n=10;
    }
    console.log(n);//5
}
//块级作用域的出现，实际上使得获得广泛应用的立即执行匿名函数（IIFE）不再必要了。
//IIFE写法
(function(){
    var tmp="";
}())
//块级作用域
{
    let tmp ="";
}
