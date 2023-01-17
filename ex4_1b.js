let cache = {}; // cache object

function fibonacci(n) {
    if (n === 0)
        return 0;
    if (n === 1 || n === 2)
        return 1;
    if (cache[n])
        return cache[n];
    cache[n] = fibonacci(n - 1) + fibonacci(n - 2);
    return cache[n];
}