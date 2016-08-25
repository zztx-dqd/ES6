function log(txt) {
    console.log(txt);
}


/*
var obj = new Proxy({}, {
    get(target, key, receiver) {
        log(`getting ${key}`);
        return Reflect.get(target, key, receiver);
    },
    set(target, key, value, receiver) {
        log(`setting ${key}`);
        return Reflect.set(target, key, value, receiver);
    }
});

obj.count = 1;
log(++obj.count);
*/



/*
var proxy = new Proxy({}, {
    get(target, property) {
        return 35;
    }
});

proxy.name = 'name';
proxy.age = 12;
proxy.title = 'title';
log(proxy);
log(proxy.name);
log(proxy.age);
log(proxy.title);
*/

/*
var target = {};
var handler = {
    set(target, key, value, receiver) {
        target.total = value * value;
        log('set');
        return Reflect.set(target, key, value, receiver);
    }
};
var proxy = new Proxy(target, handler);
proxy.a = 5;
target.b = 1;

log(target.a);
log(target.b);
log(target.total);
*/


/*
var handler = {
    get(target, name) {
        if (name == 'prototype') return Object.prototype;
        return `hello, ${name}!`;
    },
    apply(target, thisBinding, args) {
        return args[0];
    }
};

var fproxy = new Proxy(function(x, y){
    return x + y;
}, handler);

log(fproxy(1,2));
log(fproxy.prototype);
log(fproxy.name);
*/


/*
var person = {
    name: '张三'
};
var proxy = new Proxy(person, {
    get(target, key) {
        if (key in target) {
            return target[key];
        } else {
            throw new Error(`没有找到${key}属性`);
        }

    }
});
log(proxy.name);
proxy.age
*/


/*
function createArray(...elements){

    let handler = {
        get(target, key, receiver) {
            
            let index = Number(key);
            if (index < 0){
                key = String(target.length + index);
            }
            return Reflect.get(target, key, receiver);
        }
    }


    let target = [];
    target.push(...elements);

    return new Proxy(target, handler);
}

let arr = createArray('a', 'b', 'c');
log(arr[-1]);
*/


/*
var pipe = (function () {

    return function (value) {
        
        var arr = [];
        var oproxy = new Proxy({}, {

            get(pipeObject, fnName) {
                
                if (fnName == 'get') {
                    return arr.reduce(function (val, fn) {
                        return fn(val);
                    }, value);
                }

                arr.push(window[fnName]);
                return oproxy;
            }
        });
        return oproxy;
    };
} ());

var double = n => n * 2;
var pow = n => n * n;
log(pipe(3).double.pow.get);
*/


var handler = {
    get(target, key) {
        
        invariant(key, 'get');
        return target[key];
    },
    set(target, key, value) {

        invariant(key, 'set');
        return true;
    }
};

function invariant(key, action) {

    if (key[0] === '_') {
        throw new Error(`Invalid attempt to ${action} privete "${key}" property`);
    }
}

var target = {};
var proxy = new Proxy(target, handler);

proxy._prop
proxy._prop = 1;