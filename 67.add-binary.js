/*
 * @lc app=leetcode id=67 lang=javascript
 *
 * [67] Add Binary
 *
 * https://leetcode.com/problems/add-binary/description/
 *
 * algorithms
 * Easy (52.38%)
 * Likes:    7700
 * Dislikes: 754
 * Total Accepted:    1.1M
 * Total Submissions: 2.1M
 * Testcase Example:  '"11"\n"1"'
 *
 * Given two binary strings a and b, return their sum as a binary string.
 * 
 * 
 * Example 1:
 * Input: a = "11", b = "1"
 * Output: "100"
 * Example 2:
 * Input: a = "1010", b = "1011"
 * Output: "10101"
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= a.length, b.length <= 10^4
 * a and b consist only of '0' or '1' characters.
 * Each string does not contain leading zeros except for the zero itself.
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
 var addBinary = function(a, b) {
    // Convertendo as strings em números da base decimal
    let decimalA = parseInt(a, 2)
    let decimalB = parseInt(b, 2)

    // soma dos decimais
    let sum = decimalA + decimalB;

    // Converte o resultado de volta para binario 
    let binarySum = sum.toString(2);

    return binarySum;
}; 
// @lc code=end

