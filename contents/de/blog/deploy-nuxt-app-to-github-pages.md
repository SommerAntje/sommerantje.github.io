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


## Create a User Pages Site on GitHub Pages

I wanted to host my tech blog as a website, but being also allowed to publish my blog posts at anytime without much effort by using a continuous integration workflow, which is why I choosed to host my blog on GitHub Pages, **as GitHub entitles a user to host at least one User Site Page per account for free.**


I already had my blog constantly developed in a private GitHub repository, so I just needed to make the repository public, as I am using GitHub free, where a public repository is required, if you want to create a User page site for your account. 

To have a user page site created all I had to do afterwards, was changing the repository name under the settings tab from the project name to <inline-code>your-user-account.github.io</inline-code>, which represents a repository dedicated to the GitHub pages files, where now my tech blog is stored in as GitHub page site. 

**What is the gh-pages branch for?**

As soon as such a user page site has been created, a gh-pages branch will be added automatically - this is where GitHub will look for static content to serve, such as build artifacts. 

If there hasn't been a gh-pages branch created automatically this can be done by command line from your local repository: 

  ```sh
  git checkout -b gh-pages
  git push --set-upstream origin gh-pages 
  ```

**Configure GitHub pages to serve static content**

Go to the **settings tab** in GitHub and navigate to **pages** to set the configuation for the gh-pages branch.

I selected the **gh-pages branch as source** and **serve the static content from the root** folder, this setting has the benefit of not having to maintain two repositories at the same time, one for holding the source code and one for serving the build artifacts.

<image-responsive
  imageURL="blog/deploy-nuxt-app-to-github-pages/create_user_site.png"
  :width="'952'"
  :height="'509'"
  alt="create user site" />


## Configure a workflow with GitHub Actions

Landjaeger strip steak frankfurter, shoulder rump jowl short loin buffalo shankle ribeye brisket kevin pig andouille shank. Salami ham frankfurter t-bone shoulder ground round pork shankle pork loin. Picanha jerky swine capicola doner chicken prosciutto strip steak fatback shank andouille pork chop porchetta. Tenderloin shank ham leberkas capicola. Boudin swine leberkas jerky, biltong picanha cow. Porchetta tail sirloin kielbasa bacon strip steak swine short loin chuck leberkas.

Does your lorem ipsum text long for something a little meatier? Give our generator a try… it’s tasty!


## Have your website served from a custom domain 

Landjaeger strip steak frankfurter, shoulder rump jowl short loin buffalo shankle ribeye brisket kevin pig andouille shank. Salami ham frankfurter t-bone shoulder ground round pork shankle pork loin. Picanha jerky swine capicola doner chicken prosciutto strip steak fatback shank andouille pork chop porchetta. Tenderloin shank ham leberkas capicola. Boudin swine leberkas jerky, biltong picanha cow. Porchetta tail sirloin kielbasa bacon strip steak swine short loin chuck leberkas.

Does your lorem ipsum text long for something a little meatier? Give our generator a try… it’s tasty!

## What problems have I encountered 

Landjaeger strip steak frankfurter, shoulder rump jowl short loin buffalo shankle ribeye brisket kevin pig andouille shank. Salami ham frankfurter t-bone shoulder ground round pork shankle pork loin. Picanha jerky swine capicola doner chicken prosciutto strip steak fatback shank andouille pork chop porchetta. Tenderloin shank ham leberkas capicola. Boudin swine leberkas jerky, biltong picanha cow. Porchetta tail sirloin kielbasa bacon strip steak swine short loin chuck leberkas.

Does your lorem ipsum text long for something a little meatier? Give our generator a try… it’s tasty!