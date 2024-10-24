function fib(n) {
    let a = Array(n+1);

    fibHelper(n, a);

    return a;
}

function fibHelper(n, arr) {
    if (n < 0) {
        return undefined;
    }

    if (n == 0) {
        arr[0] = 0;
        return 0; 
    }

    if (n == 1) {
        arr[1] = 1;
        return 1;
    }

    if (arr[n] != undefined) {
        return arr[n];
    }

    arr[n] = fibHelper(n-1, arr) + fibHelper(n-2, arr);
    return arr[n];
}
