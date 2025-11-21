let cardContainer = document.querySelector('.cards-container');
let campoBusca = document.querySelector("#searchInput"); 
let dados = [];

async function iniciarBuscar() {
    
    if (dados.length === 0) {
        try {
            // Tenta carregar o data.json
            let resposta = await fetch("data.json");
            dados = await resposta.json();
        } catch (error) {
            console.error("❌ Erro ao carregar data.json:", error);
            cardContainer.innerHTML = "<p style='color: red; text-align:center; padding: 20px;'>Erro ao carregar os dados. Verifique o console para detalhes.</p>";
            return;
        }
    }

    const termoBusca = campoBusca.value.toLowerCase();

    // ATUALIZADO: Filtra usando as novas chaves 'titulo' e 'resumo'
    const dadosFiltrados = dados.filter(dado => 
        dado.titulo.toLowerCase().includes(termoBusca) || 
        dado.resumo.toLowerCase().includes(termoBusca) 
    );

    renderizarCards(dadosFiltrados);
}

function renderizarCards(listaDeDados) {
    cardContainer.innerHTML = ""; 

    if (listaDeDados.length === 0) {
        cardContainer.innerHTML = "<p style='color: var(--secondary-color); text-align:center; padding: 20px;'>Nenhum resultado encontrado.</p>";
        return;
    }

    for (let dado of listaDeDados) {
        let article = document.createElement("article");
        article.classList.add("card");

        // ATUALIZADO: Renderiza usando as novas chaves
        article.innerHTML = `
            <h2>${dado.titulo}</h2>
            <p><strong>${dado.legislacao}</strong></p>
            <p>${dado.resumo}</p>
            <a href="${dado.link_detalhes}" target="_blank">Mais detalhes</a>
        `;
        
        cardContainer.appendChild(article);
    }
}

// Inicia carregando tudo
iniciarBuscar();

// Adiciona o event listener para a busca (opcional, se você quiser a busca em tempo real)
campoBusca.addEventListener('input', iniciarBuscar);
iniciarBuscar();