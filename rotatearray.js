var rotate = function(nums, k) {
    if (nums.length === 1 || k === 0 || k % nums.length === 0) {
        return;
    }
    if (k > nums.length) {
        k = k % nums.length;
    } 

    console.log(...nums.splice(-k));
    };

    rotate([1,2,3,4,5,6,7], 3)