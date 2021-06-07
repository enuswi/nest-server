# 概要

## 検討事項

- ORM
  - TypeORM
    - ormconfig.jsonを環境ごとに作りたい
- build
  - githubactions使う
- api

- swagger
  - tsoaによる記述?


```
$ cd sample-project


$ yarn build
$ npx typeorm migration:generate -n xxxxxx

$ yarn build
$ npx typeorm migration:run
```