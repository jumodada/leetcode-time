function moveZeros(nums) {
    let j = 0
    nums.forEach((num, idx)=>{
        if(num!==0){
            nums[j] = num
            if(j!==idx){
                nums[idx] = 0
            }
            j++
        }
    })
}