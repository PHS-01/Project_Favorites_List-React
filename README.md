# React Projeto

Este é um projeto incrível que faz coisas incríveis.

## Links
- [GitHub Pages](https://PHS-01.github.io/Project_Favorites_List-React)

# 1. Introdução
A proposta para a utilização do hook `useCallback` partiu da ideia de um sistema de favoritos, onde o usuário pode escolher qualquer um dos itens disponíveis e armazená-los na lista de favoritos, que também permite a exclusão e a adição de novos itens.

Além disso, o propósito desse hook no sistema é evitar que a função `addItem` precise ser reinicializada toda vez que um item for anexado. O `useCallback` será responsável por armazenar a função `addItem`. Um dos membros do grupo também sugeriu utilizá-lo para garantir que os elementos escolhidos pelo usuário sejam preservados, pois, ao renderizar a página, seja ao navegar para outra ou apenas ao atualizar, a lista de favoritos costumava ser resetada, resultando na perda dos itens.

# 2. Como acessar o site
O primeiro passo seria fazer o download do código que está no repositório: `url do projeto`.

Abra um terminal e digite o seguinte comando:
```bash
git clone url_do_projeto
```
Após ter feito o download do projeto, no terminal de comando entre na pasta e baixe as dependências do projeto, utilizando o comando:
```bash
npm install
```
Pronto! Agora está apto para inicializar o projeto.

# 3. Hooks utilizados (useContext e useCallback)
O hook `useCallback` do React é usado para memorizar funções, evitando que elas sejam recriadas em cada renderização do componente. Ele é útil para otimizar a performance, especialmente em componentes que dependem de funções passadas como props para componentes filhos ou que são utilizados em efeitos (com `useEffect`).

A sintaxe básica é:
```javascript
const memoizedCallback = useCallback(() => {
    // lógica da função 
}, [dependências]);
```
A função só será recriada quando uma das dependências mudar. Isso ajuda a evitar re-renderizações desnecessárias, melhorando a performance em componentes que fazem uso intensivo de renderizações.

Uma breve explicação de outro hook utilizado, o `useContext`, permite acessar o contexto em componentes React. Ele simplifica a leitura de valores de contexto. Logo, basta importar o contexto e chamá-lo dentro do componente:
```javascript
const value = useContext(MyContext);
```
Isso facilita a gestão de estados globais, como temas ou dados do usuário, promovendo uma melhor organização e evitando a "prop drilling".

# 4. React-Router-Dom
O `react-router-dom` é uma biblioteca essencial para gerenciar o roteamento em aplicações React. Ela permite que você defina diferentes rotas para diferentes componentes, facilitando a navegação entre páginas sem recarregar a aplicação.

## Principais características:
- **Definição de Rotas**: Você pode usar o componente `<Routes>` e `<Route>` para especificar quais componentes devem ser renderizados com base no caminho da URL.
- **Navegação**: A biblioteca oferece o componente `<Link>` para facilitar a navegação entre rotas, substituindo a tag `<a>` padrão e evitando re-carregamentos de página.

Essencial para criar uma experiência de usuário fluida em aplicações React, o `react-router-dom` ajuda a estruturar a navegação de forma eficiente.

# 5. Uso do hook useCallback no código
Vamos começar pelo uso do hook `useCallback`. Estamos utilizando-o no arquivo `MyContext`, que faz a ‘ligação’ entre os componentes `FavoriteList` (nosso dropdown, que é basicamente a lista de favoritos), onde cada elemento possui um botão para deletá-lo da lista. O outro componente, chamado `List`, tem a função de exibir uma lista de produtos ou outros itens que podem ser adicionados aos favoritos.

Os valores são fixos, pois não estamos utilizando um banco de dados e cada elemento da lista também tem um botão que permite adicionar esse item à lista de favoritos. Com isso, depois desse breve resumo do sistema e seus componentes, vamos agora analisar um por um.

Vamos começar pelo arquivo `MyContext`:

Não entraremos a fundo sobre o hook `useContext`, então vamos analisar apenas a constante `itens` e suas funções específicas: a de adicionar um item à lista (`addItem`) e a de deletar um item específico da lista (`deleteItem`). Todas essas funções poderiam ser implementadas sem o uso do `useCallback`, mas, toda vez que a página fosse renderizada, essas funções seriam criadas novamente. Nesta perspectiva, ao longo prazo, isso poderia acarretar uma perda de desempenho na interface.

Portanto, utilizamos o `useCallback` para criar a função apenas uma vez, e ela só será renderizada quando suas dependências mudarem.

Agora, passando para o componente `List`, que está localizado no arquivo `FavoriteList`. Ele tem a função de pegar um array de informações. Neste caso, temos a constante `datas`, um nome genérico que contém um array de arrays com os atributos de cada data/produto. A seguir, temos o `return`, que gera uma lista de produtos em HTML, no qual a função `datas.map` é uma forma de percorrer o array, semelhante ao `foreach` do PHP e ao `for` tradicional. Assim, podemos dizer que é o equivalente ao `foreach` no React.

Por último, mas não menos importante, temos o nosso componente ‘lista de favoritos’, localizado no arquivo `FavoriteList`. Ele tem a função de retornar um código HTML com a lista de favoritos. Nesse caso, temos a constante `items`, que foi passada pelo `useMyContext` (não vamos entrar em detalhes sobre isso), e outra constante chamada `isDropdownOpen`, que controla o estado do nosso dropdown, definindo se ele está aberto ou fechado. Assim, de maneira semelhante ao código anterior, ele percorre o array `items` e cria cada elemento em HTML.
