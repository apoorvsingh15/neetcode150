// Contains Duplicates
// https://leetcode.com/problems/contains-duplicate/
// @author - Apoorv Singh - https://github.com/apoorvsingh15

// Space Complexity - O(n)
// Time Complexity - O(n)

function containsDuplicate(nums) {
    // Make a new Set
    let hashSet = new Set();
    let containsDuplicate = false;

    // Iterate through the array - O(n)
    for(i=0; i<nums.length; i++){
        // If set contains duplicates
        if(hashSet.has(nums[i])){
            containsDuplicate = true;
        }else{
            // add the element to the set
            hashSet.add(nums[i]);
        }
    }
    return containsDuplicate;


};

const result = containsDuplicate([1,2,3,4]);

console.log(result);