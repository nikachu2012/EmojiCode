let emoji = {};

/**
 * 素数判定
 * @param {number} n 
 * @returns {boolean}
 */
emoji.isPrime = (n) => {
    if (n % 2 == 0) return n == 2;
    if (n % 3 == 0) return n == 3;
    var limit = Math.sqrt(n);
    for (var i = 5, d = 2; i <= limit; i += d, d = 6 - d) {
        if (n % i == 0) return false;
    }
    return true;
}
