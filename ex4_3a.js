function memoize (f) {
    let cache = {};
    return (n) => {
        //console.log(cache)
        //works
        if (n in cache) {
            return cache[n];
        }
        else {
            let result = f(n);
            cache[n] = result;
            return result;
        }
    }
}

const fibonacciHelper = memoize((n) => {
    //console.log(n)
    if (n === 0)
        return 0;
    if (n === 1)
        return 1;
    return fibonacciHelper(n-1) + fibonacciHelper(n-2);
});

function fibonacci(n) {
    console.log('> ', fibonacciHelper(n))
}

fibonacci(0)
fibonacci(1)
fibonacci(2)
fibonacci(3)
fibonacci(4)
fibonacci(5)
fibonacci(6)
fibonacci(7)
fibonacci(8)
fibonacci(9)
