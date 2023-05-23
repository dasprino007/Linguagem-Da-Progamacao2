//Classes
class conta {
  constructor(numero, cpf, saldo, ativo) {
    this.numero = numero; // int
    this.cpf = cpf;
    this.saldo = saldo;
    this.ativo = ativo;
  }
  ativar() {
    this.ativo = true;
  }

  credito(valor) {
    if (valor < 0) {
      console.log("não pode valor negativo");
    } else if (valor > 0) {
      if (this.ativo) {
        this.saldo += valor;
      } else {
        console.log("conta inativa...");
      }
    }
  }

  debito(valor) {
    if (this.ativo) {
      if (valor < 0) {
        console.log("impossivel realizar, valor negativo...");
      } else if (0 == valor) {
        console.log("impossivel realizar, valor zerado...");
      } else if (valor > this.saldo) {
        console.log("voce não pode pagar");
      } else {
        this.saldo -= valor;
      }
    } else {
      console.log("conta inativa...");
    }
  }
}

class Empresa extends conta {
  constructor(numero, cpf, saldo, ativo, emprestimoEmpresa) {
    super(numero, cpf, saldo, ativo);
    this.emprestimoEmpresa = emprestimoEmpresa;
  }
  pedirEmprestimo(valor) {
    //(soma no saldo e tira do empresitmo)
    if (valor < 0) {
      console.log("o numero que voce esta colocando é negativo");
    } else if (valor > this.emprestimoEmpresa) {
      console.log("voce ultrapasso o limite");
    } else if (valor <= this.emprestimoEmpresa) {
      this.saldo += valor;
      this.emprestimoEmpresa -= valor;
    }
  }
}

class corrente extends conta {
  constructor(numero, cpf, saldo, ativo, talãoMax, talãoUsuario) {
    super(numero, cpf, saldo, ativo);
    this.talãoMax = talãoMax;
    this.talãoUsuario = talãoUsuario;
  }
  talão(valor) {
    if (this.talãoUsuario < this.talãoMax) {
      if (valor <= 30) {
        this.saldo += valor;
        this.talãoUsuario++;
      } else if (valor > 30) {
        console.log("ultrapassou o limite do saldo de 30 reais");
      } else if (valor == 0) {
        console.log("impossivel realizar o saldo");
      }
    } else {
      console.log("voce ja chegou no seu limite de 3 talões");
    }
  }
}

//progama principal
const leia = require("prompt-sync")();
let c1;

console.log("badesco");
console.log("aonde as taxas são muitos baixas");
console.log("1-conta emprestismo \n2-conta corrente \n3-sair");
let escolher_conta = leia("coloque um dos numeros acimas : ");
while (escolher_conta != 3) {
  let numero = parseInt(leia("digite numero da conta: "));
  let cpf = leia("digite o cpf da conta : ");

  if (1 == escolher_conta) {
    c1 = new Empresa(numero, cpf, 0, false, 1000);
  } else if (2 == escolher_conta) {
    c1 = new corrente(numero, cpf, 0, false, 3, 0);
  }

  let op = "";
  c1.ativar();
  c1.credito(100);
  console.log("saldo atual", c1.saldo);
  let valor = 0;

  for (let x = 1; x <= 10; x++) {
    console.log("Movimento : " + x);
    console.log("Saldo atual conta : " + c1.saldo);
    op = leia("Digite D - debito ou C para credito : ");
    if (op == "D") {
      valor = parseInt(leia("Digite o valor para debito : "));
      c1.debito(valor);
    } else if (op == "C") {
      valor = parseInt(leia("Digite o valor para crédito : "));
      c1.credito(valor);
    }
  }
  console.log("Saldo final da conta " + c1.saldo);

  console.log("deseja continuar digite S ou N");
  let resp = leia("coloque S/N : ");
  if (resp == "N") {
    escolher_conta = 3;
  } else if (resp == "S") {
    let x = 0;
    while (x < 1) {
      console.log("badesco");
      console.log("aonde as taxas são muitos baixas");
      if (escolher_conta == 1) {
        console.log(
          "Saldo Atual: R$",
          c1.saldo,
          "limite emprestimo R$",
          c1.emprestimoEmpresa,
          "\n1-debito \n2-credito \n3-emprestimo \n4-sair"
        );
        let alternativas1 = parseInt(leia("coloque um dos numeros acimas :"));
        switch (alternativas1) {
          case 1:
            valor = parseInt(leia("digite o valor para debito : "));
            c1.debito(valor);
            break;
          case 2:
            valor = parseInt(leia("digite o valor para credito : "));
            c1.credito(valor);
            break;
          case 3:
            valor = parseInt(leia("digite o valor do emprestimo : "));
            c1.pedirEmprestimo(valor);
            break;
          case 4:
            x++;
            escolher_conta = 3;
            break;
        }
        console.log("saldo atual :", c1.saldo);
      } else if (escolher_conta == 2) {
        console.log(
          "Saldo Atual: R$",
          c1.saldo,
          "limite de talãoes",
          c1.talãoMax - c1.talãoUsuario,
          "\n1-debito \n2-credito \n3-talão \n4-sair"
        );
        let alternativas2 = parseInt(leia("coloque um dos numeros acimas :"));
        switch (alternativas2) {
          case 1:
            valor = parseInt(leia("digite o valor para debito : "));
            c1.debito(valor);
            break;
          case 2:
            valor = parseInt(leia("digite o valor para credito : "));
            c1.credito(valor);
            break;
          case 3:
            valor = parseInt(leia("digite o valor do talão : "));
            c1.talão(valor);
            break;
          case 4:
            x++;
            escolher_conta = 3;
            break;
        }
        console.log("saldo atual :", c1.saldo);
      }
    }
  }
}
console.log("muito obrigado por usar o progama");
