// URL do Desafio: https://github.com/lira1705/mentoria-typescript/blob/main/src/desafios/desafio3.js

//Resposta

let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma') as HTMLInputElement
let campoSaldo = document.getElementById('campo-saldo') as HTMLHeadingElement

let saldoTotal: number = 0

limparSaldo()

function somarAoSaldo(soma: number): void {
    saldoTotal += soma
    campoSaldo.innerHTML = saldoTotal.toString()
    limparInput()
}

function limparSaldo(): void {
    campoSaldo.innerHTML = '';
    limparInput()
}

botaoAtualizar?.addEventListener('click', function () {
    somarAoSaldo(Number(soma?.value));
});

botaoLimpar?.addEventListener('click', function () {
    limparSaldo();
});

function limparInput (): void {
  soma.value = ''
}