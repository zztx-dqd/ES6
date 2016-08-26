function log(txt) {
    window.document.body.innerHTML += `${txt} <br/>`;
    console.log(txt);
}

/*
var s = new Set();
[6, 2, 3, 4, 5, 2, 4, 1, 5, 6].map(n => s.add(n));
for(let n of s){
    log(n);
}
log(`size: ${s.size}`);
*/


/*
let s = new Set();
s.add(1).add(2).add(2);

log(`size: ${s.size}`); // size: 2

log(s.has(1));  // true
log(s.has(2));  // true
log(s.has(3));  // false

log(s.delete(2))    // true

log(s.has(2));  // false

log(`size: ${s.size}`); // size: 1
*/


/*
var items = new Set([1, 2, 3, 4, 5, 6, 7, 8, 8]);
var array = Array.from(items);
log(array);
*/


/*
// 去重
function dedupe(array) {
    //return [...new Set(array)];
    return Array.from(new Set(array));
}
log(dedupe([1, 2, 3, 1, 2, 3, 4, 5, 1, 2, 3]));
*/


/*
// keys values entries forEach
let set = new Set([1, 2, 3]);

for (let item of set.keys()) {
    log(item);
}
log('-----------------');
for (let item of set.values()) {
    log(item);
}
log('-----------------');
for (let item of set.entries()) {
    log(item);
}
set.forEach(n => { console.log(n); });
*/



/*
let set = new Set([1, 2, 3]);
set = [...set].map(n => n * 2);
log(set);


set = new Set([1, 2, 3, 4, 5, 6]);
set = [...set].filter(n => n > 3);
log(set);
*/


/*
var a = new Set([1, 2, 3]);
var b = new Set([2, 3, 4]);

log(new Set([...a, ...b]));
log(new Set([...a].filter(n => b.has(n))));
log(new Set([...a].filter(n => !b.has(n))));
*/