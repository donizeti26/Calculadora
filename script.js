


function insert(num){
    let visor = document.querySelector('#visor-content')        
    visor.innerHTML+=`${num}`
}
function limpar(){
    let visor = document.querySelector('#visor-content')        
    visor.innerHTML=""
    
}
function porct(num){
    
}


function delet(){
    let visor = document.querySelector('#visor-content')
    visor.innerHTML=visor.innerText.slice(0, -1)


}

function formatarValor(valor) {
    return valor.toLocaleString('pt-BR');
}

function calcular(){

    let visor = document.querySelector('#visor-content')
visor.innerHTML= visor.innerHTML.replace(',','.')
    if(visor){
        let calculo = visor.innerText
        visor.innerHTML = formatarValor(eval(calculo))
    }else{
        visor.innerHTML = 'informe um n º'

    }
}