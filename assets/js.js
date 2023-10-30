function calculate(sum, month) {
    const monpay = {}
    for (let i = 1; i <= month; i++) {
        monpay[i] = Math.round(sum / month)
        if (i == month) {
            monpay[i] += sum % month
        }
    }
    return  monpay

} console.log(calculate(2000, 3));


