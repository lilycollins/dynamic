
// 你打算利用空闲时间来做兼职工作赚些零花钱。
// 这里有 n 份兼职工作，每份工作预计从 startTime[i] 开始到 endTime[i] 结束，报酬为 profit[i]。
// 给你一份兼职工作表，包含开始时间 startTime，结束时间 endTime 和预计报酬 profit 三个数组，请你计算并返回可以获得的最大报酬。
// 注意，时间上出现重叠的 2 份工作不能同时进行。
// 如果你选择的工作在时间 X 结束，那么你可以立刻进行在时间 X 开始的下一份工作

// 1.暴力求解
// 2.求出动态转移方程 opt[n] = Math.max(profit[n]+opt[pre[n]], opt[n-1])  如何求pre数组？
// 3.找到出口 opt[0]=0 opt[1] = profit[1]
// 4.若存在重叠子问题对每次的计算结果进行存储优化
// opt[4] = Math.max(value[4] + opt[pre], opt[3])
// opt[3] = Math.max(value[3] + opt[pre], opt[2])
let startTime = [1, 2, 3, 3], endTime = [3, 4, 5, 6], profit = [50, 10, 40, 70]
let arr = [
    [1, 4, 5],
    [3, 5, 1],
    [0, 6, 8],
    [4, 7, 4],
    [3, 8, 6],
    [5, 9, 3],
    [6, 10, 2],
    [8, 11, 4]]
console.log(jobScheduling(arr))
function jobScheduling(jobs) {
    jobs.unshift([0, 0, 0])
    // 按照结束时间排序，可以更少得去循环
    jobs = jobs.sort(([a1, a2], [b1, b2]) => {
        return a2 - b2
    })
    let dp = [0]
    // 不考虑后面的情况，做了这一份工作之后，还能做哪个最邻近的任务
    let prev = new Array(jobs.length).fill(0)
    for (let i = 1; i < jobs.length; i++) {
        for (let j = i - 1; j >= 1; j--) {
            if (jobs[j][1] <= jobs[i][0]) {
                prev[i] = j
                break
            }
        }
    }
    console.log(1111, prev)
    for (let i = 1; i < jobs.length; i++) {
        dp[i] = Math.max(dp[i - 1], dp[prev[i]] + jobs[i][2])
    }
    return dp.pop()
}