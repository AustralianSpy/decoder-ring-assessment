const substitutionModule = (function () {

  // helper function to check for duplicate characters in
  // inputted alphabet.
  function checkDuplicates (alphabet){
    let str = '';
    let areDuplicates = false;

    for (let i = 0; i < alphabet.length; i++){
      const char = alphabet[i];
      if (str.includes(char)){
        areDuplicates = !areDuplicates;
        break;
      } else {
        str += char;
      }
    }
    return areDuplicates;
  }

  function substitution(input, alphabet, encode = true) {
    try {
      if (!input) throw `Please enter a message to cipher.`;
      if (!alphabet) throw `Please enter an alphabet to reference.`;
      if (alphabet.length !== 26) throw `Please enter a 26-character alphabet.`;
      if (checkDuplicates(alphabet)) throw `Alphabet cannot have duplicate characters.`;
    } catch (error) {
      console.log(error);
      return false;
    }
    const standard = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const cipher = alphabet.split('');
    let result = '';
    input = input.toLowerCase();

    if (encode) {
      for (let i = 0; i < input.length; i++){
        let char = input[i];
        if (!/[a-z]/g.test(char)){     // preserve special characters.
          result += char;
        } else {
          const index = standard.findIndex(letter => letter === char);
          char = cipher[index];
          result += char;
        }
      }
    } 
    
    if (!encode) {
      for (let i = 0; i < input.length; i++){
        let char = input[i];
        if (char === ' '){     // preserve spaces.
          result += char;
        } else {
          const index = cipher.findIndex(letter => letter === char);
          char = standard[index];
          result += char;
        }
      }
    }

    console.log(result, `— Your message has been ${(encode) ? 'encoded' : 'decoded'}!`);
    return result;
  }

  return {
    substitution, checkDuplicates,
  };
})();

module.exports = { substitution: substitutionModule.substitution, checkDuplicates: substitutionModule.checkDuplicates };
