var strStr = function (haystack, needle) {
  let haystackLength = haystack.length;
  let needleLength = needle.length;
 
  // Try starting the search at every position in haystack
  for (let start = 0; start <= haystackLength - needleLength; start++) {
    let matched = true; // assume it matches until proven otherwise
 
    // Check each letter of needle against haystack
    for (let j = 0; j < needleLength; j++) {
      if (haystack[start + j] !== needle[j]) {
        matched = false; // letters don't match, stop checking this position
        break;
      }
    }
 
    // If every letter matched, we found the needle!
    if (matched === true) {
      return start;
    }
  }
 
  // We checked every position and never found a full match
  return -1;
};
 
// ---------- Let's test it ----------
console.log(strStr("sadbutsad", "sad"));     // 0
console.log(strStr("leetcode", "leeto"));    // -1
console.log(strStr("hello", "ll"));          // 2
console.log(strStr("mississippi", "issip")); // 4
console.log(strStr("abc", ""));              // 0