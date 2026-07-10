const botsCategorias = document.querySelectorAll('.lista__item button');
const isMobile = window.matchMedia("(max-width: 1023px)").matches;

botsCategorias.forEach(bot => bot.addEventListener('click', filtrarProdutos));

function filtrarProdutos () {
    if (isMobile) {
        listaCategorias.style.display = "none";
    }

    const botElemento = document.getElementById(this.id)
    const elementoTexto = document.querySelector(`#${botElemento.id}`).textContent
    const produtosFiltrados = []

    listaProdutos.forEach(produto => {
        if (produto.categoria == botElemento.id) {
            produtosFiltrados.push(produto)
        }
    })

    if (botElemento.id == 'todos-os-produtos') {
        exibirProdutosNaTela(listaProdutos)
    } else if (produtosFiltrados.length > 0) {
        exibirProdutosNaTela(produtosFiltrados)
    } else {
        elementoParaInserirProdutosDisponiveis.style.display = "none";
        elementoParaInserirMensagem.style.display = "block";
    }
        
    
    exibirTituloPage(elementoTexto)

    elementoParaInserirTitulo.scrollIntoView({
        behavior: "smooth",
        block: "start"
    })
}