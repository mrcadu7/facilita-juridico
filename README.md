# Facilita Jurídico Test Case

## Introdução
Este projeto foi desenvolvido como parte de um desafio para um processo seletivo ao qual não participei, porém quis fazer de qualquer modo pois achei interessante. O objetivo do desafio era criar uma plataforma para gerenciar clientes de uma empresa de limpeza, utilizando um backend em Node.js com PostgreSQL como banco de dados, e um frontend em React.

## Parte 1
### Funcionalidades
- Listar clientes e filtrar com base nas informações cadastradas
- Cadastrar novos clientes

### Banco de Dados
O banco de dados PostgreSQL é utilizado para armazenar as informações dos clientes, incluindo nome, email, telefone.

## Parte 2
### Otimização de Rotas
Além do gerenciamento de clientes, foi implementada a otimização de rotas para maximizar a eficiência na visitação dos clientes. Foi utilizado um algoritmo 2opt para calcular a rota partindo da empresa (0,0) e que passa pela localização de todos os clientes cadastrados no banco de dados, retornando à empresa no final. A rota é calculada para ter a menor distância possível.

### Funcionalidades Adicionais
- Botão na tela de clientes que, ao ser clicado, abre uma modal e mostra a ordem de visitação dos clientes na rota calculada
- Cadastro e visualização das coordenadas X e Y dos clientes da empresa, para o calculo da rota otimizada

### Banco de Dados
As coordenadas X e Y dos clientes são armazenadas no banco de dados PostgreSQL.

## Instalação
Para simplificar a instalação, o projeto está dockerizado. Basta executar o comando `docker-compose up` para criar os containers. Antes disso, é necessário criar um arquivo `.env` com os seguintes valores:

```.env
POSTGRES_USER=SEUUSUARIO
POSTGRES_PASSWORD=SUASENHA
POSTGRES_DB=NOMEDODB
```

Para facilitação, na pasta raiz do projeto está criado um model `.envmodel`, basta acrescentar suas credencias e renomear o arquivo. *LEMBRE-SE DE ACRESCENTAR AO `.gitignore` depois*

Isso é necessário para estabelecer a conexão com o banco de dados.

## Utilização
Após a instalação, o site funciona conforme as especificações do desafio, permitindo o gerenciamento de clientes e a otimização de rotas para visitação.

## Considerações Finais
O projeto atende aos requisitos do desafio, incluindo consultas em SQL na API e evitando a utilização de ORMs.
Como observação de funcionalidades que eu implementaria a mais nesse desafio, eu listaria:

- Testes
- Autenticação e Autorização
- CRUD completo

---

Este readme fornece uma visão geral do projeto, incluindo suas funcionalidades, banco de dados utilizado, instruções de instalação e utilização. Se precisar de mais alguma informação específica, por favor me avise!