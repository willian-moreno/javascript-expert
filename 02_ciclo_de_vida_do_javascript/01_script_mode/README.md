### Strict Mode
1. O Strict Mode é uma diretiva, que foi introduzida em 2015, com uma série de regras no objetivo de evitar erros de semântica, que passam dispercebidas pelo JavaScript.
2. O 'use strict' é utilizado por padrão em transpiladores como o TypeScript, Babel;
3. Para utilizar essa diretiva, basta colocar no começo do arquivo JavaScript, ou da tag script, um 'use strict';

---

> *O strict mode do ECMAScript 5 é uma forma de optar por uma variante restrita do JavaScript. O strict mode não é apenas um subconjunto: ele intencionalmente tem semânticas diferentes do código normal. Navegadores que não suportam strict mode executarão código strict mode com um comportamento diferente dos navegadores que suportam, então não confie no strict mode sem testar o suporte a funcionalidades dos aspectos relevantes do strict mode. Código strict mode e código não-strict mode podem coexistir, então scripts podem optar pelo strict mode incrementalmente.*

> *O strict mode faz várias mudanças nas semânticas normais do JavaScript. Primeiro, o strict mode elimina alguns erros silenciosos do JavaScript fazendo-os lançar exceções. Segundo, o strict mode evita equívocos que dificultam que motores JavaScript realizem otimizações: código strict mode pode às vezes ser feito para executar mais rápido que código idêntico não-strict mode. Terceiro, strict mode proíbe algumas sintaxes que provavelmente serão definidas em versões futuras do ECMAScript.*

### Strict mode para scripts

*Para invocar strict mode para um script inteiro, coloque exatamente a declaração "use strict"; (ou 'use strict';) antes de qualquer outra declaração.*

``
// Sintaxe strict mode para todo o script
"use strict";
var v = "Oi! Eu sou um script strict mode!";
``

### Strict mode para funções

*Da mesma forma, para invocar strict mode para uma função, coloque exatamente a declaração "use strict"; (ou 'use strict';) no corpo da função antes de qualquer outra declaração.*

``
function strict(){
  // Sintaxe strict mode a nível de função
  'use strict';
  function nested() { return "E eu também!"; }
  return "Oi! Eu sou uma função strict mode!  " + nested();
}
function notStrict() { return "Eu não sou strict."; }
``

[Strict mode](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Strict_mode)<br>

---

E alguns outros exemplos práticos do que acontece com strict:
- Usar variáveis não declaradas gera um erro;
- Usar uma variável não declarada dentro de uma também gera erro;
- Mudar valor de uma propriedade que não é writeable gera erro;
- Deletar um objeto ou variável não é permitido;
- Deletar funções também não é permitido;
- Duplicação de parâmetros em função também não é permitido;
- Modificar uma propriedade getter de um objeto não é permitido;
- Não se pode deletar propriedades undeleteable;
- Não se pode utilizar eval como nome de variável;

[O que faz o ?use strict? no JavaScript? Qual a razão dele existir?](https://www.horadecodar.com.br/2020/06/16/o-que-faz-o-use-strict-no-javascript-qual-a-razao-dele-existir/)<br>
