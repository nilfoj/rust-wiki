// script.js
const modal = document.getElementById('modal');
const fecharModalButton = document.getElementById('fecharModal');

// Função para fechar a caixa modal
function fecharModal() {
    modal.style.display = 'none';
}

// Adiciona evento de clique ao botão de fechar a caixa modal
fecharModalButton.addEventListener('click', fecharModal);

// Adiciona evento de clique fora da caixa modal para fechar
window.addEventListener('click', function (event) {
    if (event.target === modal) {
        fecharModal();
    }
});

// Adiciona evento de pressionar a tecla Esc para fechar a caixa modal
window.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        fecharModal();
    }
});


