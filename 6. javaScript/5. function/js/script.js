

function greating(name, language) {
    if (language === "English") {
        console.log(`Good Morning ${name} !`);
    } else if (language === "french") {
        console.log(`Bonjour ${name}`);
    } else {
        console.log(`Selamat Pagi ${name}`);
    }
}

function multiply(a, b) {
    return a * b;
}

let result = multiply(10, 2);
console.log(result);


greating("Hary", "french");
