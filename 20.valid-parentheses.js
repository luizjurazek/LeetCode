/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 *
 * https://leetcode.com/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (40.28%)
 * Likes:    18444
 * Dislikes: 1048
 * Total Accepted:    3.1M
 * Total Submissions: 7.7M
 * Testcase Example:  '"()"'
 *
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and
 * ']', determine if the input string is valid.
 * 
 * An input string is valid if:
 * 
 * 
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 * Every close bracket has a corresponding open bracket of the same type.
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: s = "()"
 * Output: true
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: s = "()[]{}"
 * Output: true
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: s = "(]"
 * Output: false
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= s.length <= 10^4
 * s consists of parentheses only '()[]{}'.
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    s = s.split("");
    var stack = [];

    for(var item of s){
        if(item === "(" || item === "{" || item === "["){
            stack.push(item);
        } else {
            var top = stack[stack.length - 1];
            if(item === ")" && top ==="(" || item === "]" && top === "[" || item === "}" && top === "{"){
                stack.pop();
            } else {
                return false;
            }
        }
    }
    return stack.length === 0;
};
// @lc code=end

