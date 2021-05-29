---
name: 'useful-git-commands'
title: Useful git commands
year: 30 May 2021
id: 'useful-git-commands'
description: |
  Read about git commands that I've been using almost every day and how I am going to provide them as gist
---
This blog post documents the commands I've been using almost every day and how I am also going to provide them as gist
on [gist.github](https://gist.github.com)
## Technologies and tools that I've been using

- git commands
- npm/yarn commands
- [gist.github](https://gist.github.com)

When I first learned about GitHub and git I used to work with common Atlassian tools like Sourcetree, but over the years I got more and more into working directly over the commandline. 

I usually work with the terminal in VS Code (IDE).


## git

// git intro

**Useful git commands:**

```
gs = git status
```
```
git log 
git log --oneline (short hash)
```
```
git remote update origin --prune
```
Für lokale branches die gemerged sind:
```
git branch --merged origin/master | grep -v \* | xargs git branch -D 
```
```
git remote -v (neuen branch erstellen)
```
```
git checkout -b AT-131-player-search
```
```
git push --set-upstream origin AT-131-player-search
```
```
git restore src/components/Search.vue
```
```
git pull —rebase
```
—— master behind in feature branch mit conflicts fallbeispiel
```
git reset --hard origin/AT-123
```
```
git merge origin/master
```
```
git status
```
```
git add .
```
```
git commit
```
```
gitlazy
```

## npm

**Useful npm commands**

// npm intro

// what is npx 

```
rm -rf node_modules && npm install
```
```
npx vue-cli-service lint (hiermit direkt packages ausführbar ohne package.json ändern zu müssen)
```
```
npx run vue-cli-service lint --no-fix
```
```
npx run vue-cli-service lint  --fix --fix-type suggestion --fix-type problem
```
```
npx vue-cli-service lint --max-warnings=0 (auto fix listing, aufruf straight aus dependency)
```
```
$ npm install --save-dev --save-exact (keine Dächer)
```
```
$ npm install --save-dev --save-exact eslint-config-airbnb-base
```
```
$ npm install --save-dev --save-exact eslint-plugin-vue
```

Run single unit test:

```
npm run test:unit -t tests/unit//components/Search.spec.ts
```
```
npm install flush-promises --save-exact --save-dev
```
```
npm i = npm install
```
```
npm run check-updates
```
```
npm outdated
```
```
npm install --save-exact --save-dev 
```

## Gist

**How to create a Gist**

find all commands on my gist here