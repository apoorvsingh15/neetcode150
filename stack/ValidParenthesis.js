
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // creates a stack
  let stack = [];

  // iterate the string word by word.
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '[') stack.push(']');
    else if (s[i] === '{') stack.push('}');
    else if (s[i] === '(') stack.push(')');
    // if the closing parenthesis doesn't match opening parenthesis.
    else if (s[i] !== stack.pop()) return false
  }
  // if anything is there in the stack return false
  return !stack.length;
};