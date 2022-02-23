// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  
  function shiftCheck(num) {
    // check validity of shift value; return false if it meets
    // invalidating criteria; otherwise return true.
    const result = !(!num || num === 0 || num > 25 || num < -25);
    console.log(result);
    return result;
  }

  function caesar(input, shift, encode = true) {
    try {
      if (!shiftCheck(shift)) throw `${shift} is not a valid number.`;
    } catch (error) {
      console.log(error);
      return false;
    }
    // lowercase values are at ascii 97-122;
    const lowerInput = input.toLowerCase();
    let result = '';

    for (let i = 0; i < lowerInput.length; i++){
      let char = lowerInput[i];
      let code = lowerInput.charCodeAt(i);
      if (code > 122 || code < 97) result += char;
      if (input > 0) {
        code += shift;
        (code > 122) ?
          char = String.fromCharCode(code - 26) :
          char = String.fromCharCode(code);
      } else {
        (code < 97) ?
          char = String.fromCharCode(code + 26) :
          char = String.fromCharCode(code);
      }
      result += char;
    }
    
    console.log(result, `Your message has been ${(encode) ? 'encoded' : 'decoded'}!`);
    return result;
  }

  return {
    caesar, shiftCheck,
  };
})();

module.exports = { caesar: caesarModule.caesar, shiftCheck: caesarModule.shiftCheck };
