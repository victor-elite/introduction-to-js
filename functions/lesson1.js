
sayHi()
console.log(name)

var name = "enjgcvjefkhcgjrec"

function sayHi() {
    console.log("Hi")
}


const add = function (x, y) {
    return x + y;
}

console.log(add(155, 21));


const factorial = function fact(n) {
    return n <= 1 ? 1 : n * fact(n - 1)
}
console.log(factorial(5));

let age = 3

const Person = () => {
    const id = setInterval(() => {
        this.age++;
        console.log(this.age);
        if (this.age >= 10)
            clearInterval(id);
    }, 1000);
}
Person()

