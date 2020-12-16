function candies(children, candy) {
    return children * Math.floor(candy / children);
}

console.log(candies(3, 10));
