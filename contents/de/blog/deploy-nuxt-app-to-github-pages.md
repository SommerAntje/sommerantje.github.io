---
name: 'deploy-nuxt-app-to-github-pages'
title: Deploy a nuxt app to GitHub Pages and host your website
year: 05 May 2021
id: 'deploy-nuxt-app-to-github-pages'
description: |
  Deploy a nuxt app to GitHub Pages by creating a workflow through GitHub actions and host your website using a custom domain
---
Given you want to host a web application made with nuxt.js that includes a blog, which dynamically requests each post
to GitHub and creates a static version in the build (pre-rendering SPA) - that also should be served from a custom domain other than the default github.io preset.

This blog post documents the steps needed to be exectued in order to deploy such a web app to GitHub Pages.
## Technologies that I've been using

- A pre-rendering SPA _nuxt.js, vue.js and markdown_
- GitHub Pages
- [Paeceiris GitHub Actions](https://github.com/peaceiris/actions-gh-pages)


## Create a User Page Site on GitHub Pages

I wanted to host my tech blog as a website, but being also allowed to publish my blog posts at anytime without much effort by using a continuous deployment workflow, which is why I choosed to use GitHub actions and to host my blog on GitHub Pages as user page site.

I already had my blog constantly developed in a private GitHub repository, so I just needed to make the repository public, as I am using GitHub free, where a public repository is required, if you want to create a user page site for your account, **GitHub entitles a user to host at least one User page site per account for free.**

To have a user page site created all I had to do afterwards, was changing the repository name under the settings tab from the project name to <inline-code>your-user-account.github.io</inline-code>, which represents a repository dedicated to the GitHub page files, where now my tech blog is stored in. 



## Configure a continous deployment workflow with GitHub Actions

As I want my content to be published automatically everytime I update the source code, I introduced a continous deployment workflow to my project using [Paeceiris GitHub Actions](https://github.com/peaceiris/actions-gh-pages).


<image-responsive
  imageURL="blog/deploy-nuxt-app-to-github-pages/_main.jpg"
  :width="'952'"
  :height="'509'"
  alt="create user site" />


This workflow enables me to deploy a static site to GitHub Pages with [Static Site Generators](https://jamstack.org/generators/) and also creates a new gh-pages branch automatically, as soon as the corresponding action has been executed.

To set up a workflow for my muxt project I had to create a **cd.yml** file inside of my repository like the following

<inline-code>/.github/workflows/cd.yml</inline-code>

```
  name: cd

  on: 
    push:
      branches:
        - master
  jobs:
    cd:
      runs-on: ${{ matrix.os }}

      strategy:
        matrix:
          os: [ubuntu-latest]
          node: [14]

      steps:
        - name: Checkout
          uses: actions/checkout@master

        - name: Setup node env
          uses: actions/setup-node@v2.1.2
          with:
            node-version: ${{ matrix.node }}

        - name: Install dependencies
          run: npm ci

        - name: Generate
          run: npm run generate

        - name: Deploy
          uses: peaceiris/actions-gh-pages@v3
          with:
            github_token: ${{ secrets.GITHUB_TOKEN }}
            publish_dir: ./dist
            cname: antje-sommer.de
```
## Configure a deployment target to enable nuxt for static hosting

For static sites add <inline-code>target: static</inline-code> to your **nuxt.config.js**, as Nuxt.js also works as a static site generator.

 ```
  module.exports = {
    env: {
      baseUrl,
      productionUrl
    },
    target: 'static',
``` 
The nuxt <inline-code>generate</inline-code> command will generate a static version of your website. It will generate HTML for every one of your routes and put it inside of its own file in the **dist/ directory**

```
 generate: {
    routes: [
      '/en', '404'
    ]
    .concat(blogsDe.map(w => `/blog/${w}`))
    .concat(blogsEn.map(w => `/en/blog/${w}`))
  }
```

## Configure your User page site to serve static content

Go to the **settings tab** in GitHub and navigate to **pages** to set the configuation for the gh-pages branch.

I selected the **gh-pages branch as source** and **serve the static content from the root** folder, this setting has the benefit of not having to maintain two repositories at the same time, one for holding the source code and one for serving the build artifacts.

<image-responsive
  imageURL="blog/deploy-nuxt-app-to-github-pages/create_user_site.png"
  :width="'952'"
  :height="'509'"
  alt="create user site" />

**What is the gh-pages branch for?**

The gh-pages branch is where GitHub will look for static content to serve, such as build artifacts. 

A gh-pages branch can either be created by command line from your local repository

  ```sh
  git checkout -b gh-pages
  git push --set-upstream origin gh-pages 
  ```

or by using [Paeceiris GitHub Actions](https://github.com/peaceiris/actions-gh-pages) as part of the configuration of a CD workflow.
## Serve your website from a custom domain 

After running a test deployment, my User page site was available on <inline-code>https://sommerantje.github.io</inline-code>
now I wanted to have my User page site being prompted from my custom domain, which I already had set up for my old website by [webhoster.ag](https://webhoster.ag)

**Configure a custom domain on GitHub**

To configure a custom domain in GitHub, go to the settings tab an navigate to pages and add your custom domain accordingly.

<image-responsive
  imageURL="blog/deploy-nuxt-app-to-github-pages/custom-domain.jpg"
  :width="'952'"
  :height="'509'"
  alt="create user site" />

To have your custom domain set up  by your provider ..

## What problems have I encountered 

Landjaeger strip steak frankfurter, shoulder rump jowl short loin buffalo shankle ribeye brisket kevin pig andouille shank. Salami ham frankfurter t-bone shoulder ground round pork shankle pork loin. Picanha jerky swine capicola doner chicken prosciutto strip steak fatback shank andouille pork chop porchetta. Tenderloin shank ham leberkas capicola. Boudin swine leberkas jerky, biltong picanha cow. Porchetta tail sirloin kielbasa bacon strip steak swine short loin chuck leberkas.

Does your lorem ipsum text long for something a little meatier? Give our generator a try… it’s tasty!