function solve(s) {
  let count = 0;
  for (let idx = 0; idx < s.length; idx += 1) {
    for (let subIdx = idx + 1; subIdx < s.length + 1; subIdx += 1) {
      let sliced = s.slice(idx, subIdx);
      if (sliced[sliced.length - 1] % 2 !== 0) {
        count += 1;
      }
    }
  }
  return count;
}

console.log(solve("44761446656827376599"));