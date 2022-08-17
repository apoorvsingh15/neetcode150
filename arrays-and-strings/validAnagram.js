// Valid Anagram
// https://leetcode.com/problems/valid-anagram/
// @author - Apoorv Singh - https://github.com/apoorvsingh15

// Space Complexity - O(n) - O(s+t)
// Time Complexity - O(n) - O(s+t)


const isAnagram = function(s, t) {
    // make two hasMaps
    let countS = new Map();
    let countT = new Map();

    // if both the strings are empty
    if(s.length === 0 && t.length === 0) return false;

     // compare two lengths
    if(s.length !== t.length) return false;

    // iterate through the string
    for(i=0; i<s.length; i++){
        // enter values for both in the map
         if(countS.has(s[i])) countS.set(s[i],countS.get(s[i])+1);
            else countS.set(s[i],1);
         if(countT.has(t[i])) countT.set(t[i],countT.get(t[i])+1);
            else countT.set(t[i],1);
    }
     for(let [k,v] of countT){
        if(v!==countS.get(k)){
            return false;
        }}
  return true;
}

const result = isAnagram('aaaa', 'aaaa');
const negativeResult = isAnagram('aaa', 'aaaa');
const emptyStrings = isAnagram('', '');

console.log(result, '-----', negativeResult, "-----", emptyStrings);