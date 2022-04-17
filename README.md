# Citrus

A Netflix like website made with React js

## Summary

-   [Requirements](#requirements)
-   [Launching project](#launch)
-   [Usage](#usage)
-   [Protections](#protections)
-   [Credits](#credits)

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

## Launching Project <a name=“launch”></a>

In order to launch the project, you'll need to start the back and front and the database.
To start it all at once, you can either use docker:
(Currently broken)

```bash
sudo docker-compose up
```

Or launch everything separetly following the next steps.

#### Database

To initialize the database :

```bash
cd db/ && ./CreateDatabase && cd ..
```

In the middle of this project, it is possible that the programme ask you your computer password or/and the password of your *root* user in your mysql service.

If you haven't, you should first start the mysql service.

#### Backend & Frontend

To launch the project, you'll need two terminals

In the first one, copy and execute the following command:

```bash
cd backend/ && npm run start
```

Then, execute in the second the command below:

```bash
cd frontend/frontend && npm run start
```

## Usage <a name=“usage”></a>

If the project is launch, you can now check it going on any browser using this url:

```bash
http://locahost:3000/
```

## Protections <a name=“protections”></a>

#### Backend

Most routes have been secured using [JWT](https://auth0.com/resources/ebooks/jwt-handbook?utm_source=google&utm_medium=cpc&utm_term=-g-json%20web%20token%20jwt&pm=true&utm_campaign=france-fr-generic-authentication&gclid=CjwKCAjw9e6SBhB2EiwA5myr9hCYxQMhHhzeDR2PWWXMcgb5gUlJbR29bviGTMx4SWXrvUpYc0oVFhoCG6YQAvD_BwE)
The secret have been pushed on the repository in the .env file at the root at the repository and must been changed if you plan to use this project for security reasons.

The only routes that doesn't require a valid token to accept a request are the route:
-   /register
-   /login

Any other router would need a valid token.
Each token produced by the backend *expire* after *1 hour*.

#### Frontend

If the use doesn't not have a valid or non-expired token, he will be redirected to the home page if he tries to go to any route that require a token.

| Route | Require a token | Redirected to |
|-------|-----------------|---------------|
|/login | NO              | No Redirection|
|/register|NO             | No Redirection|
|/      | NO             | If there is a token : /browse|
|/browse| YES             | If there is no token : / |
|/YourAccount| YES | If there is no token: /|
|/[unknown]| NO | / 404|

## Credits <a name=“credits”></a>

#### Programation : Justin Duc

[![linkeding bage](https://img.shields.io/badge/-linkedin-0A66C2?logo=linkedin&style=for-the-badge)](https://www.linkedin.com/in/justin-duc-51b09b225/)
[![git hub bage](https://img.shields.io/badge/-GitHub-181717?logo=GitHub&style=for-the-badge)](https://github.com/Just1truc)
[![mail](https://img.shields.io/badge/-Mail-0078D4?logo=Microsoft-Outlook&style=for-the-badge)](mailto:justin.duc@epitech.eu)
