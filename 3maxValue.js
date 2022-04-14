// 求不相邻数字相加的最大值(长度n，和长度为n的数组)
// 4,[4,2,3,5] return 9

// 1.暴力求解
// 2.求出动态转移方程 Math.max(opt(n-2)+value[n], opt(n-1))
// 3.找到出口 opt[0]=0;opt[1]=arr[0];opt[2]=opt[1] || opt[0] + value[2]; opt[3]=opt[2] || opt[1]+value[3]
// 4.重叠子问题对每次的计算结果进行存储优化

function getMaxValue(arr, len) {
    let opt = new Array(len).fill(0)
    opt[0] = arr[0]
    opt[1] = Math.max(arr[0], arr[1])
    for(var i=2;i<len;i++){
        opt[i] = Math.max(opt[i-1], opt[i-2]+arr[i])
    }
    return opt[len-1]
}
getMaxValue([3,2,5,10,7,4,1,6], 8)

// 缓存优化 --- 只需要参考前两位的值
function getMaxValue(arr, len) {
    let pre = arr[0],curr = Math.max(arr[0], arr[1])
    if(len===0)return 0
    if(len===1)return curr
    for(var i=2;i<len;i++){
        let max = Math.max(curr, pre + arr[i])
        pre = curr
        curr = max
    }
    console.log(curr)
}
getMaxValue([3,2,5,10,7,4,1,6], 8)