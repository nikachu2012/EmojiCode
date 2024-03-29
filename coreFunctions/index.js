let emoji = {};

/**
 * 素数判定
 * @param {number} n 
 * @returns {boolean}
 */
emoji.isPrime = (n) => {
    if (n % 2 == 0) return n == 2;
    if (n % 3 == 0) return n == 3;
    var li = Math.sqrt(n);
    for (var i = 5, d = 2; i <= li; i += d, d = 6 - d) {
        if (n % i == 0) return false;
    }
    return true;
}

/**
 * リストの平均値を返します
 * @param {Array}
 * @returns {number}
 */
emoji.listavg = (l) => {
    return l.reduce(function (x, y) { return x + y; }) / l.length;
}


/**
 * リストの中央値を返します。
 * @param {Array} n
 * @returns {number}
 */
emoji.listmedian = (n) => {
    const h = (n.length / 2) | 0
    const a = n.sort((a, b) => {
        return a - b;
    })

    if (a.length % 2) {
        return a[h]
    }
    return (a[h - 1] + a[h]) / 2
}

/**
 * リストの最頻値を返します。
 * @param {Array} a
 * @returns {number}
 */

emoji.mode = function (a) {
    if (a.length === 0) {
        return null;
    }

    let counter = {}

    let nativeValues = {}

    let maxCounter = 0;
    let maxValue = null;

    for (let i = 0; i < a.length; i++) {
        if (!counter[a[i] + "_" + typeof a[i]]) {
            counter[a[i] + "_" + typeof a[i]] = 0;
        }
        counter[a[i] + "_" + typeof a[i]]++;
        nativeValues[a[i] + "_" + typeof a[i]] = a[i];

    }
    for (let j = 0; j < Object.keys(counter).length; j++) {
        key = Object.keys(counter)[j];
        if (counter[key] > maxCounter) {
            maxCounter = counter[key];
            maxValue = nativeValues[key]
        }
    }
    return maxValue

}
/**
 * 標準偏差を求めます。
 * @param {Array} arr 
 * @returns {number}
 */
emoji.deviasion = arr => {
    let sum = 0;
    arr.forEach((x, i) => sum += x)
    const ave = sum / arr.length;

    let dist = 0;
    arr.forEach((x, i) => dist += (x - ave) ** 2)

    return (Math.sqrt(dist / arr.length));
}

/**
 * リストのランダムな項目を返します。
 * @param {Array} arr 
 * @returns {number}
 */
emoji.randomList = arr => {
    return arr[Math.floor(Math.random() * arr.length)];
}

/**
 * 指定範囲の乱数を返します。
 * @param {number} min 
 * @param {number} max
 * @returns {number} 乱数
 */
emoji.getRandom = (min, max) => {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
}

/**
 * ユーザーに入力させます。
 * @param {string} ask 
 * @returns {string}
 */
emoji.ask = (ask) => {
    return window.prompt(ask);
}

/**
 * 10進数を16進数に変換します
 * @param {number} dec
 * @returns {string} hex
 */
emoji.dec_hex = (dec) => {
    const a = dec.toString(16).toUpperCase();
    if (a.length == 1) {
        return '0' + a
    }
    else {
        return a
    }
}

/**
 * 16進数を10進数に変換します
 * @param {string} hex 
 * @returns {string} dec
 */
emoji.hex_dec = (hex) => {
    return parseInt(hex, 16)
}
/**
 * 秒数分待機します。
 * @param {string} seconds 
 */
emoji.delay = (seconds) => {
    var start = new Date().getTime();
    var end = 0;
    while ((end - start) < seconds * 1000) {
        end = new Date().getTime();
    }
}

emoji.loop = {};
emoji.infinityLoop = {};
emoji.loop.data = {};
emoji.while = {};
/**
 * 回数指定ループの作成
 * @param {String} id 
 * @param {Function} fn 
 * @param {Number} count 
 */
emoji.loop.create = (id, fn, count) => {
    let counter = 0;
    if (!Object.keys(emoji.loop.data).includes(id)) {
        emoji.loop.data[id] = setInterval(() => {
            fn();
            counter++;
            if (counter == count) {
                clearInterval(emoji.loop.data[id]);
                delete emoji.loop.data[id];
            }
        }, 33);
    }
    else {
        alert('すでにループが作成されています')
    }

}
/**
 * 無限ループの作成
 * @param {String} id 
 * @param {Function} fn 
 */
emoji.infinityLoop.create = (id, fn) => {
    if (!Object.keys(emoji.loop.data).includes(id)) {
        emoji.loop.data[id] = setInterval(fn, 33);
    }
    else {
        alert('すでにループが作成されています')
    }
}
/**
 * ループの強制停止
 * @param {String} id 
 */
emoji.loop.stop = (id) => {
    if (Object.keys(emoji.loop.data).includes(id)) {
        clearInterval(emoji.loop.data[id])
        delete emoji.loop.data[id];
    }
    else {
        alert('ループが存在していません。')
    }
}
/**
 * whileループの作成
 * @param {String} id 
 * @param {Function} fn 
 * @param {String} bool 判定式を文字列で入力 
 */
emoji.while.create = (id, fn, bool) => {
    if (id == null) {
        setInterval(() => {
            fn();
            if (!eval(bool)) {
                clearInterval(emoji.loop.data[id]);
                delete emoji.loop.data[id];
            }
        }, 33);
    }
    else if (id !== null && !Object.keys(emoji.loop.data).includes(id)) {
        emoji.loop.data[id] = setInterval(() => {
            fn();
            if (!eval(bool)) {
                clearInterval(emoji.loop.data[id]);
                delete emoji.loop.data[id];
            }
        }, 33);
    }
    else {
        alert('すでにループが作成されています')
    }
}

/**
 * 現在実行されているすべてのループを無条件で停止
 */
emoji.loop.allStop = () => {
    Object.keys(emoji.loop.data).forEach((e, i) => {
        emoji.loop.stop(e);
        delete emoji.loop.data[e];
    })
}
