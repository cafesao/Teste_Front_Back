import axios from 'axios'
export { Simular }

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1)
}

function PrepararObj(mensalidade, tempo) {
    const tempoMes = tempo * 12
    
    const bodyAxios = {
        "expr" : `${mensalidade} * (((1 + 0.00517) ** ${tempoMes} - 1) / 0.00517)`
    }
    
    return bodyAxios
}

async function Simular(nome, mensalidade, tempo) {
    Carregando()
    const resAxios = await axios.post('http://localhost:3001/api', PrepararObj(mensalidade, tempo))
    console.log(resAxios)
    const resultado = resAxios.data.result
    AdicionarResultado(resultado, nome, mensalidade, tempo)
}

function AdicionarResultado (resultado, nome, mensalidade, tempo) {
    if(tempo > 1) {
        var tempoText = 'anos'
    }
    else {
        var tempoText = 'ano'
    }

    nome = nome.capitalize()

    resultado = parseFloat(resultado)
    resultado = resultado.toFixed(2)

    
    let div = document.querySelector('div#resultado')

    let pElement = document.createElement('p')
    let pText = document.createTextNode(`Olá ${nome}, juntando R$ ${mensalidade} todo mês, você terá R$ ${resultado} em ${tempo} ${tempoText}.`)

    pElement.appendChild(pText)
    Carregando(false)
    div.appendChild(pElement)
}

function Carregando(estado = true) {
    if(estado === true) {
        let div = document.querySelector('div#resultado')
        let pElement = document.createElement('p')        
        let pText = document.createTextNode('Carregando...')   
        
        div.innerHTML = ''
        pElement.setAttribute('id', 'carregando')
        pElement.appendChild(pText)
        div.appendChild(pElement)
    }
    else {
        document.querySelector('p#carregando').remove()
    }
}