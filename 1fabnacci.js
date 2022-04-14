/**
 * fabnacci数列 
 * 1，1，2，3，5，8，13，21...
 * f(n) = f(n-1) + f(n-2)
 */
function fabnacci(n) {
    if(n<3) { return 1}
    return fabnacci(n-1) + fabnacci(n-2)
}

// 使用缓存
function fab(n) {
    let cache = [0, 1, 1]
    function _fib(n) {
        if (cache[n]) return cache[n]
        cache[n] = _fib(n - 1) + _fib(n - 2)
        return cache[n]
    }
    return _fib(n)
}
console.log(fab(5))

// 状态压缩再优化 因为当前状态只跟前两个状态有关，所以不需要存储那么多数据
function fab2(n){
    if(n<3) return 1
    let pre = 1,curr = 1
    for(let i=3; i<=n; i++) {
        let sum = pre + curr
        pre = curr
        curr = sum
    }
    return curr
}
console.log(fab2(45))