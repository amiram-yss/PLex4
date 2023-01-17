function memoize (f) {
    let cache = {};
    return (n) => {
        if (n in cache) {
            return cache[n];
        }
        else {
            let result = f(n);
            cache[n] = result;
            // console.log(cache)
            return result;
        }
    }
}

const factorialHelper = memoize((n) => {
    if (n === 0)
        return 1;
    return n * factorialHelper(n-1);
});

function factorial1(n) {
    console.log(factorialHelper(n))
}

factorial1(5)
factorial1(6)
factorial1(4)