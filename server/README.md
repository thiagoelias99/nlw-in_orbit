<h1 align="center">NLW - In.Orbit - Node Server</h1> 

<p align="center">
<a href="https://nodejs.org/">
  <img src="https://img.shields.io/badge/Node.js-000000?style=for-the-badge&logo=node.js&logoColor=339933" />
</a>
<a href="https://www.typescriptlang.org">
<img src="https://img.shields.io/badge/TypeScript-black?style=for-the-badge&logo=typescript" />
</a>
<a href="https://www.fastify.io/">
  <img src="https://img.shields.io/badge/Fastify-000000?style=for-the-badge&logo=fastify&logoColor=white" />
</a>
<a href="https://www.postgresql.org/">
  <img src="https://img.shields.io/badge/PostgreSQL-000000?style=for-the-badge&logo=postgresql&logoColor=336791" />
</a>
<a href="https://github.com/colinhacks/zod">
  <img src="https://img.shields.io/badge/Zod-black?style=for-the-badge&logo=zod"/>
</a>
<a href="https://www.docker.com/">
  <img src="https://img.shields.io/badge/Docker-000000?style=for-the-badge&logo=docker&logoColor=2496ED" />
</a>

</p>

### Introduction
This app was proposed in a NLW event from [RocketSeat](https://www.rocketseat.com.br/) and its objective is to develop an application where a user can register and track goals.   
This server is used as backend application.

### Installation
#### Pre-Requisites
- [NodeJs](https://nodejs.org/en) version 20 or greater.
- [Docker](https://www.docker.com/) optionally for database.

#### Installation
- Download or clone this repository.
1. Run cmd `npm install` to install node files.


#### Running in development mode
1. Create a copy and rename ***.env.example*** to ***.env.development***
2. Run cmd `npm run docker` to create docker container with Postgresql.
3. Run cmd `npm run migrate` for database sync.
    - This will connect to database and automatic run the migrations.
4. Optionally run `npm run seed` to seed the database with sample data
5. Run cmd `npm run dev` to start in development mode.
    - Runs default in port **localhost:3333**
6. Optionally use **Thunder Collection** file in **utils** to make requests to API.
