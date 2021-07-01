# Api Mais Saúde
## Uma api que faz cadastros de medicos, bem como buscas e atualizações
### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é vai precisar do docker [Docker](https://www.docker.com/get-started), caso esteja utilizando alguma distribuição linux terá que instalar manualmente o docker compose [Docker_Compose](https://docs.docker.com/compose/install/).

### 🎲 Executando o Projeto

```bash
# Clone este repositório
$ git clone <https://github.com/savio04/NestJs.git>

# Acesse a pasta do projeto no terminal/cmd
$ cd NestJs/project

# Instale as dependências
$ npm install

# Na raiz do projeto (NestJs/project) crie um arquivo .env e copie tudo que está no arquivo .env.exemple
Outra opção, é renomear o arquivo .env.exemple para .env

# Inicie os containers utilizados no projeto
$ docker-compose up -d
ou
$ sudo docker-compose up -d 

```
### Faça a conexão com o container do banco pela a sua ferramenta de administração de banco de dados
![alt text](https://github.com/savio04/NestJs/blob/main/project/github_assets/step-1.jpeg)
### Crie o banco chamado doctors na sua ferramenta de administração de banco de dados
![alt text](https://github.com/savio04/NestJs/github_assets/step-2.jpeg?raw=true)

```bash
# Reinicie a aplicação
$ docker-compose restart
ou
$ sudo docker-compose restart

# Verifique se a aplicação está rodando corretamente 
$ docker logs saudemais_api -f
ou
$ sudo docker logs saudemais_api -f

# Execute o seguinte comando para preencher a tabela de especialização dos médicos
$ npm run seed

# O servidor inciará na porta:3000 - acesse <http://localhost:3000/api> para testar a api

```
##### 🚧  Api Mais Saúde 🚀 Em construção...  🚧
