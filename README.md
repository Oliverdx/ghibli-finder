[![Netlify Status](https://api.netlify.com/api/v1/badges/dcb72b5c-5cc1-44c7-9d5f-08f9e4506070/deploy-status)](https://app.netlify.com/sites/ghiblifinder/deploys)

# Ghibli Finder

Aplicação que mostra os filmes do Studio Ghibli disponibilizadoss pela [API pública](https://ghibliapi.herokuapp.com/)

## Um pouco sobre o projeto

Nesse projeto utilizei as tecnologias listadas anteriormente devido a dominância que tenho de cada uma das tecnologias empregadas e afim de demonstrar o que poderia fazer utilizando-as, sendo o NextJS a escolha para o framework principal por possibilitar uma configuração facilitada para projetos iniciados do zero, sua optimização ao fazer o build do projeto assim como criação de páginas que possui um sistema simplificado de criação, também poderia ressaltar que apesar de não ter usado, a possibilidade de criação e facilidade em criar uma API, onde esta poderia ser utilizada para conectar facilmente a um banco de dados ou servir de client para API externa, nesse caso preferi não utilizar devido ao tempo gasto para criação da criação da aplicação.
Sobre o React, Sass e Typescript poderia dizer que a facilidades que os três trazem na criação de uma aplicação ajudam bastante, apesar de não estar utilizando aqui em sua plenitunde as tecnologias ressalto que as três aliadas a um linter (Eslint) facilitam bastante na hora do desenvolvimento pois demonstram erros no próprio desenvolvimento que podem acarretar em problemas futuros ao reutilizar componentes, funções ou até mesmo estilos declarados de forma errônea 

## Iniciando o projeto

### Instruções de instalação

Abra o terminal e navegue até a pasta do projeto, fazendo as instalação das dependencias necessárias utilizando o comando: 

```bash
npm install
```

Após o terminal finalizar a instalação de todas as dependencias utilizar o comando de build para gerar uma versão optimizada da aplicação

```bash
npm run build
```

### Iniciando o Servidor

```bash
npm start
```

Abra a o browser na URL [http://localhost:3000](http://localhost:3000) para visualizar o resultado.

### Outros comando disponíveis

Iniciar o projeto em modo de desenvolvimento com hot reload
```bash
npm run dev
```

Rodar o Lint

```bash
npm run lint
```

## Tecnologias utilizadas

* [Babel](https://babeljs.io/)
* [NextJS](https://nextjs.org/)
* [React](https://reactjs.org/)
* [Sass](https://sass-lang.com/)
* [Typescript](https://www.typescriptlang.org/)
* [Eslint](https://eslint.org/)

## Para o futuro

- [ ] Melhorias de Design;
- [ ] Correção das imagens (remoção dos placeholders), capturando as imagens corretas de cada filme;
- [ ] API client para fazer correções e acrescimos de novas funcionalidades na aplicação;
- [ ] Possibilidade de edição do conteúdo, salvando as edições em banco de dados noSQL (MongoDb);
- [ ] Campo de busca para facilitar a busca por filmes
- [ ] Testes Unitários
- [ ] PWA.

## Author

Feito sob muito café por [Vanderlei Oliveira](https://oliverdx.com.br)
