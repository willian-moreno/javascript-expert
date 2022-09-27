### Call Stack e Memory Heap

1. O Call Stack � uma pilha de opera��es, onde s�o armazenadas as sequ�ncias de a��es que o JavaScript ir� executar, de forma ordenada.
2. O Call Stack � utilizado para guardar as indexa��es futuras de execu��o de um script, seguindo a estrutura de dados pilha.
3. Na Call Stack s�o armazenados os tipos primitivos de vari�veis.
4. A Memory Heap (Pilha de mem�ria) � o lugar no qual s�o armazenados os endere�os de mem�ria, que podem ser apontados pelo Call Stack, para trabalhar valores de vari�veis, fun��es, objetos, arrays, etc.
5. A diferen�a entre ambos, do ponto de vista de armazenamento, � que o Call Stack guarda dados de tipo de valor primitivo, enquanto o Memory Heap guarda dados de tipo de refer�ncia, que podem crescer dinamicamente (fun��es, arrays, etc.).
6. O Call Stack � a pilha de execu��o de fun��es e o Memory Heap � a pilha de mem�ria para guardar os dados do tipo de refer�ncia.

___

### Call stack (Pilha de chamadas)

A pilha de chamadas (call stack) � um mecanismo do interpretador de uma linguagem que organiza o funcionamento do script quando s�o chamadas muitas fun��es, qual fun��o est� sendo executada no momento, e quais ser�o chamadas dentro de alguma fun��o, etc.
- Quando o script chama a fun��o, ela � adicionada � pilha de chamadas, e ent�o � iniciado o carregamento da fun��o.
- Qualquer fun��o chamada por essa fun��o ser� adicionada � pilha de chamadas uma acima da outra.
- Quando a fun��o termina a execu��o, o interpretador retira a fun��o da pilha e continua a execu��o do programa de onde parou.
- Caso a pilha ocupar mais espa�o do que foi separado a ela, ser� exibido um erro "stack overflow" (estouro de pilha).

#### Exemplo

```javascript
function saudacao() {
   // [1] Algum c�digo aqui
   digaOi();
   // [2] Algum c�digo aqui
}
function digaOi() {
   return "Ol�!";
}

// Chamando a fun��o `saudacao`
saudacao();

// [3] Algum c�digo aqui

```

O c�digo acima ser� executado desta forma pelo interpretador:

1. Todas as fun��es ser�o ignoradas, at� chegar na chamada da fun��o saudacao().
2. Adiciona a fun��o saudacao() para a pilha de chamadas. 
> Nota: Pilha de chamadas: - saudacao 
3. Executa todas as linhas de c�digo da fun��o saudacao().
4. Chama a fun��o digaOi().
5. Adiciona a fun��o digaOi() na pilha de chamadas. 
> Nota: Pilha de chamadas: - saudacao > - digaOi 
6. Executa todas as linhas de c�digo da fun��o digaOi() at� o final.
7. Retorna a execu��o na linha onde foi chamada a fun��o digaOi() e continua a execu��o do resto da fun��o saudacao().
8. Deleta a fun��o digaOi() da pilha de chamadas. 
> Nota: Pilha de chamadas: - saudacao
9. Quando todas as linhas da fun��o saudacao() forem executadas, retorna para a linha onde a fun��o foi invocada, e continua a execu��o do resto do c�digo.
10. Deleta a fun��o saudacao() da Pilha de chamadas. 
> Nota: Pilha de chamadas: EMPTY 

Come�amos com uma pilha de chamadas vazia, e sempre que chamamos uma fun��o, ela � automaticamente adicionada � pilha de chamadas, e depois de todas as linhas serem executadas, � automaticamente removida da pilha de chamadas. No final, a pilha est� vazia novamente.

[Call stack (Pilha de chamadas)](https://developer.mozilla.org/pt-BR/docs/Glossary/Call_stack#exemplo)