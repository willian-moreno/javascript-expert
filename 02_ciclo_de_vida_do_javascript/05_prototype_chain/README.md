### Prototype Chain - Herança em Javascript
1. Herança de objetos é a habilidade de acessar métodos e propriedades, de outro objeto pai, a partir de um objeto derivado. 
2. Em JavaScript herança é feita através do Prototype, conhecida como herança de protótipo.
3. Quando utilizamos herança podemos utilizar conceitos de SOLID (Single Responsibility, Open Closed, Liskov's Substitution, Interface Segregation, Dependency Inversion).
4. Prototype Chain é o processo de pesquisa, de ficar navegando entre classes derivadas até o valor raiz da instância.

___

### SOLID com JavaScript: Princípio da Responsabilidade Única (SRP)

#### O que é SOLID?
SOLID é um acrônimo de 5 princípios da programação orientada a objetos, são eles:<br>
[S]ingle Responsability Principle<br>
[O]pen/Closed Principle<br>
[L]iskov Substitution Principle<br>
[I]nterface Segregation Principle<br>
[D]ependency Inversion Principle<br>

#### Referências

[SOLID com JavaScript: Princípio da Responsabilidade Única (SRP)](https://felipecesr.medium.com/princ%C3%ADpios-solid-princ%C3%ADpio-da-responsabilidade-%C3%BAnica-srp-4033232e4abd)<br>

___

### Princípios SOLID de design para JavaScript 

>- *Princípio da Responsabilidade Única. Tudo deve possuir apenas uma razão para mudar. Isso ajudará os desenvolvedores a entender o contexto e a responsabilidade do que eles estão construindo e quando existe uma necessidade de mudança.*
>- *Princípio Aberto-Fechado. A mudança de comportamento deve ser possível sem alterar código existente. Por exemplo, utilizando pontos de extenção, onde a classe base não é alterada, mas tem seu comportamento complementado através de abstrações e/ou interfaces, criando código que pode ser plugado ao já existente.*
>- *Princípio da Substituição de Liskov. Objetos derivados ou tipos devem ser subistituíveis pelo seu tipo base. Para Derick, essa é a versão mais focada do princípio Aberto-Fechado.*
>- *Princípio de Segregação de Interfaces. Um cliente não deve ser forçado a depender de interfaces que não usa. O problema é que não existem interfaces explícitas no JavaScript, mas existem formas de contornar isso.*
>- *Princípio de Inversão de Dependências. Consiste em dois conceitos, abstração, que define que nós devemos depender de abstrações, não de implementações concretas e propriedade, que define que a implementação de baixo nível deve depender de conceitos de alto nível.*

#### Referências

[Princípios SOLID de design para JavaScript](https://www.infoq.com/br/news/2014/02/solid-principios-javascript/)