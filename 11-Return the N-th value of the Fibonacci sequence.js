/*
Return the N-th value of the Fibonacci sequence
*/
function fibonacci(n) {
    let a = 0;
    let b = 1;
    let c = 0;
    for(let i = 2; i <= n; i++){
        c = a + b;
        a = b;
        b = c;
    }
	return n ? b : a;
}

console.log(`fibonacci value at position 5: ${fibonacci(5)}`)
