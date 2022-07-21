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
 * @param {Array} l 
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
    // TODO: ユーザー入力の作成
    return answer;
}