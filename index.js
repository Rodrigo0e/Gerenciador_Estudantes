// Importa a biblioteca readline-sync para interação com o usuário via terminal.
import readline from "readline-sync";

// Importa os módulos do sistema com suas respectivas funções.
import { cadastrarEstudante } from "./Funcoes/cadastro-estudante.js";
import { listarEstudantes} from "./Funcoes/listar-estudante.js";
import { buscarEstudante } from "./Funcoes/buscar-estudante.js";
import { mediaIndividual,mediaGeral, melhorEstudante } from "./Funcoes/calculos.js";
import { listarAprovados, listarRecuperacao, listarReprovados } from "./Funcoes/relatorio-estudante.js";
import { editarEstudante } from "./Funcoes/editar-estudante.js";
import { removerEstudante } from "./Funcoes/remover-estudante.js";

// Função principal que exibe o menu de gerenciamento de estudantes.
function menu() {
    let opcao; // Variável que armazenará a opção digitada pelo usuário no menu.

    // Estrutura do loop que exibe o menu até o usuário escolher a opção 0
    do {
        // Exibe o menu com as opções numeradas.
        console.log("\n=== GERENCIADOR DE ESTUDANTES ===");
        console.log("1 - Cadastrar estudante");
        console.log("2 - Listar estudantes");
        console.log("3 - Buscar estudante");
        console.log("4 - Médias individuas");
        console.log("5 - Média geral de turma");
        console.log("6 - Melhor estudante");
        console.log("7 - Relatório de aprovados");
        console.log("8 - Relatório de recuperação");
        console.log("9 - Relatório de reprovados");
        console.log("10 - Editar estudante");
        console.log("11 - Remover estudante");
        console.log("0 - Sair");
        
        // Lê a opção escolhida pelo usuário.
        opcao = readline.questionInt("Escolha uma opcao: ");

        // Executa ações que o usuário escolheu.
        switch (opcao) {

            // Cadastro de um novo estudante.
            case 1:
                const nome = readline.question("Nome: ");
                const idade = readline.questionInt("Idade: ");
                const notasInput = readline.question("Notas (separadas por virgula): ");
                
                // Divide as notas, remove espaços em branco e converte para número.
                const notas = notasInput
                    .split(",")
                    .map(n => n.trim())
                    .filter(n => n !== "")
                    .map(Number);
                    
                // Valida se todas são números e se há pelo menos uma nota.   
                if (notas.length === 0 || notas.some(n => Number.isNaN(n))) {
                    console.log("Erro: Digite apenas números separados por vírgula!");
                } else {
                    // Chama a função de cadastro.
                    cadastrarEstudante(nome, idade, notas);
                }
                break;
    
            // Lista todos os estudantes cadastrados.   
            case 2:
                listarEstudantes();
                break;
             
            // Busca um estudante pelo nome.
            case 3: 
                const busca = readline.question("Digite o nome para buscar: ");
                buscarEstudante(busca);
                break;

            // Exibe as médias individuais de cada estudante.
            case 4:
                mediaIndividual();
                break;
                
            // Exibe a média geral da turma.    
            case 5:
                mediaGeral();
                break;

            // Exibe o estudante com a maior média.
            case 6:
                melhorEstudante();
                break;
                
            // Lista apenas os estudantes aprovados.   
            case 7:
                listarAprovados();
                break;
                
            // Lista estudantes em recuperação.
            case 8:
                listarRecuperacao();
                break;
                
            // Lista os estudantes reprovados.
            case 9:
                listarReprovados();
                break;
            
            // Permite editar dados de um estudante.
            case 10:
                const nomeEditar = readline.question("Nome do estudante que deseja editar: ");
                const novoNome = readline.question("Novo nome (ou Enter para manter): ");
                const novaIdadeStr = readline.question("Nova idade (ou Enter para manter): ");
                const novasNotasInput = readline.question("Novas notas (separadas por vírgula ou Enter para manter): ");
                
                // Trata os dados inseridos, mantendo os atuais se vazio
                const novaIdade = novaIdadeStr.trim() === "" ? undefined : parseInt(novaIdadeStr);
                const novasNotas = novasNotasInput.trim() === ""
                    ? undefined
                    : novasNotasInput
                        .split(",")
                        .map(n => parseFloat(n.trim()))
                        .filter(n => !isNaN(n));

                    editarEstudante(nomeEditar, novoNome || undefined, novaIdade, novasNotas);
                    break;
            
            // Remove um estudante pelo nome.
            case 11:
                const nomeRemover = readline.question("Nome do estudante que deseja remover: ");
                removerEstudante(nomeRemover);
                break;

            // Encerra o programa.
            case 0:
                console.log("Saindo...");
                break;
    
            // Caso o usuário digite uma opção inválida.
            default:
                console.log("Opção invalida!");
        }

    // O menu continuará sendo exibido até que a opção 0 seja digitada.
    } while (opcao !== 0);
}

// Chamada da função principal.
menu();