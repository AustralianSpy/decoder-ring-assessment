const polybiusModule = (function () {
  
  // polybius square shapes for coding.
  const toEncode = [
    {'a': '11'}, {'b': '21'}, {'c': '31'}, {'d': '41'}, {'e': '51'},
    {'f': '12'}, {'g': '22'}, {'h': '32'}, {'i': '42'}, {'j': '42'}, {'k': '52'},
    {'l': '13'}, {'m': '23'}, {'n': '33'}, {'o': '43'}, {'p': '53'},
    {'q': '14'}, {'r': '24'}, {'s': '34'}, {'t': '44'}, {'u': '54'},
    {'v': '15'}, {'w': '25'}, {'x': '35'}, {'y': '45'}, {'z': '55'},
  ];
  
  const toDecode = [
    {'11': 'a'}, {'21': 'b'}, {'31': 'c'}, {'41': 'd'}, {'51': 'e'},
    {'12': 'f'}, {'22': 'g'}, {'32': 'h'}, {'42': ['i', 'j']}, {'52': 'k'},
    {'13': 'l'}, {'23': 'm'}, {'33': 'n'}, {'43': 'o'}, {'53': 'n'},
    {'14': 'q'}, {'24': 'r'}, {'34': 's'}, {'44': 't'}, {'54': 'u'},
    {'15': 'v'}, {'25': 'w'}, {'35': 'x'}, {'45': 'y'}, {'55': 'z'},
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
        if (!/[a-z]/g.test(char)){     // preserve special characters.
          result += char;
        } else {
          const cipher = toEncode.find(pair => Object.keys(pair)[0] === char);
          const num = cipher[char];
          result += num;
        }
      }
    }

    // if the message is being decoded from numbers to letters:
    if (!encode){
      for (let i = 0; i < input.length - 1; i+=2){
        const num = input[i] + input[i+1];
        if (!/[0-9]/g.test(num)){     // preserve special characters.
          result += num;
          i--;
        } else {
          const cipher = toDecode.find(pair => Object.keys(pair)[0] === num);
          const char = cipher[num];
          result += char;
        }
      }
    }

    console.log(result)
    return result;
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
