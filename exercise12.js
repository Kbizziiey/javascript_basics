function filterEvenNumbers(nums){
    let  evenNumbers = [];
    for(i = 0; i < nums.length; i++){
        if(nums[i] % 2 === 0){
            evenNumbers.push(nums[i])
        }
    }
    return evenNumbers
}

console.log(filterEvenNumbers([1,2,3,4]))