import { Simular } from "./funcoes"

let botaoSubmit = document.querySelector('button#simular')
botaoSubmit.addEventListener('click', Pesquisar)

function Pesquisar () {
  let nomeInput = document.querySelector('input#nomeInput')
  let mensalidadeInput = document.querySelector('input#mensalidadeInput')
  if(nomeInput.value.length === 0 || mensalidadeInput.value.length === 0) {
    alert('[ERRO] Por favor, prencha todos os campos!')
  } 
  else {
    let escolha = verificarRadio()
    Simular(nomeInput.value, mensalidadeInput.value, escolha[0])
  }
}

function verificarRadio() {
    let escolha = [];
    let radio = document.getElementsByName('options');

    for (let i=0; i < radio.length; i++){
      if ( radio[i].checked ) {
        escolha.push(radio[i].value);
      }
    }

    return escolha
}