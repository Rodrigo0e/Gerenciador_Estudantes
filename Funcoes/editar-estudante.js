// Importa a lista de estudantes do arquivo de dados.
import { estudantes } from "../Banco_De_Dados/dados.js";

// Função responsável por editar os dados de um estudante.
export function editarEstudante(nomeBusca, novoNome, novaIdade, novasNotas) {
    // Remove espaços e transforma o nome digitado para minúsculas para facilitar a busca
    const termo = nomeBusca.trim().toLowerCase();

    // Procura o índice do estudante cujo nome começa com o termo buscado.
    const index = estudantes.findIndex(e =>
        e.nome.toLowerCase().startsWith(termo)
    );

    // Se não encontrar, exibe mensagem e encerra.
    if (index === -1) {
        console.log("Estudante não encontrado.");
        return;
    }

    // Acessa o estudante encontrado pelo índice.
    const estudante = estudantes[index];

    // Exibe os dados do estudante antes da edição
    console.log("ANTES:", estudante);

    // Atualiza o nome, se um novo nome válido for fornecido.
    if (typeof novoNome === "string" && novoNome.trim() !== "") {
        estudante.nome = novoNome.trim();
    }

    // Atualiza a idade, se uma nova idade válida for fornecida.
    if (typeof novaIdade === "number" && !isNaN(novaIdade) && novaIdade > 0) {
        estudante.idade = novaIdade;
    }

    // Atualiza as notas, se um novo array válido de notas for fornecido.
    if (
        Array.isArray(novasNotas) &&
        novasNotas.length > 0 &&
        novasNotas.every(n => typeof n === "number" && !isNaN(n) && n >= 0 && n <= 10)
    ) {
        estudante.notas = novasNotas;
    }

    // Exibe os dados do estudante após a edição.
    console.log("DEPOIS:", estudante);
    // Mensagem de sucesso.
    console.log("Estudante atualizado com sucesso!");
}
