function countVowelConsonant(str) {
  // write code here
  const vowels = ['a', 'i', 'u', 'e', 'o'];
  
  const count = str.split('').reduce((count, letter) => {
    return count += vowels.includes(letter) ? 1 : 2;
  }, 0);
  
  return count;
}

console.log(countVowelConsonant('abcde'));