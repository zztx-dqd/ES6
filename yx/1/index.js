
//import {testDemo} from './test';

// var test=[
//     {
//         name:'ttaccp1',
//         age:'102',
//         height:110,
//         width:110
//     },
//     {
//         name:'ttaccp1',
//         age:'102',
//         height:110,
//         width:110
//     },
//     {
//     name:'ttaccp3',
//     age:'102',
//     height:110,
//     width:110
//     }
// ]
// var app=document.querySelector("#app");
// var str=`
//         <ul>
//             <% for (var i=0,len=test.length;i<len;i++){%>
//                 <li><%= test[i].name %></li>    
//             <%}%>    
//         </ul>
//     `;
// app.innerHTML=str;

// var x=1;
// var y=2;
// app.innerHTML+=`${x+y}`;
// var s1=Math.pow(2,53)-1;
// var s2=Number.isSafeInteger(s1);
// console.log(s2)

// var s1=0.995;
// var s2=Math.round(s1*100);
// console.log(Number.parseInt(s2));
// var c=function(c){
//     return console.log(c);
// };
// c("11");
// function test1(a,b){
//     return Array.from(arguments);
// }
// console.log(test1(1,2));
// console.log(Array.from('test'))


// Object.defineProperties(proxy,'name',{
//     value:'332',
//     writeable:false
// });

// let letter=['a','b','c'];
// let entries=letter.entries();
// console.log(entries.next().value);
// console.log(entries.next().value);
// console.log(entries.next().value);
// console.log(entries.next().value);

// let a1=[1,2,3,4,5];

// console.log(a1)
// let a2=a1.map((item)=>{return item*item})
// console.log(a2)

// function demo(x,y="sdsds"){
//     console.log(x+y);
// }
// demo('张三','dsdsddddd')
// let foo='dsds';
// let f= x =>foo;
// var f=function(x){
//     return foo;
// }
// function f(x){
//     return foo
// }
// console.log(f())

// const sortNum=(...number)=>{
//     return number.sort();
// }

// console.log(...[1,2,6,8,1,3,3,4])

// function test(a,b,c){
//     var s= [...arguments];
//     console.log(typeof s);
//     console.log(s);
// }
// test(1,4,6,7,3)

// console.log(Math.max(...[4,6,7,9,23,45,1,22]));
// function test(a,b,c){
//     return [...arguments];
// }
// console.log(test(1,4,6,7,3));
// console.log([...'hello'])


// console.log([...'hello'].length)

// let map=new Mao([
//     [1,'one'],
//     [2,'two'],
//     [3,'three']
// ]);

// function foo(){}
// console.log(foo.bind({}).name)
// console.log((function(){}).bind({}).name)


// var get1=id=>({id:'sdsds',test:'ddddd'});
// console.log(get1());

// const head=(head,...tail)=>[head,...tail];
// console.log(head(1,2,3,4,6));

// var Demo=((window)=>{
//     var test=function(...opt){

//         console.log([...opt][0].name)
//     }
//     test.prototype.de=function(){
//         console.log(this)
//     }
//     return test;
// })(window);
// var s=new Demo({
//     id:1,
//     name:'张三'
// });
// s.de();


// let [a, b, ...c] = [1, 2, 3, 4, 5, 6];
// console

//console.log([...1,2,4]==[1,2,4])


// function test(str){
//     console.log(...str[0].name)
// }

// test([{
//     id:1,
//     name:'张三'
// }])


