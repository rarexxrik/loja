const botVoltarProdutos = document.getElementById('voltar-produtos')
const botMenuEntrada = document.getElementById('menu');
const listaCategorias = document.querySelector('.lista__menu')
const botMenuSaida = document.getElementById('menu-saida')
const main = document.querySelector('.main')
const botAdicionarAoCarrinho = document.getElementById('bot-add-carrinho');

botMenuEntrada.addEventListener('click', () => {
    listaCategorias.style.display = "block"
    main.style.filter = "blur(8px)";
});

botMenuSaida.addEventListener('click', () => {
    listaCategorias.style.display = "none";
    main.style.filter = "none";
});

botVoltarProdutos.addEventListener('click',  () => window.location.href = "./index.html");

botAdicionarAoCarrinho.addEventListener('click', () => {
    let produtoSelecionado = listaProdutos[idProduto - 1];

    if (!carrinhoProdutos.some(produto => produto.id === produtoSelecionado.id)) {
        enviarProdutoSelecionado(produtoSelecionado);
    }
});

function enviarProdutoSelecionado (produtoSelecionado) {
    carrinhoProdutos.push(produtoSelecionado);
    localStorage.setItem('carrinhoProdutos', JSON.stringify(carrinhoProdutos));
    exibirCarrinho();
};
