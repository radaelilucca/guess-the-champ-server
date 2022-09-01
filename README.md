# Docker instructions:

### - Compose with `prod` variables:

```bash
  yarn docker:compose:prod
```

### - Compose with `local` variables:

```bash
  yarn docker:compose:local
```

# ORM instructions:

ORM scripts are being executed using `node exec`. See scripts folder;

Available scripts:

```js

`db:mig:create <migration-name>`: create migrations;

`db:mig:run:` run migrations;

`db:mig:rb`: rollback last migration;

```

**All ORM scripts needs `.env` file to get database connection config**
