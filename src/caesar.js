const caesarModule = (function () {
  
  function shiftCheck(num) {
    // check validity of shift value; return false if it meets
    // invalidating criteria; otherwise return true.
    return !(!num || num === 0 || num > 25 || num < -25);
  }

  function caesar(input, shift, encode = true) {
    
    // stop function if shift value is invalid, input is empty, or input does not include letters.
    try {
      if (!shiftCheck(shift)) throw `${shift} is not a valid number.`;
      if (!input) throw `Please enter a message to encode.`;
      if (!/[a-zA-Z]/.test(input)) throw `'${input}' is not a valid message. Please include letters.`;
    } catch (error) {
      console.log(error);
      return false;
    }

    // check if we are encoding or decoding, adjust shift value.
    if (!encode) shift = (shift * -1);

    // change message to lowercase, check ascii values 97-122 for letters;
    // create new character using .fromCharCode();
    const lowerInput = input.toLowerCase();
    let result = '';

    for (let i = 0; i < lowerInput.length; i++){
      let char = lowerInput[i];
      let code = char.charCodeAt(0);
      
      if (!/[a-z]/.test(char)){
        result += char;
      } else {
        code += shift;

        // check if surpassed the bounds of alphabet; wrap if needed.
        if (code > 122) code = (code-26);
        if (code < 97) code = (code+26);
        char = String.fromCharCode(code);
        result += char;
      }
    }
    
    console.log(result, `— Your message has been ${(encode) ? 'encoded' : 'decoded'}!`);
    return result;
  }

  return {
    caesar, shiftCheck,
  };
})();

module.exports = { caesar: caesarModule.caesar, shiftCheck: caesarModule.shiftCheck };
