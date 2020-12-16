function chunkyMonkey(values, size) {
    //  write code here.
    let chunk1 = values.slice(0, size);
    let chunk2 = values.slice(size, values.length);
    
    return [chunk1, chunk2];
}

console.log(chunkyMonkey(["a", "b", "c", "d"], 2));
