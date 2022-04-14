// 只出现一次的数字
// 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
// 说明：
// 你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？
// 示例 1:
// 输入: [2,2,1]
// 输出: 1
// 示例 2:
// 输入: [4,1,2,1,2]
// 输出: 4
// var singleNumber = function(nums) {
//   // 普通解法
//   // if(nums.length === 1) { return nums[0] }
//   // for(let i=0; i<nums.length; i++) {
//   //   if(nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i])) {
//   //     return nums[i]
//   //   }
//   // }
//   // 巧妙解法
//   let arr = [...new Set(nums)]
//   let res = arr.reduce((a, b) => { return a+b }, 0)
//   let res2 = nums.reduce((a,b)=>a+b, 0)
//   return res*2-res2
// };
// console.log(singleNumber([4,1,2,1,2]))


// 多数元素
// 给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。
// 你可以假设数组是非空的，并且给定的数组总是存在多数元素。

// var majorityElement = function(nums) {
//     let count = 1
//     let provit = nums[0]
//     for(let i=1;i<nums.length;i++) {
//         if(count <= 0) provit = nums[i]
//         if(nums[i] === provit) count++
//         else count--
//     }
//     return provit
// };
// console.log(majorityElement([3,2,3]))

// this优先级：new绑定 > 显示绑定 > 隐式绑定 > 默认绑定
// 函数是否在new中调用(new绑定)，如果是，那么this绑定的是新创建的对象；
// 函数是否通过call,apply调用，或者使用了bind(显示绑定)，如果是，那么this绑定的就是指定的对象；
// 函数是否在某个上下文对象中调用(隐式绑定)，如果是的话，this绑定的是那个上下文对象。一般是obj.fun()；
// 如果以上都不是，那么使用默认绑定。如果在严格模式下，则绑定到undefined，否则绑定到全局对象(node环境的全局对象是globalThis，浏览器环境就是window)；
// 如果把null或者undefined作为this的绑定对象传入call、apply或者bind，这些值在调用时会被忽略，实际应用的是默认绑定规则；
// 如果是箭头函数，箭头函数的this继承的是外层代码块的this。
// -------------------------------------------------------
// this指向对象属性链中最后一层
// 隐式绑定的大陷阱 - 绑定丢失
// 1.将函数的引用给另一变量时：按照变量的环境指向
// 2.回调函数中：this使用的是默认绑定


// // sort多元素排序
// var items = [
//     { name: 'Edward', value: 21, gender: 0 },
//     { name: 'Sharpe', value: 37, gender: 1 },
//     { name: 'And', value: 45, gender: 0 },
//     { name: 'The', value: 21, gender: 1 },
//     { name: 'Magn', value: 2, gender: 1 },
//     { name: 'Zeros', value: 37, gender: 0 }
//   ];
//  let res = items.sort(function (a, b) {
//    let val1 = a.value
//    let val2 = b.value
//    if(val1 === val2) {
//      return a.gender - b.gender
//    }
//    return val1 - val2
//   });
//   console.log(res)


// 三数之和
// 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。
// 注意：答案中不可以包含重复的三元组。
// 示例 1：
// 输入：nums = [-1,0,1,2,-1,-4]
// 输出：[[-1,-1,2],[-1,0,1]]

// 示例 2：
// 输入：nums = []
// 输出：[]
// 示例 3：
// 输入：nums = [0]
// 输出：[]
// 实在没有想法也没有思路，暴力感觉三层循环好难，看了下人家的思路
// 思路
// 标签：数组遍历
// 首先对数组进行排序，排序后固定一个数 nums[i]，再使用左右指针指向 nums[i]后面的两端，数字分别为 nums[L] 和 nums[R]，计算三个数的和 sum 判断是否满足为 0，满足则添加进结果集
// 如果 nums[i]大于 0，则三数之和必然无法等于 0，结束循环
// 如果 nums[i] == nums[i-1]，则说明该数字重复，会导致结果重复，所以应该跳过
// 当 sum == 0 时，nums[L] == nums[L+1] 则会导致结果重复，应该跳过，L++
// 当 sum == 0 时，nums[R] == nums[R-1] 则会导致结果重复，应该跳过，R-−
// 时间复杂度：O(n^2)O(n 
// 2
//  )，n 为数组长度

// var threeSum = function(nums) {
//   let len = nums.length
//   let res = []
//   if(len<=2) return []
//   nums.sort((a,b)=>a-b)
//   for(let i =0; i<len; i++) {
//     if(nums[i]>0) break
//     if(i>=1 && nums[i]===nums[i-1]) continue
//     let L = i+1, R = len - 1
//     while (L<R) {
//       let sum = nums[i] + nums[L] + nums[R]
//       if(sum === 0) {
//         res.push([nums[i], nums[L], nums[R]])
//         while (L<R && nums[L] === nums[L+1]) L++
//         while (L<R && nums[R] === nums[R-1]) R--
//         L++
//         R--
//       } else if(sum < 0) {
//         L++
//       } else if(sum > 0) {
//         R--
//       }
//     }
//   }
//   return res
// };
// console.log(threeSum([-1,0,1,2,-1,-4]))

// 颜色分类
// 给定一个包含红色、白色和蓝色、共 n 个元素的数组 nums ，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。
// 我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。
// 必须在不使用库的sort函数的情况下解决这个问题。
// 示例 1：
// 输入：nums = [2,0,2,1,1,0]
// 输出：[0,0,1,1,2,2]
// 示例 2：
// 输入：nums = [2,0,1]
// 输出：[0,1,2]
 var sortColors = function(nums) {
    
};
console.log(sortColors([2,0,2,1,1,0]))