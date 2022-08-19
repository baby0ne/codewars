const code = {
   'A': '. . .',
   'B': '.. . .',
   'C': '... . .',
   'D': '. .. .',
   'E': '.. .. .',
   'F': '... .. .',
   'G': '. ... .',
   'H': '.. ... .',
   'I': '... ... .',
   'J': '. . ..',
   'K': '.. . ..',
   'L': '... . ..',
   'M': '. .. ..',
   'N': '.. .. ..',
   'O': '... .. ..',
   'P': '. ... ..',
   'Q': '.. ... ..',
   'R': '... ... ..',
   'S': '. . ...',
   'T': '.. . ...',
   'U': '... . ...',
   'V': '. .. ...',
   'W': '.. .. ...',
   'X': '... .. ...',
   'Y': '. ... ...',
   'Z': '.. ... ...',
   ' ': '... ... ...'
}

function decode(str) {
   debugger;
   let strArr = str.split(' ');
   let result = [];

   const getKeyByValue = (object, value) => {
      return Object.keys(object).find(key => object[key] === value);
   }

   for (let i = 0; i < strArr.length; i += 3) {
      result.push(getKeyByValue(code, `${strArr[i]} ${strArr[i + 1]} ${strArr[i + 2]}`));
   }

   return result.join('');
}

function encode(str) {
   let result = [];

   for (let i = 0; i < str.length; i++) {
      result.push(code[str[i]]);
      result.push(' ');
   }

   return result.join('').trim();
}
