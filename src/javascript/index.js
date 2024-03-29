// Menu responsivo
let btnMenuMobile = document.getElementById('btnMenuMobile')
let menuMobile = document.getElementById('menuMobile')
let overlayMobile = document.getElementById('overlayMenuMobile')

btnMenuMobile.addEventListener('click', ()=>{
    menuMobile.classList.add('openMenu')
})

menuMobile.addEventListener('click', ()=>{
    menuMobile.classList.remove('openMenu')
})

overlayMobile.addEventListener('click', ()=>{
    menuMobile.classList.remove('openMenu')
})


// SlideShow

function proximaImg(){
    contador++
    if(contador > 3)
        contador = 1

    document.getElementById('radio'+contador).checked = true
}


var radio = document.querySelector('.manualBtn')
var contador = 1

document.getElementById('radio1').checked = true

setInterval(() => (
    proximaImg()
), 3000)