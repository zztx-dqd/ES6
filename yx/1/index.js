
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

var a={'a':'dsds'}
var b={'b':'xzxz'}
var c={'c':'dsadsa'}

var d=Object.assign({},a,b,c)
console.log(d)


var size=Symbol('size');

class Collection{
    constructor(){
        this[size]=0;
    }
    add(item){
        this[this[size]]=item;
        this[size]++;
    }
    static sizeOf(instance){
        return instance[size];
    }
}


var x=new Collection();
Collection.sizeOf(x);

x.add('foo');
Collection.sizeOf(x);
x.add('foo2');
var s = Object.keys(x);
var d = Object.getOwnPropertyNames(x);
var f = Object.getOwnPropertySymbols(x);


var obj={
    name:'ss'
}
var proxy = new Proxy(obj,{
    get(target,property){
        if(property=='title'){
            return 34;
        }    
        return target[property];
    }
})

console.log(proxy)
console.log(proxy.name)
// console.log(proxy.title)
console.log(obj.title)


var handle={
    constructor(target,args){
        return new target(...args);
    }
}
var obj1={};
Object.defineProperty(obj1,'name',{
    value:'张三'
})
console.log(obj1.name)

var arr1=[1,3,4,6,7]
var m=arr1.filter(function(item){
    if(item>5){
        return item;
    }
})

console.log(m)
// var p={};
// var p1=Object.create(p)
// var p2=new Proxy(p1,{
//     enumerate(target){      
//         return ['a','b'][Symbol.iterator]();
//     }
// });

// for(var x in p2){
    
//     console.log(x)
// }


// var buf= new ArrayBuffer(32);
// var dataView=new DataView(buf);
// console.log(dataView.getUint8(0));

// var buffer=new ArrayBuffer(12);

// var x1= new Int32Array(buffer);
// x1[0]=2;
// console.log(x1[0])

// console.log(x1)

//set map

var s= new Set();
//set的成员唯一
[2,3,4,6,4,3,5,2].map(x=>s.add(x));
var s1=[...s].sort((a,b)=>a-b);
console.log(s1)

var s2=new Set([1,23,4,5,6,67,5,1,3,4,5,6])
var s3=[...s2].sort((a,b)=>a-b);
console.log(s3)

//判断相等为===    返回的是dom对象
function divs(){
    return [...document.querySelectorAll('div')];
}

var set=new Set(divs());
console.log(set)

var ss=new Set();
ss.add('width:"1"');
ss.add('height:"1"');
console.log([...ss])


let sa=new Set(['red','green','yellow'])

for(var item of sa.keys()){
    console.log(item)
}

for(var it of sa){
    console.log(it)
}

var arr=[1,3,5]
for (var item in arr){ 
    console.log(arr[item])
}

var arr1=arr.filter(x=>x>3)
console.log(arr1)


var a={'d':'s'};
var ws= new WeakSet();
ws.add(a)
console.log(ws)
console.log(ws.has(a))
//console.log(ws.d)
console.log(ws.has(a))

var m = new Map();
var o={p:'Hello World'};
m.set(o,'content');
console.log(m.get(o))
m.delete(o)

console.log(m.get(o))

var x2=1;
(function(){
    console.log(x2);
    var x2=2;
})();


function Animal(name){
    this.name=name;
    return this;
}
Animal.prototype.wow=function(){
    console.log(this.name+'!wow.');
    return this;
}
function Dog(name){
    this.name=name;
    return this;
}
Dog.prototype=new Animal();
Dog.prototype.run=function(){
    console.log(2323)
    return this;
}
Dog.prototype.wow=function(){
    console.log(this.name+'!wow.22222');
    return this;
}
var s=new Dog('汪汪')
s.wow().run();


var wm1 = new WeakMap();
var sa1={};
wm1.set(sa1,1);
wm1.get(sa1);
console.log(wm1.get(sa1));

var ss1=new Set();
ss1.add(2)
ss1.add(3)
ss1.add(4)
console.log([...ss1])

var obj2={a,d,b,c}

for(var key in obj2){
    console.log(key+'1')
}

var it=makeIterator([1,2,4]);
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

function makeIterator(array){
    var nextIndex=0;
    return {
        next:function(){
            return nextIndex<array.length?
            {value:array[nextIndex++],done:false}:
            {value:undefined,done:true};
        }
    }
}

var mpssss=new Map();
var sds={};
mpssss.set(sds,{num:1});
console.log(mpssss.get(sds).num)

for(var value of mpssss){
    document.write(JSON.stringify(value))
}
let obj4={
    *[Symbol.iterator](){
        yield 1;
        yield 2;
    }
}
console.log([...obj4])








