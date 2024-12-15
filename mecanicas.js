// Variáveis para os botões
const botaoTransf = document.querySelector('.botao_adicionar');
const botaoRemove = document.querySelector('.botao_retirar');
const botaoApaga = document.querySelector('.botao_apagar');

// Variáveis para os textos e a lista
const textoInserido = document.querySelector('.area_insere');
const areaExibicao = document.querySelector('.lista_itens');

// Evento que opera a função de exibir o texto na lista
botaoTransf.addEventListener("click", exibeTexto);

// Função que opera a adição de itens na lista
function exibeTexto()
    {
        // Variável que representa a entrada do usuário
        const item = textoInserido.value;

        if(item !== '')
            {
                // Criando dinâmicamente uma lista
                const novoItem = document.createElement('li');

                // Atribuindo o texto da entrada do usuário ao tópico da lista
                novoItem.textContent = item;

                // Colocando o texto dentro da lista
                areaExibicao.appendChild(novoItem);
                
                // Limpando a entrada anterior
                textoInserido.value = '';
            }
    }

// Segunda função
botaoRemove.addEventListener('click', tiraUltimo)

function tiraUltimo()
    {
        // Variável para último item da lista
        const ultimoItem = areaExibicao.lastChild;
        
        // Método que remove o último item da lista
        areaExibicao.removeChild(ultimoItem);
    }


// Função 3
botaoApaga.addEventListener('click', () => {
    areaExibicao.innerHTML = "";
})
