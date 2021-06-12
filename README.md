# 概要

## 検討事項

- ORM
  - TypeORM
    - ormconfig.jsonを環境ごとに作りたい
- build
  - githubactions使う
- api


```
$ cd sample-project


$ yarn build
$ npx typeorm migration:generate -n xxxxxx

$ yarn build
$ npx typeorm migration:run
```

認証
```
# yarn add @nestjs/passport passport passport-local @nestjs/jwt passport-jwt
# yarn add -D @types/passport-local @types/passport-jwt
```

## 環境構築

### 共通

```
$ docker-compose build
$ docker-compose up -d
```

### api

```
$ docker-compose exec api ash
```

```
# yarn global add @nestjs/cli ← コンテナ作り直すたび必要そう
```

```
# yarn start:dev
```

cf.)
```
$ ... 端末
# ... コンテナ
```