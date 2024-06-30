/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  if (nums[0] + nums[1] === target) return [0, 1];
  const hash = { [nums[0]]: 0, [nums[1]]: 1 };
  for (let p = 2, n = nums.length - 1; p < nums.length; p++, n--) {
    if (p !== n && nums[p] + nums[n] == target) return [p, n];

    let prev = hash[target - nums[p]];
    if (prev >= 0) return [prev, p];
    hash[nums[p]] = p;

    let next = hash[target - nums[n]];
    if (next >= 0) return [n, next];
    hash[nums[n]] = n;
  }
  return [];
};
