function countVowelConsonant(str) {
  // init'd vowel letters
  const vowels = ['a', 'i', 'u', 'e', 'o'];
  
  // accumulate count by letters
  const count = str.split('').reduce((count, letter) => {
    return count += vowels.includes(letter) ? 1 : 2;
  }, 0);
  
  return count;
}

console.log(countVowelConsonant('abcde'));