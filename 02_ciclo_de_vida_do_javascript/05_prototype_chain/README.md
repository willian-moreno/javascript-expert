### Prototype Chain - Heran�a em Javascript
1. Heran�a de objetos � a habilidade de acessar m�todos e propriedades, de outro objeto pai, a partir de um objeto derivado. 
2. Em JavaScript heran�a � feita atrav�s do Prototype, conhecida como heran�a de prot�tipo.
3. Quando utilizamos heran�a podemos utilizar conceitos de SOLID (Single Responsibility, Open Closed, Liskov's Substitution, Interface Segregation, Dependency Inversion).
4. Prototype Chain � o processo de pesquisa, de ficar navegando entre classes derivadas at� o valor raiz da inst�ncia.

___

### SOLID com JavaScript: Princ�pio da Responsabilidade �nica (SRP)

#### O que � SOLID?
SOLID � um acr�nimo de 5 princ�pios da programa��o orientada a objetos, s�o eles:<br>
[S]ingle Responsability Principle<br>
[O]pen/Closed Principle<br>
[L]iskov Substitution Principle<br>
[I]nterface Segregation Principle<br>
[D]ependency Inversion Principle<br>

#### Refer�ncias

[SOLID com JavaScript: Princ�pio da Responsabilidade �nica (SRP)](https://felipecesr.medium.com/princ%C3%ADpios-solid-princ%C3%ADpio-da-responsabilidade-%C3%BAnica-srp-4033232e4abd)<br>

___

### Princ�pios SOLID de design para JavaScript 

>- *Princ�pio da Responsabilidade �nica. Tudo deve possuir apenas uma raz�o para mudar. Isso ajudar� os desenvolvedores a entender o contexto e a responsabilidade do que eles est�o construindo e quando existe uma necessidade de mudan�a.*
>- *Princ�pio Aberto-Fechado. A mudan�a de comportamento deve ser poss�vel sem alterar c�digo existente. Por exemplo, utilizando pontos de exten��o, onde a classe base n�o � alterada, mas tem seu comportamento complementado atrav�s de abstra��es e/ou interfaces, criando c�digo que pode ser plugado ao j� existente.*
>- *Princ�pio da Substitui��o de Liskov. Objetos derivados ou tipos devem ser subistitu�veis pelo seu tipo base. Para Derick, essa � a vers�o mais focada do princ�pio Aberto-Fechado.*
>- *Princ�pio de Segrega��o de Interfaces. Um cliente n�o deve ser for�ado a depender de interfaces que n�o usa. O problema � que n�o existem interfaces expl�citas no JavaScript, mas existem formas de contornar isso.*
>- *Princ�pio de Invers�o de Depend�ncias. Consiste em dois conceitos, abstra��o, que define que n�s devemos depender de abstra��es, n�o de implementa��es concretas e propriedade, que define que a implementa��o de baixo n�vel deve depender de conceitos de alto n�vel.*

#### Refer�ncias

[Princ�pios SOLID de design para JavaScript](https://www.infoq.com/br/news/2014/02/solid-principios-javascript/)