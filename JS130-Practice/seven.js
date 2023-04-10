function formatDate(str) {
    return str.replace(/(\d+)(-|\/)(\d+)\2(\d+)/, '$4.$3.$1');
}

console.log(formatDate('2016-06-17')); // -> '17.06.2016'
console.log(formatDate('2017/05/03')); // -> '03.05.2017'
console.log(formatDate('2015/01-31')); // -> '2015/01-31' (no change)