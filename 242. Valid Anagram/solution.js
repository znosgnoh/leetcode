/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const obj = {};

  for (let i = 0; i < s.length; i++) {
    if (!obj[s[i]]) {
      obj[s[i]] = 1;
    } else {
      obj[s[i]]++;
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (!obj[t[i]]) return false;
    obj[t[i]]--;
    if (obj[t[i]] < 0) return fasle;
  }

  return true;
};
