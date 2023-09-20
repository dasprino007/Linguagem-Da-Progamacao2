// fazer uma funcao que recebe um valor corresponde a um salario
// retornar uma informação para o usuario baseado em criterio
//se o valor for menor ou igual a 1.500 retorna 0
//se o valor é maior que 1.500 e menor que 2.500 cacular 15% e retornar
// se o valor for maior que 2500 calcular 25%

let valor = 2500;

const ImpostoDeRenda = sal => {
    if (sal <= 1500){
        return 0;
    }
    else if(sal <= 2500){
        return sal*0.15;
    }
    else{
        return sal*0.25;
    }
}

if(ImpostoDeRenda(valor) == 0){
    console.log(`O seu salário de ${valor}, não tem renda, portanto você não precisa pagar nenhum imposto`)
}
else{
    console.log(`seu salario  ${valor}, o imposto é de ${ImpostoDeRenda(valor)} e seu salario final é ${valor - ImpostoDeRenda(valor)}`)
}