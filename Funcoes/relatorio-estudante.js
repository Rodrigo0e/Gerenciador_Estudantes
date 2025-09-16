// Importa a lista de estudantes do arquivo de dados.
import { estudantes } from "../Banco_De_Dados/dados.js";

// Importa a função que calcula a média das notas
import { calcularMedia } from "../Funcoes/calculos.js";

// Função que lista os estudantes com média maior ou igual a 7 (aprovados).
export function listarAprovados() {
    // Filtra os estudantes que têm média >= 7.
    const aprovados = estudantes.filter(e => calcularMedia(e.notas) >= 7);

    // Exibe título da seção.
    console.log("\n===Estudantes Aprovados===");

    // Se não houver aprovados, exibe mensagem e encerra.
    if (aprovados.length === 0) {
        console.log("Nenhum estudante Aprovado.");
        return;
    }
    // Exibe nome e média de cada estudante aprovado.
    aprovados.forEach(e => 
        console.log(`${e.nome} - Média: ${calcularMedia(e.notas).toFixed(2)}`)
    );
}

// Função que lista os estudantes com média entre 5 (inclusive) e 7 (exclusivo).
export function listarRecuperacao() {
    // Filtra os estudantes com média entre 5 e 6.99.
    const rec = estudantes.filter(e => {
        const m = calcularMedia(e.notas);
        return m >= 5 && m < 7;
    });

    // Exibe título da seção.
    console.log("\n===Estudantes em Recuperação===");
    // Se nenhum estiver em recuperação, exibe mensagem e encerra
    if (rec.length === 0) {
        console.log("Nenhum estudante em recuperação.");
        return;
    }

    // Exibe nome e média de cada estudante em recuperação.
    rec.forEach(e => 
        console.log(`${e.nome} - Média: ${calcularMedia(e.notas).toFixed(2)}`)
    );
}

// Função que lista os estudantes com média menor que 5 (reprovados).
export function listarReprovados() {
    // Filtra os estudantes com média < 5.
    const reprovados = estudantes.filter(e => calcularMedia(e.notas) < 5);

    // Exibe título da seção.
    console.log("\n===Estudantes Reprovados===");

    // Se não houver reprovados, exibe mensagem e encerra.
    if (reprovados.length === 0) {
        console.log("Nenhum estudante reprovado.");
        return;
    }

    // Exibe nome e média de cada estudante reprovado.
    reprovados.forEach(e => 
        console.log(`${e.nome} - Média: ${calcularMedia(e.notas).toFixed(2)}`)
    ); 
}