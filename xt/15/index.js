function log(txt) {
    console.log(txt);
}


/*
function* helloworldGenerator(){
    yield 'hello';
    yield 'world';
    return 'ending';
}
let hw = helloworldGenerator();
log(hw.next());
log(hw.next());
log(hw.next());
log(hw.next()); 
*/


/*
function* f() {
    console.log('exec');
}
let fGenerator = f();

setTimeout(function () {
    fGenerator.next();
}, 2000);
*/


/*
var arr = [1, [[2, 3], 4], [5, 6]];
var flat = function* (a) {

    for (let i = 0, len = a.length, item; i < len; i++) {
        item = a[i];
        if (Array.isArray(item)) {
            yield* flat(item);
        } else {
            yield item;
        }
    }
}
for (let item of flat(arr)) {
    log(item);
}
*/


/*
let myIterable = {};
myIterable[Symbol.iterator] = function* (){
    yield 1;
    yield 2;
    yield 3;
}
log([...myIterable]);
*/



/*
function* gen(){

}
let g = gen();

log(g[Symbol.iterator]() === g);
*/


/*
function* f(){
    for(let i = 0; true; i++){
        let reset = yield i;
        if(reset){
            i = -1;
        }
    }
}
let g = f();
log(g.next());
log(g.next());
log(g.next());
log(g.next(true));
log(g.next());
log(g.next());
log(g.next());
log(g.next());
log(g.next());
*/

/*
function* foo (x){
    var y = 2 * (yield (x + 1));
    var z = yield (y / 3);
    return (x + y + z);
}
var g = foo(5);
log(g.next());
log(g.next(12));
log(g.next(13));
*/


/*
function* dataConsumer(){
    console.log('Started');
    console.log(`1. ${yield}`);
    console.log(`2. ${yield}`);
}
let g = dataConsumer();
g.next()
g.next('a')
g.next('b')
*/


/*
function* foo(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    return 5;
}
for(let item of foo()){
    log(item);
}
*/


/*
function* fibonacci() {

    let [prev, curr] = [0, 1];
    while (true) {
        [prev, curr] = [curr, prev + curr];
        yield curr;
    }
}
for (let item of fibonacci()) {
    if (item > 1000) break;
    log(item);
}
*/



/*
function* objectEntries() {
    
    let propKeys = Object.keys(this);
    for (let key of propKeys) {
        yield [key, this[key]];
    }
}

var jane = { first: 'Jane', last: 'Doe' };
jane[Symbol.iterator] = objectEntries;

for (let [key, value] of jane) {
    log(`key = ${key}, value = ${value}`);
}
*/




/*
var g = function* () {
    try {
        yield;
    } catch (e) {
        log(`内部捕获 ${e}`);
    }
}
var i = g();
i.next()

try {
    i.throw('a');
    i.throw('b');
} catch (e) {
    console.log('外部捕获', e);
}
*/




/*
function* foo() {
    yield 'a';
    yield* bar();
    yield 'd';
}
function* bar() {
    yield 'b';
    yield 'c';
}
for (let v of foo()) {
    log(v);
}
*/


/*
function* inner(){
    yield 'hello';
}

function* outer1(){
    yield 'open';
    yield inner();
    yield 'close';
}

function* outer2(){
    yield 'open';
    yield* inner();
    yield 'close';
}

let g1 = outer1();

log(g1.next());
log(g1.next());
log(g1.next());

let g2 = outer2();

log(g2.next());
log(g2.next());
log(g2.next());
*/


/*
function* gen(){
  yield* ["a", "b", "c"];
}
var g = gen();
log(g.next());
log(g.next());
log(g.next());
log(g.next());
*/


/*
let read = (function* () {
  yield 'hello';
  yield* 'hello';
})();
log(read.next());
log(read.next());
log(read.next());
log(read.next());
log(read.next());
log(read.next());
*/


/*
function* foo() {
    yield 2;
    yield 3;
    return 'foo';
}
function* bar() {
    yield 1;
    var v = yield* foo();
    console.log(`v: ${v}`);
    yield 4;
}
let g = bar();
log(g.next());
log(g.next());
log(g.next());
log(g.next());
*/



/*
function* foo(){
    yield 'a';
    yield 'b';
    return 'result';
}
function* bar(g){
    let result = yield* g;
    log(result);
}
log([...bar(foo())]);
*/



/*
function* iterTree(tree) {
    if (Array.isArray(tree)) {
        for (let i = 0, len = tree.length, item; i < len; i++) {
            yield* iterTree(tree[i]);
        }
    } else {
        yield tree;
    }
}
let arr = [0, [1, 2], [3, [4, 5], 6], 7];
log([...iterTree(arr)]);
for(let v of iterTree(arr)){
    log(v);
}
*/



/*
function Tree(left, label, right) {
    this.left = left;
    this.label = label;
    this.right = right;
}
function make(array) {
    if (array.length == 1) return new Tree(null, array[0], null);
    return new Tree(make(array[0]), array[1], make(array[2]));
}

function* inorder(t) {
    if (t) {
        yield* inorder(t.left);
        yield t.label;
        yield* inorder(t.right);
    }
}

function reset(t) {
    if (t.left) {
        return [reset(t.left), t.label, reset(t.right)];
    } else {
        return [null, t.label, null];
    }
}

var _data = [
    [
        ['a'],
        'b',
        ['c']
    ],
    'd',
    [
        ['e'],
        'f',
        ['g']
    ]
]


let t = make(_data);
log(t);

let rt = reset(t);
log(rt);


for (let v of inorder(t)) {
    log(v);
}
*/



/*
let obj = {
    * g(){
        yield* 'hello world'
    }
}
for(let v of obj.g()){
    log(v);
}
*/



/*
function* g() {
    this.name = 'jake';
}
g.prototype.sayHi = function(){
    return 'hi!';
}

let obj = g();
log(obj instanceof g);
log(obj.sayHi());
log(obj.name);  // undefined
*/



/*
function* F(){
    this.a = 'a';
    yield this.b = 'b';
    yield this.c = 'c';
}
var f = F.call(F.prototype);

log(f.next());
log(f.next());
log(f.next());

log(f.a);
log(f.b);
log(f.c);
*/



/*
function* gen() {
    this.a = 'a';
    yield this.b = 'b';
    yield this.c = 'c';
}
function F() {
    return gen.call(gen.prototype);
}
var f = new F();
log(f.next());
log(f.next());
log(f.next());

log(f.a);
log(f.b);
log(f.c);
*/

// Generator与协程 § ⇧
var tag;
function* clock() {
    while (true) {
        tag = 'd1';
        yield;
        tag = 'd2';
        yield;
    }
}
var g = clock();
g.next();