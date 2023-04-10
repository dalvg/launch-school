function solve(s) {
  let result = '';
  let tempString = '';
  let vowels = 'aeiou';
  s.split('').forEach(element => {
    if (vowels.includes(element)) tempString += element;
    else {
      if (tempString.length > result.length) result = tempString;
      tempString = '';
    }
  });
  return result.length;
}

console.log(solve("codewarriors"));