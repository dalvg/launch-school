function isPangram(string) {
  let result = '';
  string.split('').forEach(element => {
    if (!result.includes(element) &&
        (element >= 'a' && element <= 'z')) result += element;
  });
  return result.length === 26;
}

console.log(isPangram('The quick brown fox jumps over the lazy dog.'));