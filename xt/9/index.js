function log(txt) {
    console.log(txt);
}

/*
var foo = 'bar';
var baz = {foo};
log(baz);
*/

/*
function f (x, y){
    return {x ,y};
}
log(f(1, 2));
*/

/*
var o = {
    method (){
        return 'hello world';
    },
    a (){
        return 'a';
    }
}
log(o.method());
log(o.a());
*/

/*
let birth = '1990-12-21'
var Person = {
    name: 'xt',

    birth,

    sayhello (){
        console.log(`my name is ${this.name}, my birth is ${this.birth}`);
    }
}
Person.sayhello();
*/

/*
function getPoint (){
    let [x, y] = [1, 10];
    let {a, b} = {a: '1', b: '2'};
    return {x, y, a, b};
}
log(getPoint());
*/


/*
// CommonJS 简写
var ms = {};

function getItem(key){
    return key in ms ? ms[key] : null;
}

function setItem(key, value){
    ms[key] = value;
}

function clear(){
    ms = {};
}

module.exports = {getItem, setItem, clear};
*/

/*
let arr = [0, 1, 2, 3];
log(5 in arr);
*/


/*
var cart = {
    _wheels: 4,

    get wheels() {
        return this._wheels;
    },

    set wheels(value) {
        if (value < this._wheels) {
            throw new Error(`value=${value} 小于 wheels=${this._wheels}`);
        }
        this._wheels = value;
    }
}
cart.wheels = 10;
cart.wheels = 1;
*/


/*
(function(){

    var _wheels = 0;
    window.Cart = {
        
        get wheels() {
            return _wheels;
        },

        set wheels(value) {
            if (value < _wheels) {
                throw new Error(`value=${value} 小于 wheels=${_wheels}`);
            }
            _wheels = value;
        }
    }

})();
Cart.wheels = 10;
// Cart.wheels = 1;

let test = ([num1, num2] = [0, 0]) => {
        let a = num1 * num2;
        return a + Cart.wheels;
    };
log(test([1, 2]));
*/

/*
let propKey = 'foo';
let obj = {
    [propKey]: true,
    ['a' + 'bc']: 123,
    ['h' + 'ello']() {
        return 'hi';
    }
}
log(obj);
*/


/*
// Object.assign

var target = {a: 1};
var source1 = {b: 2, c: 2};
var source2 = {c: 3};

Object.assign(target, source1, source2);
log(target);
*/

/*
// Object.assign 给对象添加属性
class Point {
    constructor(x = 0, y = 0) {
        Object.assign(this, {x, y});
    }
}
log(new Point(1, 2));
*/

/*
// Object.assign 给对象添加方法
function SomeClass() { };
Object.assign(SomeClass.prototype, {
    someMethod() {
        console.log('hello');
    }
});
new SomeClass().someMethod();
*/

/*
// Object.assign 克隆对象
function clone(origin) {
    let originProto = Object.getPrototypeOf(origin);
    return Object.assign(Object.create(originProto), origin);
}
*/

/*
var obj = {
    a: 1,
    b: 2,
    c: 3
}
for(let a of Object.keys(obj)){
    log(`key = ${a}, value = ${obj[a]}`);
}
log(Object.keys(obj));
log(Object.getOwnPropertyNames(obj));
*/

let proto = {};
let obj = {x: 10};
Object.setPrototypeOf(obj, proto);

proto.y = 20;
proto.z = 40;

log(obj);

log(Object.getPrototypeOf(obj));
proto.s = 60;
log(Object.getPrototypeOf(obj));
log(obj);