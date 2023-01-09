function maxsubarray(nums) {
    let maxSum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        nums[i] = Math.max(0, nums[i - 1]) + nums[i];
        if (nums[i] > maxSum)
            maxSum = nums[i];
    }
    return maxSum;
};
function max_sub_array(nums) {
    let max = nums[0];
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (sum > max) {
            max = sum;
        }
        if (sum < 0) {
            sum = 0;
        }
    }
    return max;
};

maxsubarray([-2,1,-3,4,-1,2,1,-5,4])