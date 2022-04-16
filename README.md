# Citrus

A Netflix like website made with React js

## Summary

-   [Requirements](#requirements)
-   [Launching project](#launching)
-   [Usage](#usage)
-   [Protections](#protections)
-   [To improve](#To_improve)

## Requirements <a name="requirements"></a>

Here are the required technologies

| Technologies | Part | Links |
|--------------|------|-------|
|Docker        |Launch|[install](https://docs.docker.com/get-docker/)|
|Node          |Both|[install](https://nodejs.org/en/download/)|
|npm           |Both|By node installation|
|Typescript    |Front|[install](https://www.typescriptlang.org/download)|
|React 1.16.0  |Front|From Script|
|Express       |Back   |[install](https://expressjs.com/fr/starter/installing.html)|
|MySql      | Database | [install](https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/)|

In order to install the dependencies that are required for the project, please use the following command at the root of your repository :

```bash
cd frontend/frontend && ./DownloadDependencies && cd ../../backend && ./DownloadDependencies && cd ..
```

## Launching Project <a name=“launching”></a>

In order to launch the project, you'll need to launch the back and front and the database.
To launch it all at once, you can either use docker:

```bash
sudo docker-compose up
```

Or launch it all with the following command it everything is installed

```bash
cd db/ && ./CreateDatabase && cd .. && cd backend/ && npm run start && cd ../frontend/frontend && npm run start && cd ../../
```

In order to launch everything separetly, you can do it, following the next steps.

#### Database

You'll first need to initialize the database.
In order to do so, launch the following command at the root of the repository.

```bash
cd db/ && ./CreateDatabase && cd ..
```
