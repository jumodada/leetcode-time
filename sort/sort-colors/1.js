/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
/*


*/
var sortColors = function(nums) {
    let j = 0;
    for(let i = 0;i<nums.length;i++){
        if(nums[i] == 0){
            ++j
            nums.splice(i,1)
            nums.unshift(0);
        } else if(nums[i] == 1) {

            nums.splice(i,1);
            nums.splice(j,0,1);
        }
    }
}