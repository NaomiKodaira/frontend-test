

# Luizalabs Frontend Challenge

### Objetivo
Desenvolver uma aplicação de listagem e detalhe de personagens de quadrinhos.

#### Requisitos
- Deve ser uma SPA “single page application” (dar preferencia ao React);
- Não utilizar bibliotecas de UI como: bootstrap, semantic-ui, antdesign e etc;
- Utilizar API da Marvel (https://developer.marvel.com/docs);
- Disponibilizar em uma URL pública do projeto rodando para avaliação;
- Disponibilizar código em repositório Git de sua preferência, commitando cada fase do seu processo de desenvolvimento;
- Seguir layout da pasta `./assets`, respeitando as páginas, features e componentes (não será avaliado “pixel perfect”).

#### Requisitos funcionais
- Página de listagem de personagens (home):
  - Exibir os 20 primeiros resultados da API;
  - Permitir ordenação por nome do personagem;
  - Permitir filtrar por nome, pelo campo de busca;
  - Permitir mostrar apenas os personagens favoritos;
  - Permitir o usuário favoritar/desfavoritar até 5 personagens;
- Página de detalhe do personagem:
  - Exibir dados do personagem;
  - Exibir últimos 10 quadrinhos lançados deste personagem (onSaleDate);
  - Permitir o usuário favoritar/desfavoritar (dentro do limite de 5).

#### `Bônus (não obrigatório)`
- Adicionar paginação a listagem para exibir além dos 20 personagens iniciais;
- Persistir os dados de favoritos (para manter os dados após o reload da página);
- Layout responsivo;
- Utilização de ES6+;
- Utilização de ferramentas para garantir a qualidade do código;
- Teste e2e;
- CI/CD.

### Dicas
- Valorizamos muito testes em nosso processo de desenvolvimento;
- Aqui no LuizaLabs todos os desenvolvedores podem participar do processo de avaliação técnica então oriente os avaliadores a como instalar, testar e executar seu código.

### Como rodar
O aplicativo está no ar na segunte url: [http://d3cqkrwpxsu3rb.cloudfront.net/](http://d3cqkrwpxsu3rb.cloudfront.net/)

Caso queria rodar localmente, após fazer o clone do repo, basta rodar os comandos padrões:

``` shell
$ yarn install
$ yarn start
```

### Alterações feitas para adequar a API
- A imagem dos heróis na página de detalhes não está configurada para aparecer, isso pois a API provida não traz imagens do herói com fundo transparente e o layout com uma imagem com background quadrada fica muito feio
- Ao invés de filmes na página de descrição foi utilizado as séries que o herói participou
- Rating também não é algo que a API possui, para que o rating de todos os heróis não fosse sempre um `Math.random()` foi somado os números do id do herói depois tirado o módulo desse número por 10 e dividido por 2, isso para poder mostrar que o componente aceita ratings quebrados

<br/>
<br/>

<p align="center"><img src="luizalabs.jpeg" width="80" height="80"/></p>
<p align="center">
<sub>Gente. Inovação e Código. <a href="https://luizalabs.com">Luizalabs</a></sub>
</p>
