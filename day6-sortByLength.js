function sortByLength(strs) {
    //  write code here.
    return strs.sort((a, b) => { return a.length - b.length;});
}

console.log(sortByLength(["abc", "", "aaa", "a", "zz"]));