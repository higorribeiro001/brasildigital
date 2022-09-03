var menu = document.querySelector(".botaomenu")
var caixa = document.querySelector(".caixaopcoes")
var caixaMenu = document.getElementById("menu")
var header = document.getElementById("section")
var telaAnterior = document.querySelector(".telaanterior")
var proximaTela = document.querySelector(".proximatela")
var zap = document.querySelector(".contato") 
var insta = document.querySelector(".insta")
var face = document.querySelector(".face")

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

var linkProdutos = document.querySelector(".agendar")

linkProdutos.style.color = "#CCFF00" 

telaAnterior.addEventListener("click", ()=> {
    window.location.replace("../../index.html")
})

proximaTela.addEventListener("click", ()=> {
    window.location.replace("sobre.html")
})

zap.addEventListener("click", () => {
    window.location.replace('https://wa.me/5591998054919')
})

insta.addEventListener("click", () => {
    window.location.replace("https://www.instagram.com/direct/t/340282366841710300949128220329730356087")
})

face.addEventListener("click", () => {
    window.location.replace("https://www.messenger.com/t/100005974781245")
})