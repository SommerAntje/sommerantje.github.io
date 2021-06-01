---
name: 'useful-git-commands'
title: Useful git commands
year: 01 June 2021
id: 'useful-git-commands'
description: |
  Read about git commands that I've been using almost every day and how I am going to provide them as gist
---

When I first learned about GitHub and git, I used to work with common Graphical User Interfaces (GUI's) like Sourcetree, but over the years I got more and more into working directly with git commands using the commandline.

Git is the most popular distributed version control system and ubiquitous in the software world.
This blog post documents git commands I've been using on a daily basis.

The corresponding gist can be found on  [gist.github](https://gist.github.com)
## Used technologies and references 

- git commands
- npm/yarn commands
- [gist.github](https://gist.github.com)
- [git documentation](https://git-scm.com/docs)
- [npm documentation](https://docs.npmjs.com)

**Here are git commands I use almost every day:**

Show the working tree status

```
git status
```
Show commit logs

```
git log 
git log --oneline
```
Update local repository with the latest status of merged and deleted branches

```
git branch --merged origin/master | grep -v \* | xargs git branch -D 
```
```
git remote update origin --prune
```
Pass --verbose to git-fetch and git-merge

```
git remote -v
```
Create a new feature branch

```
git checkout -b new-feature-branch-name
```
Push a feature branch

```
git push --set-upstream origin new-feature-branch-name
```
Restore a file

```
git restore src/components/componentToBeRestored.vue
```
Fetch from and integrate with another repository or a local branch

git pull runs git fetch with the given parameters and calls git merge to merge the retrieved branch heads into the current branch. With --rebase, it runs git rebase instead of git merge.

```
git pull
git pull —rebase
```
Reset current HEAD to the specified state

```
git reset --hard origin/Feature-branch-name
```

Merge master into your feature branch

```
git merge origin/master
```
Undo a Pushed Merge

```
git revert -m 1 <merge-commit-hash>
```
Revert an existing commit

```
git-revert <commit-hash>
```
Apply changes introduced by an existing commit

```
git cherry-pick <commit-hash>
```

List of  branches in the remote repository

```
git branch -a
```
List create, or delete branches

```
git branch
```
Add file contents to the index

```
git add .
```
Record changes to the repository

```
git commit
```

## npm

npm is the world's largest Software Library (Registry)
and also a software Package Manager and Installer.

npm includes a CLI (Command Line Client) that can be used to download and install packages.
Read more on [npm cli commands documentation](https://docs.npmjs.com/cli/v7/commands)

**Here are my favorite npm cli commands**

Create a package.json file

```
npm init
```
Install packages from package.json

```
npm i
npm install
```
Check for package updates

```
npm run check-updates
```
Check for outdated dependencies in the package.json

```
npm outdated
```
Add packages to package.json as dev dependency *exact version

```
npm install --save-dev --save-exact
```
Remove and reinstall node modules

```
rm -rf node_modules && npm install
```
Clear a cache in npm

```
npm cache clean
npm cache clean --force  
```
Run single unit test

```
npm run test:unit -t tests/unit/directory/UnitTest.spec.ts
```
Flush all pending resolved promise handlers. Useful in tests

```
npm install flush-promises --save-exact --save-dev
```
**npx**

Run a command from a local or remote npm package directly, without having to change the package.json
Read more on [npx commands documentation](https://docs.npmjs.com/cli/v7/commands/npx)


Make vue-cli-service serve lint

```
npx vue-cli-service lint 
```
Make vue-cli-service serve use --no-fix for lint

```
npx run vue-cli-service lint --no-fix
```
Make vue-cli-service serve use --fix-type suggestion for lint

```
npx run vue-cli-service lint  --fix --fix-type suggestion --fix-type problem
```
Make vue-cli-service serve use auto fix listing for lint

```
npx vue-cli-service lint --max-warnings=0 
```

## Gist

**How to create a Gist**

find all commands on my gist here