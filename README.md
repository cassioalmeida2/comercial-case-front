## Development Server

O servidor será iniciado em `http://localhost:3000`
<br >
O projeto se encontra no Amplify da AWS para melhor visualização do Case junto ao código neste link: https://master.dmlszvv1hv4kf.amplifyapp.com/
<br >
OBS: A versão do node que foi utilizada para rodar o projeto é a v20.11.1
<br>

```bash
# Instalar Dependências do Projeto
yarn install

# Rodar Servidor localhost:3000
yarn run dev

```

# DataStone Comercial Case

## Visão Geral / Tecnologias utilizadas
Projeto Case Desenvolvido em Nuxt.js/Vue.js 3 utilizando composition API, Vuetify, SCSS, Padrão BEM de CSS, Atomic Design, Conceitos de Clean Code. o Nuxt.js agrega muito ao Vue.js em muitos pontos como na questão de rotas facilitadas, SSR (Server Side Render).
Projeto separado em 3 telas de cadastro do Produto, Cliente e Vincular para juntar Cliente e Produto mostrando a lista de clientes e ao clicar exibe um modal com os produtos registrados no sistema.
Modal

<br>

## Arquitetura
Para organizar o projeto foi utilizado a Metodologia de Design e Arquitetura "Atomic Design" de Brad Frost.
Este modelo nos permite criar uma organização do Projeto muito coesa, separando as responsabilidades e componetizando
de uma melhor forma nossa aplicação.
Para atender este cenário organizamos dentro da pasta de componentes as seguintes pastas:

### ions
Nessa pasta fica a base dos componentes, a parte mais genérica como botões, imagem, card, como estamos utilizando o Vuetify
nessa camada declaramos os componentes que queremos utilizar dele e como queremos.

### atoms
A pasta "atoms" está um passo acima utilizando os componentes ions para criar componentes básicos que são mais específicos como 
um botão em um formato, cor e aspecto pré-definido que aceita propriedades e que será utilizado em componentes maiores.
### molecules

Na pasta "molecules" é onde ficam os componentes que são combinados para gerar outros componentes mais específicos e complexos,
como um form com campos de texto labels e botões, um Card com informações específicas e com outros elementos complementares.
### organisms

Na pasta "organisms" são criados os componentes que usam vários componentes mais complexos do molecules, começam ser utilizados
para definir seções do sistema que tratam um assunto específico e que necessitam desses componentes sempre juntos.
### templates

A pasta "templates" é onde fica o modelo da página montado porém sem os dados de exibição, o template será chamado na página passando as props necessárias para atender a visualização.

### pages
Fora da pasta de componentes deixamos nossa pasta "pages" que no padrão do Nuxt.js/Vue.js fica na raiz do projeto e também participa dessa composição utilizando da pasta layouts que define o layout da página geral (fora o conteúdo).
Na pasta "pages" estão criadas as nossas páginas que são responsáveis por trabalhar os dados e passar
via props aos templates que são chamados nas mesmas.





