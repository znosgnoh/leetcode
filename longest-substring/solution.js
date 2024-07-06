/**
 * @param {string} s
 * @return {number}
 */

// Idea:
// Use a hash to keep track of the last seen index of a character. 
// If the character is seen again, update the left pointer to the last seen index + 1.
// Update the max length of the substring if the current substring is longer than the previous max.

var lengthOfLongestSubstring = function (s) {
    const lastSeen = {};
    let left = max = 0;
    for (let right = 0; right < s.length; right++) {
        if (lastSeen[s[right]] >= left) {
            left = lastSeen[s[right]] + 1;
        }
        lastSeen[s[right]] = right;
        max = Math.max(max, right - left + 1);
    }
    return max;
}
