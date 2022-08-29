// Two Sum

// https://leetcode.com/problems/two-sum/
// @author - Apoorv Singh - https://github.com/apoorvsingh15

// Space Complexity - O(n)
// Time Complexity - O(n)


// nums - array containing numbers
// target sum to be achieved
var twoSum = function (nums, target) {
  let map = {}

  // iterate through the given array
  for (let i = 0; i < nums.length; i++) {
    // if the number is found in the array return
    if (target - nums[i] in map) return [map[target - nums[i]], i];
    // store as {value: index}
    else map[nums[i]] = i;
  }
}


console.log(twoSum([1, 2, 3, 4], 3));