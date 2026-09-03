const botsCategorias = document.querySelectorAll('.lista__item button');
const isMobile = window.matchMedia("(max-width: 1023px)").matches;
const inputBusca = document.getElementById('campo-busca');

botsCategorias.forEach(bot => bot.addEventListener('click', filtrarProdutos));

function filtrarProdutos () {
    if (isMobile) {
        listaCategorias.style.display = "none";
        main.style.filter = "none";
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

inputBusca.addEventListener('input', filtrarPesquisa);

function filtrarPesquisa () {
    document.querySelector('.produtos_indisponiveis').style.display = "none";
    document.querySelector('.produtos_disponiveis').style.display = "block";
    const elementoDestaque = document.querySelector('.carrossel');
    const produtos = document.querySelectorAll('.produtos__item');
    let contadorProdutosNegados = 0
    if (inputBusca.value != "" || !inputBusca) {
        elementoDestaque.style.display = "none"
        produtos.forEach((produto) => {
            let titulo = produto.querySelector('.produto__titulo').textContent.toLocaleLowerCase();
            let valorPesquisa = inputBusca.value.toLowerCase();
            
            if (!titulo.includes(valorPesquisa)) {
                produto.style.display = "none";
                contadorProdutosNegados++
            } else {
                produto.style.display = "block"
            }

            if (contadorProdutosNegados === produtos.length) {
                document.querySelector('.produtos_indisponiveis').style.display = "block";
                document.querySelector('.produtos_disponiveis').style.display = "none";
            }
        })
    } else {
        elementoDestaque.style.display = "block"
        produtos.forEach((produto) => produto.style.display = "block");
    }
}