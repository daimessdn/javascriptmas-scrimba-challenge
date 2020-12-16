function reverseAString(str) {
  //  write code here.
  let new_str = "";
  
  for (let i = str.length - 1; i >= 0; i--) {
      new_str += str[i];
  }
  
  return new_str;
}

console.log(reverseAString("hello"));