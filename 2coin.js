// 凑零钱问题
// 给你 k 种面值的硬币，面值分别为 c1, c2 ...ck，每种硬币的数量无限，再给一个总金额 amount，
// 问你最少需要几枚硬币凑出这个金额，如果不可能凑出，算法返回 - 1 
// 1.暴力求解
// 2.求出动态转移方程 重叠子问题对每次的计算结果进行存储优化
// 3.找到出口

// 最优解为一个较大值 optmize
// 子最优解 = Math.min(optimize, coinChange(arr, count- arr[i]) + 1))
// 出口！！！ 0，-1
// 若存在重叠子问题，则需要消除
console.time()
function coinChange(arr, count){
    let optimize = count + 1
    if(count === 0) return 0
    if(count<0) return -1   
    for(var i=0;i<arr.length;i++){
        let subOpt = coinChange(arr, count - arr[i])
        if (subOpt === -1) continue
        optimize = Math.min(optimize, subOpt + 1)
    }
    return optimize
}
console.log(coinChange([1, 3, 5, 7], 11))
console.timeEnd()

// 缓存消除重叠子问题
console.time()
function coin(arr, count) {
    // 初始化为特殊值
    let cache = new Array(count+1).fill(-10)
    function dp (arr, count) {
        let optimize = count + 1
        if(count === 0) return 0
        if(count<0) return -1   
        // 从缓存中读取数据
        if(cache[count]!==-10) {
            return cache[count]
        }
        for (var i = 0; i < arr.length; i++) {
            // 动态转移方程
            let subOpt = dp(arr, count - arr[i])
            if (subOpt === -1) continue
            optimize = Math.min(optimize, subOpt + 1)
        }
        // 计算结果存入cache 
        cache[count] = optimize === -10 ? -1 : optimize
        return cache[count]
    }
    return dp(arr, count)
}
console.log(coin([1, 3, 5], 11))
console.timeEnd()