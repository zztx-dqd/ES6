function log(txt) {
    console.log(txt);
}


/*
function makeIterator(array){
    var nextIndex = 0;
    return {
        next(){
            return nextIndex < array.length ? 
            {
                value: array[nextIndex++],
                done: false
            }
            :
            {
                done: true
            }
        }
    }
}

var it = makeIterator(['a', 'b']);
log(it.next());
log(it.next());
log(it.next());
*/



/*
let arr = ['a', 'b', 'c'];
let iter = arr[Symbol.iterator]();
log(iter.next());
log(iter.next());
log(iter.next());
log(iter.next());
*/


/*
class RangeItertor {

    constructor(start, stop) {
        this.value = start;
        this.stop = stop;
    }

    [Symbol.iterator]() { return this; }

    next() {
        let value = this.value;
        if (value < this.stop) {
            this.value++;
            return {
                done: false, value: `this.value = ${this.value}`
            }
        } else {
            return {
                done: true, value: undefined
            }
        }
    }
}

function Range(start, stop) {
    return new RangeItertor(start, stop);
}

for (let item of Range(1, 5)) {
    log(item);
}
*/