const idProduto = localStorage.getItem('idProdutoSelecionado');
const textoJson = localStorage.getItem('listaProdutos');
let listaProdutos = JSON.parse(textoJson)

const elementoParaInserirFotos = document.getElementById('carrossel-sale')
const elementoParaInserirInfos = document.getElementById('venda-infos')
const elementoParaInserirDescricao = document.getElementById('descricao')
const elementoParaInserirImgMedidas = document.getElementById('medidas-img')
const elementoParaInserirMedidas = document.getElementById('medidas')

exibirProdutoSale()

function exibirProdutoSale() {
    const produtoSelecionado = listaProdutos[idProduto - 1]
    
    exibirProdutoFotos(produtoSelecionado)
    exibirProdutoInfos(produtoSelecionado)
    exibirProdutoDescricao(produtoSelecionado)
    exibirProdutoMedidas(produtoSelecionado)

}

function exibirProdutoFotos(produto) {
    elementoParaInserirFotos.innerHTML = '';

    produto.imagens.forEach(img => {
        elementoParaInserirFotos.innerHTML += `
            <div class="swiper-slide">
                <img class="swiper-foto-sale" src="${img}" alt="foto produto">
            </div>
        `
    });
};

function exibirProdutoInfos(produto) {
    elementoParaInserirInfos.innerHTML = '';

    elementoParaInserirInfos.innerHTML += `
        <h2 class="info__titulo">${produto.nome}</h2>
        <hr class="divisoria__sale">
        <div class="tamanhos-disponiveis">
            <h3 class="info__tamanho">
                TAMANHO
                    <strong class="tamanho__medida">
                        ${produto.tamanho}
                    </strong>
            </h3>
        </div>
        <div class="valor">
            <h3 class="valor__real">R$<s>${produto.precoReal.toFixed(2)}</s></h3>
            <h3 class="valor-desconto">R$${produto.precoDesconto.toFixed(2)}</h3>
            <ul class="info__opcoes">
                <li class="opcoes__item">Parcelado em até 3x com acréscimos.</li>
                <li class="opcoes__item">5% de desconto com pagamentos via PIX</li>
            </ul>
        </div>
    `
};

function exibirProdutoDescricao(produto) {
    elementoParaInserirDescricao.innerHTML = '';

    elementoParaInserirDescricao.innerHTML += `${produto.descricao}`;
};

function exibirProdutoMedidas(produto) {
    elementoParaInserirMedidas.innerHTML = '';
    elementoParaInserirImgMedidas.innerHTML = '';

    elementoParaInserirImgMedidas.innerHTML += `
        <img class="medidas__foto" src="${produto.medidasImg}" alt="Foto mostrando como fazer a medição de uma camiseta">
    `

    Object.entries(produto.medidas).forEach(([nome, valor]) => {
        elementoParaInserirMedidas.innerHTML += `
            <li class="medidas-item">${nome}: ${valor} CM</li>
        `
    })
}

