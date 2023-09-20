//sera informada o nome aluno, nota ac, nota at
//se o aluno não informar nota da at direto RECUPERAÇÃO
//a nota inicial de todos os alunos na AC é 5
// se media da AC+AT for menor ou igual a 6 mostra o nome do aluno
// a media e pedi ao mesmo para solicitar recuperacao
// se for superior informar o nome do aluno, a media, e que está aprovado

const Nota = (nome,notaAC = 5,notaAT)=>{
    if(notaAT === undefined){
        console.log(nome + " esta de recuperação")
    }
    else if((notaAC+notaAT)/2 <= 6){
        console.log(nome + " sua media é "+ (notaAC+notaAT)/2 +" esta de recuperação")
    }
    else{
        console.log(nome + "a sua media é "+ (notaAC+notaAT)/2 +" tu foi aprovado")
    }
}

Nota("juam",7,7)