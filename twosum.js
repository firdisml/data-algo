function twosum(nums, target){
    const data = []
    const array = []

    for(let i =0; i < nums.length; i++){
        if(data.includes(nums[i])){
            array.push(data.indexOf(nums[i]))
            array.push(i)
            return array;
        }
        data.push(target - nums[i])
    }
    return false
}

twosum([2,7,11,15],9)

//Time complexity = O(n)
//Space complexity = O(n)