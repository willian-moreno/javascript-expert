### Sobre Stubs
1. Stubs s�o programas que simulam o comportamento de componentes de software dos quais um m�dulo depende.
2. Os Stubs s�o utilizados para substituir um comportamento do sistema por objetos est�ticos, onde se pode criar diferentes Mocks
para cada cen�rio espec�fico.
3. Se n�o houver a possibilidade e efetuar uma requisi��o http, por diversos motivos, ent�o a fun��o de teste usar� o objeto 'mockado'.
4. Testes a priore n�o devem depender se servi�os externos para funcionar.
5. Isso � muito �til para testes que demandam muito tempo para processar, pois poupar� tempo caso, por exemplo, o erro seja por um fator de requisi��o externa.

### API para consumir dados de Star Wars
[SWAPI - The Star Wars API](https://swapi.dev/)