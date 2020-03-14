### Node.js homework 2

#### Start

Install the dependencies

```bash
npm install
```

#### Start server

To run server:

```bash
npm start
```

#### Lint

To run linter

```bash
npm run lint
```

### Run database

Run postgres (on mac):
```bash
pg_ctl -D /usr/local/var/postgres start
```

Create user (if you don't have one) with name `root` and no password:
```bash
su - postgres
createuser --interactive --pwprompt
```

Create database if you don't have one:
```bash
createdb nodejs_homework_db
```

Run migration:
```bash
```