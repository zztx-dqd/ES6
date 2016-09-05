function log(txt) {
    console.log(txt);
}



/*
class Point {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
    toString() {
        return `Point = (${this.x}, ${this.y})`;
    }
}

var p = new Point(1);
log(p.toString());
*/


/*
class Foo {
    constructor(){
        return Object.create(null);
    }
}

Foo();
*/




/*
const MyClass = class Me {
    getClassName(){
        return Me.name;
    }
}
var p = new MyClass();
log(p.getClassName());
*/




/*
var toString = Symbol('toString');
var attr = Symbol('attr');

class MyClass {

    constructor() {
        this[attr] = 'attr123';
    }

    SayHi() {
        log(`${this[toString]()} ${this[attr]}`);
    }

    [toString]() {
        return 'toString123';
    }
    // [Symbol()]: 1
}
let c = new MyClass();
c.SayHi();
*/



/*
class Point {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
    toString() {
        return `{x: ${this.x}, y: ${this.y}}`;
    }
}
class ColorPoint extends Point {
    constructor(x, y, color) {
        super(x, y);

        this.color = color;
    }
    toString() {
        return `this.color: ${this.color}; ${super.toString()}`;
    }
}
var cp = new ColorPoint(10, 15, 'red');
log(cp.toString());
*/



/*
class Foo {
    constructor(...args) {
        this.args = args;
    }

    *[Symbol.iterator]() {
        let args = this.args;
        for (let v of args) {
            yield v;
        }
    }
}
var f = new Foo('hello', 'world');
for (let v of f) {
    log(v);
}
*/


class Foo {
    static sayHi(){
        return 'static hi!';
    }
    sayHi(){
        return 'hi!';
    }
}
log(Foo.sayHi());
var f = new Foo();
log(f.sayHi());