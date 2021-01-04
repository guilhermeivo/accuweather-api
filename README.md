<div align="center">
    <h1>:warning: EM DESENVOLVIMENTO :warning:</h1>
</div>

<br />

## 💻 Sobre o projeto

:cloud: AccuWeather API - aplicativo para metereologia.


<div align="center">
    <img src="https://github.com/guilhermeivo/accuweather-api/blob/master/.github/pageWeather.JPG" alt="pageWeather" title="pageWeather" />
</div>

# :scroll: Sumário

- [Funcionalidades](#⚙️-Funcionalidades)
- [Layout](#🎨-Layout)
- [Tecnologias](#computer-tecnologias)
- [Como rodar o projeto](#construction_worker-como-rodar-o-projeto)
    - [Baixando o projeto](#computer-baixando-o-projeto)
    - [Configurando o projeto](#wrench-configurando-o-ambiente)
    - [Rodando o projeto](#computer-rodando-o-projeto)
        - [Projeto](#Projeto)

## ⚙️ Funcionalidades

- [x] Dados meteroelogicos:
    - [x] previsão de 12 horas
    - [] previsão de 5 dias
    - [] condições atuais

# :computer: Tecnologias

Este projeto foi realizado usando as seguintes tecnologias:

<ul>
  <li><a href="https://nodejs.org/en/docs/">NodeJs</a></li>
  <li><a href="https://www.javascript.com/">JavaScript</a></li>
  <li><a href="https://sass-lang.com/">SASS</a></li>
</ul>

# :construction_worker: Como rodar o projeto

### :computer: Baixando o projeto

```bash
# Clone o repositório em sua máquina
$ git clone https://github.com/guilhermeivo/accuweather-api.git
```

### :wrench: Configurando o ambiente

<ul>
    <li>Para este projeto é necessário ter instalado em sua maquina o <a href="https://nodejs.org/en/">NodeJs</a>.</li>
    <li>Crie uma conta no <a href="https://developer.accuweather.com/">AccuWeather</a>.</li>
    <ul>
        <li>Pegue o código da API;</li>
        <li>Renomeie o arquivo <code>.env_sample</code> para <code>.env</code>;</li>
        <li>Substitua o texto <code>YOUR_API_KEY_HERE</code> no arquivo .env pelo código da API.</li>
    </ul>
</ul>

### :computer: Rodando o projeto

#### Projeto

```bash
# Vá para a pasta do projeto
$ cd accuweather/

# Instalar dependências
$ npm install

# Executar aplicativo
$ npm start
```

Página web e servidor disponível em: http://localhost:3000/.