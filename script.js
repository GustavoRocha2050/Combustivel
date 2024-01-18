//dom 
const distancia = document.querySelector('#distancia')
const rendimento = document.querySelector('#rendimento')
const preco = document.querySelector('#preco')
const calcular = document.querySelector('#calcular')
const resultado = document.querySelector('#resultado')

//Evento
calcular.addEventListener('click',()=>{



    let dist = distancia.value
    let rend = rendimento.value
    let vPreco = preco.value

    let valorfinal = (dist / rend) *vPreco

resultado.value = "R$" + valorfinal.toFixed(2)

})
