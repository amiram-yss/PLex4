const memoize = (f) => {
    let cache = {};
    return (n) => {
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
