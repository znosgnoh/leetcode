
var twoSum = function (nums, target) {
  // Check the first two elements explicitly
  if (nums[0] + nums[1] === target) return [0, 1];

  // Initialize a hash map with the first two elements
  const hash = { [nums[0]]: 0, [nums[1]]: 1 };

  // Start iterating from the third element to the end of the array
  for (let p = 2, n = nums.length - 1; p < nums.length; p++, n--) {
    // Check the pair (p, n) if they are not the same index and their sum equals the target
    if (p !== n && nums[p] + nums[n] === target) return [p, n];

    // Check if the complement of nums[p] exists in the hash map
    let prev = hash[target - nums[p]];
    if (prev >= 0) return [prev, p];

    // Add nums[p] to the hash map
    hash[nums[p]] = p;

    // Check if the complement of nums[n] exists in the hash map
    let next = hash[target - nums[n]];
    if (next >= 0) return [n, next];

    // Add nums[n] to the hash map
    hash[nums[n]] = n;
  }

  // Return an empty array if no solution is found
  return [];
};
