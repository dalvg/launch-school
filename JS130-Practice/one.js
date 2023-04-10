function isUrl(url) {
   return /^(http:\/\/|https:\/\/).*(.com)$/.test(url);
}
console.log(isUrl('http://launchschool.com'));   // -> true
console.log(isUrl('https://example.com'));       // -> true
console.log(isUrl('https://example.com hello')); // -> false
console.log(isUrl('   https://example.com'));    // -> false