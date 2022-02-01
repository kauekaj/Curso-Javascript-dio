//solução 01

function verificapalindromo(string) {
    if (!string) return "string inexistente";
    return string.split("").reverse().join("") === string;
}

console.log(verificapalindromo("ama"));


//solução 02
function verificapalindromo2(string) {
    if (!string) return "string inexistente";

    for(let i = 0; i < string.lenght / 2; i++) {
        if (string[i] !== string[string.lenght - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(verificapalindromo2("ama"));