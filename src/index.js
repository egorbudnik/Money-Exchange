// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    const H = 50;
    const Q = 25;
    const D = 10;
    const N = 5;
    const P = 1;
    let result = {};
    if (currency <= 0) {
        return {}
    } else if (currency > 10000) {
        return { error: "You are rich, my friend! We don't have so much coins for exchange" }
    } else {
        while (currency > 0) {
            if (currency / H >= 1) {
                result.H = Math.floor(currency / H);
                currency = Math.floor(currency % H);
            } else if (currency / Q >= 1) {
                result.Q = Math.floor(currency / Q);
                currency = Math.floor(currency % Q);
            } else if (currency / D >= 1) {
                result.D = Math.floor(currency / D);
                currency = Math.floor(currency % D);
            } else if (currency / N >= 1) {
                result.N = Math.floor(currency / N);
                currency = Math.floor(currency % N);
            } else {
                result.P = Math.floor(currency / P);
                currency = Math.floor(currency % P);
            }

        }
        return result;
    }
}
