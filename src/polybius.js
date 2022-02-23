const polybiusModule = (function () {
  
  // polybius square shape for coding.
  const square = [
    {11: 's'}, {12: 't'}, {13: 'u'}, {14: 'v'}, {15: 'w'},
    {21: 'x'}, {22: 'y'}, {23: 'z'}, {24: 'a'}, {25: 'b'},
    {31: 'c'}, {32: 'd'}, {33: 'e'}, {34: 'f'}, {35: 'g'},
    {41: 'h'}, {42: ['i', 'j']}, {43: 'k'}, {44: 'l'}, {45: 'm'},
    {51: 'n'}, {52: 'o'}, {53: 'p'}, {54: 'q'}, {55: 'r'},
  ];

  function polybius(input, encode = true) {
    // stop function if input is letters/numbers when decoding/encoding, or if decoding input is of odd length.
    try {
      if (!input) throw `Please enter a message to cipher.`;
      if (encode && !/[a-zA-Z]/.test(input)) throw `${input} is not a valid message.`;
      if (!encode && !/[0-9]/.test(input)) throw `${input} is not a valid message.`;
      if (!encode && input.match(/[0-9]/).length % 2 === 1 ) throw `'${input}' is not a valid message. Only use number *pairs*.`;
    } catch (error) {
      console.log(error);
      return false;
    }

    const result = input;
    return result;
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
