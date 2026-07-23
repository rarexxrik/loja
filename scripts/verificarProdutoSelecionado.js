const botsProdutos = document.getElementById('produtos');
const botsDestaques = document.getElementById('carrossel');

botsProdutos.addEventListener('click', (event) => {
    const botao = event.target.closest('button');

    if (!botao) return

    localStorage.setItem('idProdutoSelecionado', botao.id);
    window.location.href = './salepage.html'; 
})

botsDestaques.addEventListener('click', (event) => {
    const botao = event.target.closest('button');

    if (!botao) return

    localStorage.setItem('idProdutoSelecionado', botao.id);
    window.location.href = './salepage.html'; 
})