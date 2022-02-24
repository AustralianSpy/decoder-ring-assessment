const polybiusModule = (function () {
  
  // polybius square shapes for coding.
  const toEncode = [
    {'s': '11'}, {'t': '12'}, {'u': '13'}, {'v': '14'}, {'w': '15'},
    {'x': '21'}, {'y': '22'}, {'z': '23'}, {'a': '24'}, {'b': '25'},
    {'c': '31'}, {'d': '32'}, {'e': '33'}, {'f': '34'}, {'g': '35'},
    {'h': '42'}, {'i': '42'}, {'j': '42'}, {'k': '43'}, {'l': '44'}, {'m': '45'},
    {'n': '51'}, {'o': '52'}, {'p': '53'}, {'q': '54'}, {'r': '55'},
  ];
  
  const toDecode = [
    {'11': 's'}, {'12': 't'}, {'13': 'u'}, {'14': 'v'}, {'15': 'w'},
    {'21': 'x'}, {'22': 'y'}, {'23': 'z'}, {'24': 'a'}, {'25': 'b'},
    {'31': 'c'}, {'32': 'd'}, {'33': 'e'}, {'34': 'f'}, {'35': 'g'},
    {'41': 'h'}, {'42': ['i', 'j']}, {'43': 'k'}, {'44': 'l'}, {'45': 'm'},
    {'51': 'n'}, {'52': 'o'}, {'53': 'p'}, {'54': 'q'}, {'55': 'r'},
  ];

  function polybius(input, encode = true) {
    // stop function if there is no input, if input is letters/numbers when decoding/encoding,
    // or if decoding input is of odd length.
    try {
      if (!input) throw `Please enter a message to cipher.`;
      if (encode && !/[a-zA-Z]/g.test(input)) throw `${input} is not a valid message for encoding.`;
      if (!encode && !/[0-9]/g.test(input)) throw `${input} is not a valid message for decoding.`;
      if (!encode && input.match(/[0-9]/g).length % 2 === 1 ) throw `'${input}' is not a valid message. Only use number *pairs*.`;
    } catch (error) {
      console.log(error);
      return false;
    }

    // ignore capital-letters, initialize variable to store result.
    input = input.toLowerCase();
    let result = '';

    // if the message is being encoded into numbers:
    if (encode) {
      for (let i = 0; i < input.length; i++){
        const char = input[i];
        if (!/[a-z]/.test(char)){     // preserve special characters.
          result += char;
        } else {
          const num = 
          result += num;
        }
      }
    }

    // if the message is being decoded from numbers to letters:
    if (!encode){

    }

    console.log(result)
    return result;
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
