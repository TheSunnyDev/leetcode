// Given a string s, find the length of the longest substring without repeating characters.

 

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.


Solution:
const isUnique = (s) => {
    const set = new Set()
    for(let i = 0; i < s.length; i++){
        if(set.has(s[i])){
            return false
        }
        set.add(s[i])
    }
    return true
}


var lengthOfLongestSubstring = function(s) {
    let map = {};
    let maxLen = 0;
    let start = 0
    for (let end = 0; end < s.length; end++){
        let lastChar = s[end];
        if (map[lastChar] === undefined){
            map[lastChar] = 0;
        }
        map[lastChar] += 1;
        while (map[lastChar] > 1){
            let firstChar = s[start];
            map[firstChar] -= 1;
            start += 1;
        }
        maxLen = Math.max(maxLen, end - start + 1)
    }
    return maxLen;
};    
    
    
    
    
