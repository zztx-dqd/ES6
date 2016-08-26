
const types = {
    test1: Symbol(),
    test2:  Symbol()
}

function test(type, num) {
    var rel = 0;
    switch(type){
        case types.test1:
            rel = num * 0.5;
        break;
        case types.test2:
            rel = num / 0.5;
        break;
    }
    return rel;
}
console.log(test(types.test1, 32));
