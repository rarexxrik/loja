const botVoltarProdutos = document.getElementById('voltar-produtos')
const botMenuEntrada = document.getElementById('menu');
const listaCategorias = document.querySelector('.lista__menu')
const botMenuSaida = document.getElementById('menu-saida')

botMenuEntrada.addEventListener('click', () => listaCategorias.style.display = "block");

botMenuSaida.addEventListener('click', () => listaCategorias.style.display = "none");

botVoltarProdutos.addEventListener('click',  () => window.location.href = "./index.html");

