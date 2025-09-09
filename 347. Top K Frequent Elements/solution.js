/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const obj = {};
  for (const num of nums) {
    obj[num] = (obj[num] ?? 0) + 1;
  }
  const bucket = [];
  for (let [value, freq] of Object.entries(obj)) {
    if (!bucket[freq]) {
      bucket[freq] = [];
    }
    bucket[freq].push(Number(value));
  }
  const result = bucket.flat();
  return result.slice(result.length - k);
};
