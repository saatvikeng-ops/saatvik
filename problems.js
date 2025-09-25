// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Example usage:
const number = 41;
if (isPrime(number)) {
    console.log(`${number} is a prime number.`);
} else {
    consolelog(`${number} is not a prime number.`);
}
