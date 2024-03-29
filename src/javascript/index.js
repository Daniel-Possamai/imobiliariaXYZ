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