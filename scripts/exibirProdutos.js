const elementoParaInserirProdutos = document.getElementById('produtos');
const elementoParaIserirDestaques = document.getElementById('carrossel');
const elementoParaInserirTitulo = document.getElementById('titulo-page');
const elementoParaInserirProdutosDisponiveis = document.getElementById('produtos-disponiveis')
const elementoParaInserirMensagem = document.getElementById('produtos-indisponiveis')

function exibirProdutosNaTela (listaProdutos) {
    elementoParaInserirProdutosDisponiveis.style.display = "block";
    elementoParaInserirMensagem.style.display = "none";
    elementoParaInserirProdutos.innerHTML = '';

    listaProdutos.forEach(produto => {
        elementoParaInserirProdutos.innerHTML += `
            <li class="produtos__item"> 
                <button class="bot_reset bot_produto" id="${produto.id}">
                        <img class="produtos__foto" src="${produto.imagens[0]}" alt="foto produto">
                        <div class="produto__dados">
                            <span class="produto__titulo">${produto.nome}</span>
                            <span class="produto__valor"><s>R$${produto.precoReal.toFixed(2)}</s></span>
                            <span class="produto__desconto">R$${produto.precoDesconto.toFixed(2)}</span>
                        </div>
                </button>    
            </li>     
        `
    });
}

function exibirDestaquesNaTela (listaProdutos) {
    elementoParaIserirDestaques.innerHTML = '';
    const destaques = listaProdutos.filter(produto => produto.destaque === true);

    destaques.forEach(destaque => {
        elementoParaIserirDestaques.innerHTML += `
            <div class="swiper-slide">
                <button class="bot_reset" id="${destaque.id}">
                        <img class="swiper-foto" src="${destaque.imagens[0]}" alt="foto produto">
                        <div class="produto__dados">
                            <span class="produto__titulo">${destaque.nome}</span>
                            <span class="produto__valor"><s>R$${destaque.precoReal.toFixed(2)}</s></span>
                            <span class="produto__desconto">R$${destaque.precoDesconto.toFixed(2)}</span>
                        </div>
                </button>
            </div>
        `
    })
}

function exibirTituloPage (titulo) {
    const tituloCaixaAlta = titulo.toUpperCase();
    elementoParaInserirTitulo.innerHTML = ''

    elementoParaInserirTitulo.innerHTML += `${tituloCaixaAlta}`
}