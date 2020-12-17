function countVowelConsonant(str) {
  // write code here
  const vowels = ['a', 'i', 'u', 'e', 'o'];
  let count = 0;
  
  for (let i = 0; i < str.length; i++) {
      count += vowels.includes(str[i]) === true ? 1 : 2;
  }
  
  return count;
}

console.log(countVowelConsonant("abcde"));