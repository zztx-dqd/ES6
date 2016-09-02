function log(txt) {
    console.log(txt);
}


/*
function timeout(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms, 'done');
  });
}

timeout(2000).then((value) => {
  console.log(value);
});
*/



/*
function loadImg(url) {

    return new Promise((resolve, reject) => {

        var img = new Image();
        img.src = url;

        img.onload = () => {
            resolve(img);
        };
        img.onerror = () => {
            reject(new Error('图片加载失败!'));
        }

    });
}

let imgSrc = 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3867371001,188065591&fm=80';
loadImg(imgSrc)
    .then((img) => {
        log(img);
    }, (err) => {
        log(err);
    });
*/


/*
let promise = new Promise((resolve, reject) => {
    log('promise');
    resolve('resolve');
});

promise.then((txt) => {
    log(txt);
});

log('hi');
*/


/*
var getJson = (url) => {

    let promise = new Promise((resolve, reject) => {

        var xht = new XMLHttpRequest();
        xht.open('GET', url);
        xht.onreadystatechange = handler;
        xht.responseType = 'json';
        xht.setRequestHeader('Accept', 'application/json');
        xht.send();

        function handler() {
            if (this.readyState !== 4) return;

            if (this.status === 200) {
                resolve(this.response);
            } else {
                reject(new Error(this.statusText));
            }
        }
    });

    return promise;
}

let url = './data.do';
getJson(url).then(data => {
    log(data);
}, error => {
    log(error);
});
*/



/*
var p1 = new Promise(function (resolve, reject) {
    setTimeout(() => reject(new Error('fail')), 3000)
})

var p2 = new Promise(function (resolve, reject) {
    setTimeout(() => resolve(p1), 1000)
})

p2
    .then(result => console.log(result))
    .catch(error => console.log(error))
*/



/*
var someAsyncThing = function () {
    return new Promise(function (resolve, reject) {
        // 下面一行会报错，因为x没有声明
        resolve(x + 2);
    });
};

someAsyncThing()
    .then(function () {
        console.log('everything is great');
    })
    .catch((err) => {
        log(err);
    });
*/




/*
var getJson = (url) => {

    let promise = new Promise((resolve, reject) => {

        var xht = new XMLHttpRequest();
        xht.open('GET', url);
        xht.onreadystatechange = handler;
        xht.responseType = 'json';
        xht.setRequestHeader('Accept', 'application/json');
        xht.send();

        function handler() {
            if (this.readyState !== 4) return;

            if (this.status === 200) {
                resolve(this.response);
            } else {
                reject(new Error(this.statusText));
            }
        }
    });

    return promise;
};

var promises = [1, 2, 3].map((v, i) => {
    return getJson(`./${v}.json`).then((data) => {
        return data;
    });
});
Promise.all(promises)
    .then(data => {
        log(data);
    })
    .catch(err => {
        log(err);
    });
*/



/*
function preloadImages(urls, loading, success, fail) {

    if (!urls) return;

    if (!Array.isArray(urls)) {
        urls = [urls];
    }

    let [_index, _len] = [0, urls.length];
    let promises = urls.map((v) => {

        return _loadImg(v)
            .then(data => {
                loading(_index++, _len, data);
                return data;
            });
    });


    function _loadImg(url) {

        return new Promise((resolve, reject) => {

            var img = new Image();
            img.src = url;

            img.onload = () => {
                resolve(img);
            };
            img.onerror = () => {
                reject(new Error(`加载失败，url: ${url}`));
            }

        });
    }

    return Promise.all(promises).then(success).catch(fail);
}

let srcList = ['111','https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1106637244,3482766800&fm=80', 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=584213261,1256434439&fm=80', 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1897918717,2268752376&fm=80', 'http://cimage.tianjimedia.com/uploadImages/thirdImages/2016/230/T7X4V923M3XL.jpg'];

let fn_loading = (index, length, img) => {
    log(`index: ${index}, length: ${length}, img: ${img}`);
};
let fn_success = data => {
    log(`data: ${data}`);
};
let fn_fail = err => {
    log(`err: ${err}`);
};

preloadImages(srcList, fn_loading, fn_success, fn_fail);
*/




/*
function getFoo() {
    return new Promise(function (resolve, reject) {
        resolve('foo');
    });
}

var g = function* () {
    try {
        var foo = yield getFoo();
        console.log(foo);
    } catch (e) {
        console.log(e);
    }
};

function run(generator) {

    var it = generator();

    function go(result) {

        if (result.done) return result.value;

        return result.value.then(function (value) {
            return go(it.next(value));
        }, function (error) {
            return go(it.throw(error));
        });
    }

    go(it.next());
}

run(g);
*/