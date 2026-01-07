const nome = "Luiz Otávio Miranda";
const idade = 30;
const peso = 84;
const altura = 1.8;
let imc;
let btd;

imc = peso / (altura * altura);
btd = 2026 - idade;
    console.log(nome, "tem", idade, "anos, pesa",peso, "KG tem", altura, "de altura e seu IMC é de ",imc);
        console.log(nome, "nasceu em", btd);