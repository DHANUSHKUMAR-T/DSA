/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let i;
    let found = false;

    for (i in nums) {
        if (nums[i] == target) {
            found = true;
            var index = Number(i);
            break;
        }
    }

    if (found) {
        return index;
    }
    else {
        let z=0
        for(a in nums){
            if(target>nums[a])
            {
                z+=1;
            }
        }
        return z;    
    }
};