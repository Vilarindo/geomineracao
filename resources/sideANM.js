document.getElementById('toggle-button').addEventListener('click', function() {
    const sidePanel = document.getElementById('side-panel');
    sidePanel.classList.toggle('open');
    
    // Alterar o texto do botão com base no estado do painel
    if (sidePanel.classList.contains('open')) {
        this.textContent = 'Fechar Lateral';
    } else {
        this.textContent = 'Abrir Lateral';
    }
});
