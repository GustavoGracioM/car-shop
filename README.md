# Shop Car

Projeto Shop Car é um projeto do módulo de back-end do curso de desenvolvimenento web da <a href="https://www.betrybe.com/">Trybe</a>. Objetivo do projeto era desenvolver uma aplicação usando os princípios da Programação Orientada a Objetos (POO) para a construção de uma API com CRUD para gerenciar uma concessionária de veículos, utilizando o banco de dados MongoDB.

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) 
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

## Habilidades utilizadas

* Typscript
* NodeJs
* Express
* Docker
* MongoDB
* Programação Orientada a Objetos (POO)

### Instrução de instalação

1. Clone o repositório
* `git clone git@github.com:GustavoGracioM/car-shop.git`

2. Executando  Docker

* Inicialize container docker:
    * `docker-compose up -d`
* Entre no container:
    * `docker exec -it car_shop bash`
* Instale as dependências
    * `npm install`
* Inicialize a aplicação
    * `npm start`
    
# Endpoints:

## POST `/cars`
- O endpoint adiciona um carro ao banco;
- O corpo da requisição deve seguir o formato abaixo:
  ```json
  {
    "model": "Honda Civic Hach",
    "year": 1995,
    "color": "Preto",
    "buyValue": 50000,
    "doorsQty": 2,
    "seatsQty": 2
  }
  ```
- Se algum dado estiver incorreto, o status 400 e uma mensagem de erro serão retornado;

## GET `/cars`
- O endpoint lista todos os carros registrados;

- Caso não tenha nenhum carro cadastrado no banco a requisição retorna um array vazio;

## GET `/cars/:id`
- O endpoint lista um único carro através do seu id;

- É disparado o erro `400` `Id must have 24 hexadecimal characters` caso o id possua menos que 24 caracteres';

- É disparado o erro `404` `Object not found` caso o id possua 24 caracteres, mas seja inválido;

## PUT `/cars/:id`
- O endpoint atualiza um registro de um carro através do seu id;

- O corpo da requisição deve seguir o formato abaixo:
  ```json
  {
    "model": "Honda Civic Hach",
    "year": 1995,
    "color": "Preto",
    "buyValue": 50000,
    "doorsQty": 2,
    "seatsQty": 2
  }

- É disparado o erro `400` `Id must have 24 hexadecimal characters` caso o id possua menos que 24 caracteres';

- É disparado o erro `404` `Object not found` caso o id possua 24 caracteres, mas seja inválido;

- É disparado o erro `400` caso o `body` esteja vazio;
 
## DELETE `/cars/:id`

- O endpoint exclui um registro de um carro através do seu id;

- É disparado o erro `400` `Id must have 24 hexadecimal characters` caso o id possua menos que 24 caracteres';

- É disparado o erro `404` `Object not found` caso o id possua 24 caracteres, mas seja inválido;

## POST `/motorcycles`
- O endpoint adiciona um motocicleta ao banco;
- O corpo da requisição deve seguir o formato abaixo:
  ```json
  {
    "model": "Harley-Davidson V Rod",
    "year": 2006,
    "color": "Preto",
    "buyValue": 70000,
    "category": "Custom",
    "engineCapacity": 2
  }
  ```
- Se algum dado estiver incorreto, o status 400 e uma mensagem de erro serão retornado;

## GET `/motorcycles`
- O endpoint lista todas as motocicletas registrados;

- Caso não tenha nenhum motocicleta cadastrado no banco a requisição retorna um array vazio;

## GET `/motorcycles/:id`
- O endpoint lista uma única motocicleta através do seu id;

- É disparado o erro `400` `Id must have 24 hexadecimal characters` caso o id possua menos que 24 caracteres';

- É disparado o erro `404` `Object not found` caso o id possua 24 caracteres, mas seja inválido;

## PUT `/motorcycles/:id`
- O endpoint atualiza um registro de uma motocicleta através do seu id;

- O corpo da requisição deve seguir o formato abaixo:
  ```json
  {
    "model": "Harley-Davidson V Rod",
    "year": 2006,
    "color": "Preto",
    "buyValue": 70000,
    "category": "Custom",
    "engineCapacity": 2
  }

- É disparado o erro `400` `Id must have 24 hexadecimal characters` caso o id possua menos que 24 caracteres';

- É disparado o erro `404` `Object not found` caso o id possua 24 caracteres, mas seja inválido;

- É disparado o erro `400` caso o `body` esteja vazio;
 
## DELETE `/motorcycles/:id`

- O endpoint exclui um registro de uma motocicleta através do seu id;

- É disparado o erro `400` `Id must have 24 hexadecimal characters` caso o id possua menos que 24 caracteres';

- É disparado o erro `404` `Object not found` caso o id possua 24 caracteres, mas seja inválido;

# Teste

- Digite no terminal o comando `npm run test:dev`

- Digite no terminal o comando `npm run test:coverage`

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
