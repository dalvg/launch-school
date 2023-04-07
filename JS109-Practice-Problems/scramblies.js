function scramble(str1, str2) {
  let letterCount = {};
  str2.split('').forEach(element => {
    letterCount[element] ? letterCount[element] += 1 : letterCount[element] = 1;
  });
  return Object.entries(letterCount).every(element => {
    let [letter, count] = element;
    let regex = new RegExp(letter,'g');
    let match = str1.match(regex) || [];
    return match.length >= count;
  });
}

console.log(scramble('rkqodlw','world'));
console.log(scramble('katas','steak'));
console.log(scramble('scriptjavx','javascript'));