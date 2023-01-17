let cache = {};

function factorial(n) {
    if (n === 0)
        return 1;
    if (cache[n])
        return cache[n];
    cache[n] = n * factorial(n - 1);
    return cache[n];
}