// Importa a lista de estudantes do arquivo de dados.
import { estudantes } from "../Banco_De_Dados/dados.js";

// Função responsável por listar todos os estudantes cadastrados.
export function listarEstudantes() {
    // Verifica se a lista de estudantes está vazia
    if (estudantes.length === 0) {
        console.log("Nenhum estudante cadastrado.");
        return;
    }

    // Percorre a lista e exibe os dados de cada estudante formatados.
    estudantes.forEach((e, i) => {
        console.log(`${i + 1}. ${e.nome} - Idade: ${e.idade} - Notas: [${e.notas.join(", ")}]`); 
    });
}