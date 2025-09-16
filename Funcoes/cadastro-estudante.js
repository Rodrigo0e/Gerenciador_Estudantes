// Importa a lista de estudantes do arquivo de dados.
import { estudantes } from '../Banco_De_Dados/dados.js';

// Função responsável por cadastrar um novo estudante no sistema.
export function cadastrarEstudante(nome, idade, notas) {
    // Verifica se o nome foi informado e não está vazio.
    if (!nome || nome.trim() === "") {
        console.log("Erro: nome não pode ser vazio.");
        return;
    }
    // Verifica se a idade é um número inteiro positivo.
    if (!Number.isInteger(idade) || idade <= 0) {
    console.log("Erro: idade deve ser um número positivo.");
    return;
    }

    // Verifica se as notas são válidas: um array de números entre 0 e 10.
    if (!Array.isArray(notas) || notas.some(n => isNaN(n) || n < 0 || n > 10)) {
        console.log("Erro: notas devem estar entre 0 e 10.");
        return;
    }

    // Cria um objeto com os dados do novo estudante.
    const novoEstudante = { nome: nome.trim(), idade, notas };

    // Adiciona o novo estudante ao array de estudantes.
    estudantes.push(novoEstudante);

    // Exibe mensagem de sucesso após o cadastro.
    console.log("Estudante cadastrado com sucesso!");
}