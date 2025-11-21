# 🇧🇷 Projeto Inclusão Social: Base de Conhecimento Dinâmica
## 🎓 Imersão Dev Google - Alura

Uma aplicação front-end que serve como uma **Base de Conhecimento** e ferramenta de pesquisa sobre as principais **Leis e Conceitos de Inclusão Social** no Brasil.

O projeto utiliza a **API Gemini** para gerar e manter os dados de legislação, garantindo que o conteúdo exibido seja relevante e estruturado para fácil consumo.

---

## 💡 A Importância Deste Projeto

Este projeto nasceu da necessidade de **desmistificar e tornar acessível** a complexa legislação brasileira de inclusão.

1.  **Acessibilidade da Informação:** Centraliza informações sobre temas cruciais (como PcD, Pessoa Idosa, Diversidade e Leis de Cotas), apresentando-os em cards dinâmicos de fácil compreensão.
2.  **Tecnologia e Cidadania:** Demonstra o potencial da **Inteligência Artificial Generativa (API Gemini)**, utilizando a IA como um "curador de conteúdo" automatizado para gerar resumos concisos e links oficiais, agilizando o acesso a direitos.
3.  **Habilidade Técnica:** Valida a capacidade de integrar APIs avançadas (manipulando JSON Schema), e desenvolver interfaces responsivas e funcionais utilizando JavaScript puro.

---

## ⚙️ Tecnologias Utilizadas

| Categoria | Tecnologia | Uso no Projeto |
| :--- | :--- | :--- |
| **Geração de Dados** | **Google Gemini API** | Geração e estruturação do conteúdo de legislação (título, lei, resumo e temas) através de um *JSON Schema* rígido. |
| **Linguagem Principal** | **JavaScript (ES Modules)** | Responsável pela lógica de busca, filtro, e renderização dinâmica dos cards no Front-end (`script.js`). |
| **Estrutura** | **HTML & CSS** | Estruturação da página e estilização (interface de busca e layout dos cards). |
| **Ambiente** | **Node.js** | Ambiente de execução para o script de geração (`gerador.js`) e gerenciamento seguro da chave de API. |

---

## 🚀 Funcionalidades

* **Busca em Tempo Real:** Permite o filtro instantâneo por **Título** ou **Resumo** das leis.
* **Cards Detalhados:** Exibe o `título` (Lei/Conceito), `legislacao` (Número da Lei), `resumo` (Breve Descrição) e um `link_detalhes` (URL oficial).
* **Geração Automatizada (`npm start`):** Script que consulta a API Gemini para expandir ou atualizar a base de dados (`baseDeConhecimento.json`).
