function somaDois(num1, num2){
    return (num1 + num2)
}

console.log("A soma dos numeros é", somaDois(5,7))
console.log("A soma dos numeros é "+ somaDois(3,7))

const parImpar = (numero) => {
    if (numero < 0){
        return 'negativo'
    }
    else if(numero == 0){
        return 'neutro'
    }
    else if(numero%2 == 0){
        return "par";
    }
    else{
        return 'impar';
    }
}

console.log(parImpar(5))
console.log(parImpar(2))
console.log(parImpar(0))
console.log(parImpar(-5))