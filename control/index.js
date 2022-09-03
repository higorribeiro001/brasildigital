var menu = document.querySelector(".botaomenu")
var caixa = document.querySelector(".caixaopcoes")
var caixaMenu = document.getElementById("menu")
var header = document.getElementById("section")
var zap = document.querySelector(".contato") 
var insta = document.querySelector(".insta")
var face = document.querySelector(".face")
var horario = document.querySelector(".horario")
let time = 2000, // tempo de 2 segundos
    currentImageIndex = 0, 
    images = document.querySelectorAll("#imagem") // selecionando todo o slider com as imagens 
    max = images.length; // maximo do numero de imagens
let time2 = 2000, // tempo de 2 segundos
    currentImageIndex2 = 0, 
    images2 = document.querySelectorAll("#imagem2") // selecionando todo o slider com as imagens 
    max2 = images2.length; // maximo do numero de imagens

menu.addEventListener("click", ()=>{
    caixaMenu.classList.remove("caixaopcoes")
})

caixa.addEventListener("mouseout", ()=>{
    caixaMenu.classList.add("caixaopcoes")
})

caixa.addEventListener("mouseover", ()=>{
    caixaMenu.classList.remove("caixaopcoes")
})

header.addEventListener("click", ()=>{
    caixaMenu.classList.add("caixaopcoes")
})

var linkPrincipal = document.querySelector(".principal")

linkPrincipal.style.color = "#CCFF00" 

// zap.addEventListener("click", () => {
//     window.location.replace('https://wa.me/5591989330219')
// })

// insta.addEventListener("click", () => {
//     window.location.replace("https://www.instagram.com/direct/t/340282366841710300949128220329730356087")
// })

// face.addEventListener("click", () => {
//     window.location.replace("https://www.messenger.com/t/100005974781245")
// })

function nextImage() {
    images[currentImageIndex].classList.remove("selected") // remove a class anterior para não haver repetições

    currentImageIndex++ // para trocar o indice da imagem

    console.log(currentImageIndex)

    if(currentImageIndex >= max) { // se o indice da imagem passar ou for igual ao maximo
        currentImageIndex = 0 // ele sera resetado para 0
    }

    images[currentImageIndex].classList.add("selected") // exibe a imagem selecionada de acordo com o indice
}

function start() { // funcao que contralara as imagens
    setInterval(() => { // no intervalor de time as imagens serao trocadas
        nextImage()
    }, time)
}

function nextImage2() {
    images2[currentImageIndex2].classList.remove("selected2") // remove a class anterior para não haver repetições

    currentImageIndex2++ // para trocar o indice da imagem

    if(currentImageIndex2 >= max2) { // se o indice da imagem passar ou for igual ao maximo
        currentImageIndex2 = 0 // ele sera resetado para 0
    }

    images2[currentImageIndex2].classList.add("selected2") // exibe a imagem selecionada de acordo com o indice
}

function start2() { // funcao que contralara as imagens
    setInterval(() => { // no intervalor de time as imagens serao trocadas
        nextImage2()
    }, time2)
}

window.addEventListener("load", start) // a cada carregamento da pagina ela executara a funcao start
window.addEventListener("load", start2) // a cada carregamento da pagina ela executara a funcao start

