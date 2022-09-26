### Sobre Stubs
1. Stubs são programas que simulam o comportamento de componentes de software dos quais um módulo depende.
2. Os Stubs são utilizados para substituir um comportamento do sistema por objetos estáticos, onde se pode criar diferentes Mocks
para cada cenário específico.
3. Se não houver a possibilidade e efetuar uma requisição http, por diversos motivos, então a função de teste usará o objeto 'mockado'.
4. Testes a priore não devem depender se serviços externos para funcionar.
5. Isso é muito útil para testes que demandam muito tempo para processar, pois poupará tempo caso, por exemplo, o erro seja por um fator de requisição externa.

### API para consumir dados de Star Wars
[SWAPI - The Star Wars API](https://swapi.dev/)