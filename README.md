# Inside Joke

### Music Band Page with dashboard

- [Production Url](https://github.com/RedberryInternship/inside-joke-api-omarijalagania.git) - Inside Joke

### Table of Contents

#

- [Prerequisites](#prerequisites)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Deployment](#deployment)

#

### Prerequisites

- _Node JS @16.X and up_
- _npm @6 and up_

#

### Tech Stack

- [Express @4.00.0](https://expressjs.com/) - Backend framework
- [Mongoose @6.00.0](http://mongodb.com/) - Mongo Database
- [joi @17.0.6](https://github.com/sideway/joi) - Data validation library for JS
- [JsonWebToken @8.0.0](https://github.com/auth0/node-jsonwebtoken#readme) - JSON Web Token (JWT)

#

## Getting Started

#

### Clone repository

#

1\. First of all you need to clone repository from github:

```sh
git clone https://github.com/RedberryInternship/inside-joke-api-omarijalagania.git
```

2\. Next step requires install all the dependencies.

```sh
npm install
```

Before we go to the step 3, set up your environment variables.

#

### How to setup environment variables

#

</hr>
<p style="margin: 10px 0"> We use environment variables heavily in our projects. It allows us to have personalized configurations, but it also makes it easy to deploy our projects without having to store sensitive values in our codebase.</p>

#

#### A short introduction to the config file

Check API documentation:

```sh
http://localhost:4000/api-docs/
```

replace localhost with your own domain...

<p>In the root of project you find example env file looks like this:</p>

```sh
PORT=4000
TOKEN_SECRET=your_secret_word
BASE_URL=http://localhost
MONGO_PROTOCOL=mongodb+srv
MONGO_DATABASE=company
MONGO_PORT=27017
MONGO_USER=user_name
MONGO_PASSWORD=password
MONGO_PARAMS=''
MONGO_CLUSTER=cluster0.zc6oh.mongodb.net
```

<p>Create your .env file in the root of project and copy everything from .env.example to your .env, in your terminal type:</p>

```sh
cp .env.example .env
```

<P>After you copy everything in your env file, replace dummy urls with your own</p>

#

### Register new user

For register new user type command on your terminal, you must me in project directory

---

```sh
npm run user:create
```

after this command in terminal will popup prompt and ask your email and password...if you enter correct email and password your user will be created.

---

#

3\. After installing all dependencies and env setup you can start project

```
 npm start

```

#

### Project Structure

```bash
├─── readme   # readme assets
├─── src      # project source codes
│   ├─── bin       # cli scripts
│   ├─── config   # configs
│   ├─── controllers  # middleware functions
    ├─── models   # models
    ├─── schema   # validations
│   ├─── middlewares  # auth middleware
│   ├─── routes      #routes
    ├─── server.tsx      #main file
- .env.example # env example
- .eslintrc.json   # eslint config file
- .prettierrc.js   # prettier config file
- package.json     # dependency manager configurations
-tsconfig.json     # typescript configuration

```

#

### Deployment

For deploying app first connect to your server via ssh.

```sh
ssh root@your_server
```

After that create apps folder in

```sh
mkdir apps
```

navigate to this folder and pull code from github:

```sh
git clone https://github.com/RedberryInternship/inside-joke-api-omarijalagania.git
```

after cloning app navigate to that folder and run:

```sh
npm ci
```

to install all necessary packages.

In order to run your app on server like service you need to install pm2 tool:

```sh
sudo npm install pm2 -g
```

after installing just run:

```sh
pm2 start node src/server.js
```
