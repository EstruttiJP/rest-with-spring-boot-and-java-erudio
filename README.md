# rest-with-spring-boot-and-java-erudio

[![Docker Hub Repo](https://img.shields.io/docker/pulls/estruttijp/rest-with-spring-boot-erudio)](https://hub.docker.com/repository/docker/estruttijp/rest-with-spring-boot-erudio)

# ConsumingAppWithAngular

Este repositório contém uma aplicação dividida em duas partes principais: um frontend desenvolvido em Angular que consome uma API REST de livros e autenticação, e um backend desenvolvido em Spring Boot 3 com diversas funcionalidades modernas.

## Estrutura do Projeto

### ConsumingAppWithAngular

#### `client`
- **Descrição**: Aplicação Angular que consome a API de livros e autenticação fornecida pelo backend.
- **Principais funcionalidades**:
  - Consumo de endpoints para gerenciamento de livros.
  - Consumo de endpoints para autenticação de usuário.
  - Design feito a partir de componentes do Angular Material.
- **Tecnologias utilizadas**:
  - Angular CLI
  - Angular HttpClient

#### `server`
- **Descrição**: API RESTful desenvolvida com Spring Boot 3.
- **Principais funcionalidades**:
  - RESTful API com suporte a HATEOAS.
  - Suporte a content-negotiation.
  - Configuração de CORS para integração com o frontend.
  - Documentação gerada com Swagger.
  - Testes unitários com Mockito e TestContainers.
  - Autenticação e autorização utilizando JWT e Spring Security.
- **Tecnologias utilizadas**:
  - Spring Boot 3
  - Spring HATEOAS
  - Spring Security e JWT
  - Spring JPA e MySQL para a database
  - Flyway para migrations
  - Mockito e TestContainers para testes unitários
  - Swagger para documentação

### DockerizingMyApplication

- **Descrição**: Contém a mesma aplicação (somente o backend), mas configurada para ser Dockerizada e publicada automaticamente no Docker Hub usando GitHub Actions.
- **Configurações principais**:
  - Docker Compose para orquestração dos serviços.
  - GitHub Actions configurado para construir e lançar imagens no Docker Hub a cada commit.

## Executando o Projeto

### Pré-requisitos
- **ConsumingAppWithAngular**
  - Node.js e Angular CLI para rodar o cliente.
  - Java 18 e Maven para rodar o servidor.

- **DockerizingMyApplication**
  - Docker instalado na máquina local.

### Passos

#### Executando o `ConsumingAppWithAngular`
1. Navegue para a pasta `server` e inicie o backend:
   ```bash
   cd ConsumingAppWithAngular/server/rest-with-spring-boot-and-java-erudio
   ./mvnw spring-boot:run
   ```

2. Em outra janela do terminal, navegue para a pasta `client` e inicie o frontend:
   ```bash
   cd ConsumingAppWithAngular/client
   npm start
   ```

3. Acesse o cliente em `http://localhost:4200` e o backend em `http://localhost:8080`.
