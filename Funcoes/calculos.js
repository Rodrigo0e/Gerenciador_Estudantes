// Importa a lista de estudantes do arquivo de dados.
import { estudantes } from "../Banco_De_Dados/dados.js";

// Função que calcula a média de um array de notas.
export function calcularMedia(notas) {
    // Verifica se 'notas' é um array válido e não está vazio.
    if (!Array.isArray(notas) || notas.length === 0) {
        return 0; // Retorna 0 para evitar divisão por zero.
    }
    // Soma todas as notas e divide pelo total para obter a média.
    return notas.reduce((acc, n) => acc + n, 0) / notas.length;
}

// Exibe a média individual de cada estudante.
export function mediaIndividual() {
    // Verifica se há estudantes cadastrados.
    if (estudantes.length === 0) {
        console.log("Nenhum estudante cadastrado.");
        return;
    }
    // Para cada estudante, calcula e exibe a média das notas.
    estudantes.forEach( e => {
        const media = calcularMedia(e.notas);
        console.log(`${e.nome} - Média: ${media.toFixed(2)}`)
    });
}

// Calcula e exibe a média geral da turma.
export function mediaGeral() {
    // Verifica se há estudantes cadastrados.
    if (estudantes.length === 0) {
        console.log("Nenhum estudante cadastrado.");
        return;
    }

    // Junta todas as notas de todos os estudantes em um único array.
    const todasNotas = estudantes.flatMap(e => e.notas);

    // Calcula a média geral usando a função de média reutilizável.
    const media = calcularMedia(todasNotas);
    console.log(`Média geral da turma: ${media.toFixed(2)}`);
}

// Identifica e exibe o estudante com a maior média.
export function melhorEstudante() {

    // Verifica se há estudantes cadastrados.
    if (estudantes.length === 0) {
        console.log("Nenhum estudante cadastrado.");
        return;
    }

    // Usa reduce para encontrar o estudante com a maior média.
    const melhor = estudantes.reduce((maior, atual) => {
        const mediaAtual = calcularMedia(atual.notas);
        const mediaMaior = calcularMedia(maior.notas);
        return mediaAtual > mediaMaior ? atual : maior;
    });

    // Exibe o nome e a média do melhor estudante.
    console.log(`Melhor estudante: ${melhor.nome} (Média: ${calcularMedia(melhor.notas).toFixed(2)})`);
}