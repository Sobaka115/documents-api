## Pre-installation

 1. Setup PostgreSQL 12 or higher.
 2. Create database with some name or `otus_documents_db`
 3. Setup Node.js v20

## Clone project

```bash
$ git clone git@otusteam.gitlab.yandexcloud.net:devops/devops-otus-app/documents-api.git
```

 
## Installation

```bash
$  npm  install
```

## Prepare environment


```bash
$  cp .env.example .env
```
  
  Replace values in `.env` according to your PostgreSQL connection settings.

## Build the app

```bash
$  npm  run build
```

## Running the app

```bash

# development

$  npm  run  start

# watch mode

$  npm  run  start:dev

# production mode

$  npm  run  start:prod

```
