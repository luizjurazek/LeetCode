/*
 * @lc app=leetcode id=69 lang=javascript
 *
 * [69] Sqrt(x)
 *
 * https://leetcode.com/problems/sqrtx/description/
 *
 * algorithms
 * Easy (37.36%)
 * Likes:    6045
 * Dislikes: 3930
 * Total Accepted:    1.4M
 * Total Submissions: 3.8M
 * Testcase Example:  '4'
 *
 * Given a non-negative integer x, return the square root of x rounded down to
 * the nearest integer. The returned integer should be non-negative as well.
 * 
 * You must not use any built-in exponent function or operator.
 * 
 * 
 * For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: x = 4
 * Output: 2
 * Explanation: The square root of 4 is 2, so we return 2.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: x = 8
 * Output: 2
 * Explanation: The square root of 8 is 2.82842..., and since we round it down
 * to the nearest integer, 2 is returned.
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 0 <= x <= 2^31 - 1
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    // Método de Newton
    // let guess = x / 2; // Palpite inicial
    // let precision = 0.00001 // Precisão desejada 

    // while(Math.abs(x - guess * guess) > precision){ // enquanto não atingir a precisão
    //     guess = (guess + x / guess) / 2; // atualiza o palpite
    // }

    // return guess; //Retorna a raiz 

    // busca binária 
    let left = 0; 
    let rigth = x;

    while(left <= rigth) { // Enquanto podemos dividir o intervalo
        let mid = Math.floor((left + rigth) / 2);

        if(mid * mid <= x && (mid + 1) * (mid + 1) > x){ // verifica se o valor do meio é o procurado
            return mid;
        } else if ( mid * mid > x){ // se o valor do meio é maior do que o procurado, busca na metade esquerda do intervalo
            rigth = mid - 1;
        } else {
            left = mid + 1; // se o valor do meio é menor do que o procurado, busca na metade direita do intervalo
        }
    }
    return -1; // caso não encontre o valor procurado
 };
// @lc code=end

