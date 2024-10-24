function fib(n) {
    let a = Array(n+1);

    function fibHelper(n) {
        if (n < 0) {
            return undefined;
        }

        if (n == 0) {
            a[0] = 0;
            return 0; 
        }

        if (n == 1) {
            a[1] = 1;
            return 1;
        }

        if (a[n] != undefined) {
            return a[n];
        }
    
        a[n] = fibHelper(n-2) + fibHelper(n-1);
        return a[n];
    }
    fibHelper(n);
    return a;
}
