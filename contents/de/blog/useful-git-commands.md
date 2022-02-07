---
name: 'useful-git-commands'
title: Useful git commands
year: 02 June 2021
id: 'useful-git-commands'
description: |
  Read about git commands that I've been using almost every day and how I am going to provide them as gist
---

When I first learned about GitHub and git, I used to work with common Graphical User Interfaces (GUI's) like Sourcetree, but over the years I got more and more into working directly with git commands using the commandline.

Git is the most popular distributed version control system and ubiquitous in the software world.
This blog post documents git commands I've been using on a daily basis.

The corresponding gist to this blog post can be found on gist.github [My daily commandline](https://gist.github.com/SommerAntje/211fba15489d91d14cf7529205317b57)
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
Delete a feature branch 

```
git branch -D <feature-branch-name>
```
Abort a merge by using git reset --merge or by using git merge --abort.

```
git abort merge
git reset --merge HEAD
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
Force push if you have set up a pre-push or pre-commit hook in the package.json with Husky
as there is no push allowed due to unit tests fail

```
git push --no-verify
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
Install a specific package 

```
yarn add some-package@version
// or
npm install some-package@version
npm install markdown-it@10.0.0
```

Check for outdated dependencies in the package.json

```
npm outdated
```
Add packages to package.json as dev dependency *exact version

```
npm install --save-dev --save-exact
```

Removing a local package from your node_modules directory
Unscoped package
```
npm uninstall <package_name>
```
Scoped package
```
npm uninstall <@scope/package_name>
```
Removing a local package from the package.json dependencies
To remove a package from the dependencies in package.json, use the --save flag. Include the scope if the package is scoped.
Unscoped package
```
npm uninstall --save <package_name>
```
Scoped package
```
npm uninstall --save <@scope/package_name>
```
If you installed a package as a "devDependency" (i.e. with --save-dev), use --save-dev to uninstall it

```
npm uninstall --save-dev package_name
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
Run single unit tests with npm or yarn using jest
without running the whole test suite
*note (jest version must be the same as the build is using)

```
npm run test:unit -t tests/unit/directory/UnitTest.spec.ts
```
```
yarn run jest src/components/ui/UiComponentToTest.spec.ts
```
```
yarn run jest --env=jest-environment-jsdom-sixteen  src/components/ui/UiComponentToTest.spec.ts
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
## nvm

nvm is a version manager for node.js that allows you to quickly install and use different versions of node via the command line.

install the latest node.js version

```
nvm install node 
```
use the default version
note: default versions won't be reseted in a new terminal

```
nvm use default 
```
list already installed node versions

```
nvm ls
```
list available node releases

```
nvm ls-remote
nvm ls-remote | grep -i "latest"        
nvm ls-remote | grep -i "<node_version>" 
```
install a specific node version

```
nvm install <node_version>  
```
install latest LTS release of NodeJS

```
nvm install --lts 
```
install latest npm release only

```
nvm install-latest-npm  
```
switch to the latest available node version

```
nvm use node 
```
switch to a specific version

```
nvm use <node_version_or_alias> 
```
switch to the latest LTS node version

```
nvm use --lts 
```
uninstall a specific Node version

```
nvm uninstall <node_version> 
```
uninstall the latest LTS release of Node

```
nvm uninstall --lts
```
uninstall latest (Current) release of Node

```
nvm uninstall node  
```
path to where a specific Node version is installed

```
nvm which <installed_node_version>  
```
defaults to the latest available node version on a shell

```
nvm alias default node  
```
set default node version on a shell

```
nvm alias default <node_version>  
```
To delete or uninstall nvm remove the $NVM_DIR folder (~/.nvm)

## aws - locate hidden aws directory

Assuming awscli has already been installed.

run aws configure first to create the ~/.aws directory 

```
aws configure
```

As .aws is a hidden directory, you need to write command ls -a. 
This command will provide all hidden folders.

```
ls -a
```

To edit your config or credential file, navigate to the hidden directory using cd command  and 
open the file with a nano editor 

```
 nano config
 or 
 nano credentials
```

## Gist

Gist is a service provided by GitHub that allows developers to easily share code snippets and even IDE settings (for instance for VS Code).

I want to have the commands stored online, so that I am able to look them up at anytime and extend the list on demand.

**How to create a Gist**
Read more on [gist documentation](https://docs.github.com/en/github/writing-on-github/editing-and-sharing-content-with-gists/creating-gists)
