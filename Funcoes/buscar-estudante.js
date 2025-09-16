// Importa a lista de estudantes do arquivo de dados.
import { estudantes } from '../Banco_De_Dados/dados.js';

// Função responsável por buscar estudantes pelo nome (ou parte dele).
export function buscarEstudante(nomeBusca) {

    // Remove espaços em branco e transforma o nome digitado em minúsculas para facilitar a busca.
    const termo = nomeBusca.trim().toLowerCase();

    // Filtra os estudantes cujo nome (em minúsculas) contenha o termo buscado.
    const resultado = estudantes.filter(e =>
        e.nome.toLowerCase().includes(termo)
    );

    // Se nenhum estudante for encontrado, exibe uma mensagem informando isso.
    if (resultado.length === 0) {
        console.log("Nenhum estudante encontrado.");
    } else {
        // Se encontrar resultados, exibe uma mensagem indicando os estudantes encontrados.
        console.log("Resultados da busca:");

        // Para cada estudante encontrado, exibe nome, idade e notas formatadas.
        resultado.forEach(e => {
            console.log(`${e.nome} - Idade: ${e.idade} - Notas: [${e.notas.join(", ")}]`);
        });
    }
}