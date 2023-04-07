function solution(fullText, searchText) {
  let regex = new RegExp(searchText, 'g');
  let matches = fullText.match(regex) || [];
  return matches.length;
}

console.log(solution('abbc','bbd'));
console.log(solution('abcdeb','b'));