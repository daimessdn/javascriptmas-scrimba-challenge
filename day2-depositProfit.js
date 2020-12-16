function depositProfit(deposit, rate, threshold) {
    //  write code here.
    let depositYear = 0;
    
    while (deposit < threshold) {
        deposit += (deposit * rate / 100);
        depositYear++;
    }
    
    return depositYear;
}

console.log(depositProfit(100, 20, 170));
