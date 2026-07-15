let listaProdutos = [];
const botMenuEntrada = document.getElementById('menu');
const listaCategorias = document.querySelector('.lista__menu')
const botMenuSaida = document.getElementById('menu-saida')
const main = document.querySelector('.main')

getBuscarLivrosDaAPI()

async function getBuscarLivrosDaAPI () {
    const res = await fetch('../JSON/produtos.JSON');
    listaProdutos = await res.json();
    exibirProdutosNaTela(listaProdutos);
    exibirDestaquesNaTela(listaProdutos);
    localStorage.setItem('listaProdutos', JSON.stringify(listaProdutos))
}

botMenuEntrada.addEventListener('click', () => {
        listaCategorias.style.display = "block";
        main.style.filter = "blur(8px)";
})

botMenuSaida.addEventListener('click', () => {
    listaCategorias.style.display = "none";
    main.style.filter = "none";
})
