// Smooth scroll para os links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if(targetElement){
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Lógica para as abas
document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    // Função para ativar uma aba específica
    const activateTab = (tabId) => {
        tabButtons.forEach(btn => {
            btn.classList.remove('tab-active');
            btn.classList.add('tab-inactive');
        });
        tabContents.forEach(content => {
            content.classList.add('hidden');
        });

        const activeBtn = document.querySelector(`[data-tab="${tabId}"]`);
        if (activeBtn) {
            activeBtn.classList.add('tab-active');
            activeBtn.classList.remove('tab-inactive');
        }
        const targetContent = document.getElementById(tabId + '-content');
        if (targetContent) {
            targetContent.classList.remove('hidden');
        }
    };

    // Ativar a primeira aba por padrão ao carregar a página
    activateTab('strategy');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');
            activateTab(tabId);
        });
    });

    // Atualiza o ano no rodapé automaticamente
    document.getElementById('current-year').textContent = new Date().getFullYear();
});