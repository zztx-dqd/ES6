function log(txt) {
    console.log(txt);
}





/*
function* gen(x = 0){
    try {
        var y = yield x + 2;    
    } catch (error) {
        log(error);
    }
    return y;
}

var g = gen(1);
log(g.next());
g.throw(new Error('throw error'));
*/




/*
function* gen(){
    yield 'h';
    yield 'e';
    yield 'l';
    yield 'l';
    yield 'o';
}

let g = gen();
let res = g.next();
while(!res.done){
    log(res);
    res = g.next();
}
*/

