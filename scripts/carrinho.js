const elementoParaAdicionarAoCarrinho = document.getElementById('lista-carrinho')
const elementoCarrinho = document.querySelector('.cabecalho__carrinho-menu')
const elementoParaIserirValorTotalCompra = document.getElementById('container-valor-total');
const botAbrirCarrinho = document.querySelector('.cabecalho__carrinho');
const botFecharCarrinho = document.querySelector('.cabecalho__carrinho-menu-bot-saida');
const botLimparCarrinho = document.getElementById('bot-limpar-carrinho');
let carrinhoProdutos = JSON.parse(localStorage.getItem('carrinhoProdutos')) || []

window.addEventListener('pageshow', (event) => {
  if (event.persisted) {
    exibirCarrinho('naoFoiClicado')
    carrinhoProdutos = JSON.parse(localStorage.getItem('carrinhoProdutos')) || []
    elementoCarrinho.style.display = 'none'
  }
});

botAbrirCarrinho.addEventListener('click', () => {
    exibirCarrinho();
});

botFecharCarrinho.addEventListener('click', () => {
    elementoCarrinho.style.display = 'none'
})

function exibirCarrinho(naoFoiClicado) {
    let ProdutosASerAdicionados = JSON.parse(localStorage.getItem('carrinhoProdutos'))
    if (!naoFoiClicado) {
        elementoCarrinho.style.display = 'flex'
    }
    elementoParaAdicionarAoCarrinho.innerHTML = ''
    ProdutosASerAdicionados.forEach(ProdutoASerAdicionado => {
        elementoParaAdicionarAoCarrinho.innerHTML += `
        <li class="item__lista-carinho">
            <div class="container-bot-x">
                <button class="item__lista-carinho__bot-excluir-item bot_reset ${ProdutoASerAdicionado.id}">
                    <img class="bot-excluir-item-img" src="images/icons8-x-50.png" alt="icone de x para retirar produto do carrinho">
                </button>
            </div>
            <div class="item__lista-carinho-dados">
                <img class="item__lista-carrinho-img" src="${ProdutoASerAdicionado.imagens[0]}" alt="foto do produto no carrinho">
                <div class="item__lista-carrinho-infos">
                    <h2 class="item__lista-carrinho-nome">${ProdutoASerAdicionado.nome}</h2>
                    <h3 class="item__lista-carrinho-tamanho">TAMANHO: ${ProdutoASerAdicionado.tamanho}</h3>
                    <div class="item__lista-carrinho-valor">
                        <h3 class="item__lista-carrinho-valor-real"><s>R$${ProdutoASerAdicionado.precoReal.toFixed(2)}</s></h3>
                        <h3 class="item__lista-carrinho-valor-desconto">R$${ProdutoASerAdicionado.precoDesconto.toFixed(2)}</h3>
                    </div>
                </div>
            </div>
        </li>
    `
    });

    atualizarSomaValorTotal();

    const botsExculirItem = document.querySelectorAll('.item__lista-carinho__bot-excluir-item');
    botsExculirItem.forEach(botExculirItem => botExculirItem.addEventListener('click', () => {
        const idItemASerExcluido = botExculirItem.classList[2];
        excluirItemDoCarrinho(idItemASerExcluido);
    }));
};

botLimparCarrinho.addEventListener('click', () => {
    carrinhoProdutos = []
    localStorage.setItem('carrinhoProdutos', JSON.stringify(carrinhoProdutos))
    exibirCarrinho()
})

function atualizarSomaValorTotal () {
    let ProdutosASerAdicionados = JSON.parse(localStorage.getItem('carrinhoProdutos'))
    let qtdItens = 0
    let valorTotalReal = 0
    let valorTotalDesconto = 0
    ProdutosASerAdicionados.forEach(produto => {
        qtdItens++
        valorTotalReal += produto.precoReal
        valorTotalDesconto += produto.precoDesconto
    })

    elementoParaIserirValorTotalCompra.innerHTML = ''
    elementoParaIserirValorTotalCompra.innerHTML += `
        <p class="valor-total-qtd" id="qtd-pecas">
            Qtd. de Itens: ${qtdItens} 
        </p>

        <div class="carrinho__valor-total-valores">
            <h4 class="valor-total-compra-real" id="valor-total-real">
                <s>R$${valorTotalReal.toFixed(2)}</s>
            </h4>
            <h3 class="valor-total-compra-desconto" id="valor-total-desconto">
                R$${valorTotalDesconto.toFixed(2)}
            </h3>
        </div>
    `
};

function excluirItemDoCarrinho (idItem) {
    carrinhoProdutos = carrinhoProdutos.filter(produto => produto.id != idItem);
    localStorage.setItem('carrinhoProdutos', JSON.stringify(carrinhoProdutos));
    exibirCarrinho()
};