// Importa a lista de estudantes do arquivo de dados.
import { estudantes } from "../Banco_De_Dados/dados.js";

// Função responsável por remover um estudante com base no nome informado.
export function removerEstudante(nomeBusca) {
    // Remove espaços em branco e converte o nome para minúsculas para facilitar a busca.
    const termo = nomeBusca.trim().toLowerCase();

    // Encontra o índice do estudante cujo nome começa com o termo buscado.
    const index = estudantes.findIndex(e => 
        e.nome.toLowerCase().startsWith(termo)
    );

    // Se nenhum estudante for encontrado, exibe mensagem e encerra.
    if (index === -1) {
        console.log("estudante não encontrado.");
        return;
    }

    // Remove o estudante da lista pelo índice encontrado.
    estudantes.splice(index, 1);
    
    // Exibe mensagem de sucesso após a remoção.
    console.log("Estudante removido com sucesso!");
}