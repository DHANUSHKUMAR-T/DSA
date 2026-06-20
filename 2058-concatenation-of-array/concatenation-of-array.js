/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let ans = [];
    for (let i = 1; i <= 2; i++) {
        ans = ans.concat(nums);
    }
    return ans;
};