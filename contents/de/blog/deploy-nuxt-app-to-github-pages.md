---
name: 'deploy-nuxt-app-to-github-pages'
title: Deploy a nuxt app to GitHub Pages and host your website
year: 14 May 2021
id: 'deploy-nuxt-app-to-github-pages'
description: |
  Deploy a nuxt app to GitHub Pages by creating a workflow through GitHub actions and serve your website from a custom domain
---
Given you want to host a web application made with nuxt.js that includes a blog, which dynamically requests each post
to GitHub and creates a static version in the build (pre-rendering SPA) - that also should be served from a custom domain other than the default github.io preset.

This blog post documents the steps needed to be exectued in order to deploy such a web app to GitHub Pages.
## Technologies that I've been using

- A pre-rendering SPA _nuxt.js, vue.js and markdown_
- GitHub Pages
- [Paeceiris GitHub Actions](https://github.com/peaceiris/actions-gh-pages)
- DNS configurations


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

**_What is the gh-pages branch for?_**

The gh-pages branch is where GitHub will look for static content to serve, such as build artifacts. 

A gh-pages branch can either be created by command line from your local repository

  ```sh
  git checkout -b gh-pages
  git push --set-upstream origin gh-pages 
  ```

or by using [Paeceiris GitHub Actions](https://github.com/peaceiris/actions-gh-pages) as part of the configuration of a CD workflow.
## Serve your website from a custom domain 

After running a test deployment, my User page site was available on <inline-code>https://sommerantje.github.io</inline-code>
now I wanted to have my custom domain being prompted to my User page site.

_Read on GitHub Docs [configure a custom domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain)_


**Configure a custom domain on GitHub**

To configure a custom domain in GitHub, go to the settings tab, navigate to pages and add your custom domain accordingly.

<image-responsive
  imageURL="blog/deploy-nuxt-app-to-github-pages/custom-domain.jpg"
  :width="'952'"
  :height="'509'"
  alt="create user site" />

**Set up your DNS and CNAME configuration**

**_What is an apex domain?_**

An Apex domain, is a root domain that does not contain a subdomain, for example <inline-code>antje-sommer.de</inline-code> is an
apex domain because it doesn't have a subdomain.

<inline-code>www.antje-sommer.de</inline-code> is not an apex domain because it contains the subdomain part www.

To point to an apex domain I use an A record pointing to the server's IP. 
**Note:** _This solution doesn't scale and isn't viable for cloud platforms, where multiple and frequently changing backends are responsible for responding to requests._

**_What is a CNAME record?_**

An IP address isn’t always linked with one domain name. Several names can also refer to the same IP address. To enable this, the DNS uses CNAME records.

A Canonical Name record is a type of resource record in the Domain Name System that maps one domain name to another. This can prove convenient when running multiple services from a single IP address. One can, for example, point _ftp.example.com_ and _www.example.com_ to the DNS entry for _example.com_ , which in turn has an A record which points to the IP address.

I also use CNAME records for my subdomain pointing to <inline-code>sommerantje.github.io</inline-code>.

For having these changes be made I had to contact the provider service to add the DNS settings like the following:

```DNS settings
  DNS A Records for my domain antje-sommer.de:
  185.199.108.153
  185.199.109.153
  185.199.110.153
  185.199.111.153
  
  A CNAME Record from www.antje-sommer.de to sommerantje.github.io

```

As last steps I had to set my apex domain to the cname configuration inside the **cd.yml** where I have set up the peaceiris/actions-gh-pages@v3 for the deployment.

```
- name: Deploy
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
        cname: antje-sommer.de
```

And add a **CNAME** file to my directory on the root level containing my subdomain, to complete the mapping.

```CNAME
  www.antje-sommer.de
```

**Enforce HTTPS**

After the DNS changes have been added enforce https inside of the GitHub page settings to have your site served from https only.

<image-responsive
  imageURL="blog/deploy-nuxt-app-to-github-pages/custom_domain_setup.png"
  :width="'952'"
  :height="'509'"
  alt="create user site" />

## What problems have I encountered 

**Testing GitHub Actions is not really possible**

I had to perform test deployments with minimal changes to the master branch, for 
testing my CD.

This is also how I encountered an issue within my CD configuration, as I had executed a deployment each time when I pushed to master but also with each pull request, caused by the following configuration inside of the **cd.yml**:

```
on: 
    push:
      branches:
        - master
    pull_request:
      branches:
        - master
```

I needed pull requests not to trigger a deployment because I am  developing my blog content on WIP:Pull requests as part of my personal workflow.

**Wrong CNAME configuration**

At the beginning I've missed adding my apex domain to the cname configuration within the deployment action and creating a CNAME file in my directory contaning my subdomain.

That caused a deletation of my custom domain entry within the GitHub pages settings with the consequence that each time a deployment action has been executed my domain entry appears to be empty and therefore my User page site down.

```
- name: Deploy
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
        cname: antje-sommer.de
``