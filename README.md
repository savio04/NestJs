# Api Mais Saúde
## Uma api que faz cadastros de medicos, bem como buscas e atualizações
### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é vai precisar do docker [Docker](https://www.docker.com/get-started), caso esteja utilizando alguma distribuição linux terá que instalar manualmente o docker compose [Docker_Compose](https://docs.docker.com/compose/install/).

### 🎲 Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone <https://github.com/savio04/NestJs.git>

# Acesse a pasta do projeto no terminal/cmd
$ cd nestjs/project

# Instale as dependências
$ npm install

# Inicie os containers utilizado no projeto
$ docker-compose up -d
ou
$ sudo docker-compose up -d

# Execute o seguinte comando para preencher a tabela de especialização dos médicos
$ npm run seed

# Execute a aplicação
$ npm run start

# O servidor inciará na porta:3000 - acesse <http://localhost:3000/api> para testar a api


```
##### 🚧  Api Mais Saúde 🚀 Em construção...  🚧
