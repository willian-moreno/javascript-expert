### Strict Mode
1. O Strict Mode � uma diretiva, que foi introduzida em 2015, com uma s�rie de regras no objetivo de evitar erros de sem�ntica, que passam dispercebidas pelo JavaScript.
2. O 'use strict' � utilizado por padr�o em transpiladores como o TypeScript, Babel;
3. Para utilizar essa diretiva, basta colocar no come�o do arquivo JavaScript, ou da tag script, um 'use strict';

---

> *O strict mode do ECMAScript 5 � uma forma de optar por uma variante restrita do JavaScript. O strict mode n�o � apenas um subconjunto: ele intencionalmente tem sem�nticas diferentes do c�digo normal. Navegadores que n�o suportam strict mode executar�o c�digo strict mode com um comportamento diferente dos navegadores que suportam, ent�o n�o confie no strict mode sem testar o suporte a funcionalidades dos aspectos relevantes do strict mode. C�digo strict mode e c�digo n�o-strict mode podem coexistir, ent�o scripts podem optar pelo strict mode incrementalmente.*

> *O strict mode faz v�rias mudan�as nas sem�nticas normais do JavaScript. Primeiro, o strict mode elimina alguns erros silenciosos do JavaScript fazendo-os lan�ar exce��es. Segundo, o strict mode evita equ�vocos que dificultam que motores JavaScript realizem otimiza��es: c�digo strict mode pode �s vezes ser feito para executar mais r�pido que c�digo id�ntico n�o-strict mode. Terceiro, strict mode pro�be algumas sintaxes que provavelmente ser�o definidas em vers�es futuras do ECMAScript.*

### Strict mode para scripts

*Para invocar strict mode para um script inteiro, coloque exatamente a declara��o "use strict"; (ou 'use strict';) antes de qualquer outra declara��o.*

``
// Sintaxe strict mode para todo o script
"use strict";
var v = "Oi! Eu sou um script strict mode!";
``

### Strict mode para fun��es

*Da mesma forma, para invocar strict mode para uma fun��o, coloque exatamente a declara��o "use strict"; (ou 'use strict';) no corpo da fun��o antes de qualquer outra declara��o.*

``
function strict(){
  // Sintaxe strict mode a n�vel de fun��o
  'use strict';
  function nested() { return "E eu tamb�m!"; }
  return "Oi! Eu sou uma fun��o strict mode!  " + nested();
}
function notStrict() { return "Eu n�o sou strict."; }
``

[Strict mode](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Strict_mode)<br>

---

E alguns outros exemplos pr�ticos do que acontece com strict:
- Usar vari�veis n�o declaradas gera um erro;
- Usar uma vari�vel n�o declarada dentro de uma tamb�m gera erro;
- Mudar valor de uma propriedade que n�o � writeable gera erro;
- Deletar um objeto ou vari�vel n�o � permitido;
- Deletar fun��es tamb�m n�o � permitido;
- Duplica��o de par�metros em fun��o tamb�m n�o � permitido;
- Modificar uma propriedade getter de um objeto n�o � permitido;
- N�o se pode deletar propriedades undeleteable;
- N�o se pode utilizar eval como nome de vari�vel;

[O que faz o ?use strict? no JavaScript? Qual a raz�o dele existir?](https://www.horadecodar.com.br/2020/06/16/o-que-faz-o-use-strict-no-javascript-qual-a-razao-dele-existir/)<br>
