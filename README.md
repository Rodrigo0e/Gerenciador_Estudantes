# Gerenciador_Estudantes

Funcionalidades

1. Cadastro de estudantes
O programa lê o nome, idade e notas inseridos pelo usuário no terminal, valida esses dados (nome não vazio, idade positiva, notas entre 0 e 10) e adiciona um novo objeto estudante no array estudantes.

2. Listagem
Percorre o array estudantes e imprime no terminal o nome, idade e as notas de cada estudante cadastrados.

3. Busca
Recebe um texto do usuário e filtra o array estudantes para mostrar todos os estudantes cujo nome contém esse texto, ignorando maiúsculas e minúsculas.

4. Edição
Busca o estudante pelo nome, e permite alterar nome, idade e notas. Caso algum campo fique vazio, mantém o dado antigo. Após validar os novos dados, atualiza o objeto do estudante no array.

5. Remoção
Procura o estudante pelo nome e remove o objeto correspondente do array estudantes.

6. Cálculo de médias
Calcula a média das notas de cada estudante individualmente, a média geral da turma (considerando todas as notas de todos os estudantes) e identifica o estudante com maior média.

7. Relatórios
Com base nas médias individuais, o sistema separa os estudantes em três grupos:

- Aprovados (média ≥ 7)
- Recuperação (5 ≤ média < 7)
- Reprovados (média < 5)
Cada grupo é listado separadamente no terminal.

8. Interface
O programa apresenta um menu interativo no terminal, que exibe as opções numeradas. O usuário escolhe uma opção digitando o número e o sistema executa a ação correspondente.


Resumidamente como o código realiza cada funcionalidade:

- Cadastro: lê nome, idade e notas do usuário, valida e adiciona um novo estudante ao array de estudantes.

- Listagem: percorre a lista de estudantes e exibe nome, idade e notas de cada um.

- Busca: recebe um termo, filtra e mostra estudantes cujo nome contém esse termo (case insensitive).

- Edição: localiza o estudante pelo nome, permite alterar nome, idade e notas, mantendo dados antigos se o usuário não informar novos valores.

- Remoção: encontra o estudante pelo nome e remove do array.

- Cálculo de médias: calcula a média das notas individuais, a média geral da turma e identifica o estudante com maior média.

- Relatórios: filtra e lista estudantes aprovados (média ≥ 7), em recuperação (5 ≤ média < 7) e reprovados (média < 5).

- Menu interativo: apresenta opções no terminal para o usuário escolher e executar as ações acima, repetindo até o usuário sair.
