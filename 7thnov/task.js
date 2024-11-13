
function topKFrequent(nums, k){
    let map = {};
    for(let num of nums)
    {
        if(!map[num])map[num] = 0;
        map [num]++;
    }
    return Object.keys(map).sort((a,b) => map[b] - map[a]).slice(0,k).map(Number);
};
// }
// console.log(topKFrequent([1,1,1,2,2,3],2));
console.log(topKFrequent([1,1,1,2,2,3], 2)); 
console.log(topKFrequent([1], 1));  


// II. Maximum Product Subarray(leetcode question number 152) 
 function maxProduct(nums) {
    let prevmax = nums[0];
    let prevmin = nums[0];
    let result = nums[0];

    for (let i = 1; i < nums.length; i++) {
        let tempMax = prevmax;
        let currmax = Math.max(nums[i], nums[i] * tempMax, nums[i] * prevmin);
        let currmin = Math.min(nums[i], nums[i] * tempMax, nums[i] * prevmin);

        prevmax = currmax;
        prevmin = currmin;

        result = Math.max(result, currmax);
    }

    return result;
};
console.log(maxProduct([2, 3, -2, 4]));
console.log(maxProduct([-2, 0, -1]));



