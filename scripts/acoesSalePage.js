const botVoltarProdutos = document.getElementById('voltar-produtos')
const botMenuEntrada = document.getElementById('menu');
const listaCategorias = document.querySelector('.lista__menu')
const botMenuSaida = document.getElementById('menu-saida')
const main = document.querySelector('.main')

botMenuEntrada.addEventListener('click', () => {
    listaCategorias.style.display = "block"
    main.style.filter = "blur(8px)";
});

botMenuSaida.addEventListener('click', () => {
    listaCategorias.style.display = "none";
    main.style.filter = "none";
});

botVoltarProdutos.addEventListener('click',  () => window.location.href = "./index.html");

