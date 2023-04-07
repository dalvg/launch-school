function toWeirdCase(str) {
  let result = str.split(' ').map((word, idx) => {
    if (idx % 2 !== 0) {
      let modifiedString = word.split('').map((char, idx) => {
        let modifiedChars = '';
        if ((idx + 1) % 4 === 0) modifiedChars += char.toUpperCase();
        else modifiedChars += char;

        return modifiedChars;
      }).join('');

      return modifiedString;
    }
    return word;
  });

  return result.join(' ');
}

console.log(
  toWeirdCase('Lorem Ipsum is simply dummy text of the printing world') ===
              'Lorem IpsUm is simPly dummy texT of the printing worLd');
console.log(
  toWeirdCase('It is a long established fact that a reader will be distracted') ===
              'It is a lonG established facT that a reader wilL be disTracTed');
console.log(toWeirdCase('aaA bB c') === 'aaA bB c');
console.log(
  toWeirdCase('Miss Mary Poppins word is supercalifragilisticexpialidocious') ===
              'Miss MarY Poppins worD is supErcaLifrAgilIstiCexpIaliDociOus');

// The tests above should print "true".