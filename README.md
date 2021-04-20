# Web App built with  [nuxt.js](https://nuxtjs.org) + [vue.js](https://vuejs.org) + markdown hostet on [GitHub Pages](https://pages.github.com/g) &#127378; 

## Development 

1.  **Clone this repository.**

2.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```sh
    cd nuxt-markdown-blog-starter/
    npm install
    npm run dev
    ```

3.  **Running!**

    Your site is now running at `http://localhost:3000`!

## Structure

    .
    ├── node_modules
    ├── assets
    ├── components
    ├── contents
      ├── en
        ├── blog
        ├── blogsEn.js
      ├── de
        ├── blog
        ├── blogsDe.js
    ├── layouts
    ├── locales
    ├── pages
    ├── plugins
    ├── static
    ├── .gitignore
    ├── LICENSE
    ├── nuxt.config.js
    ├── package-lock.json
    ├── package.json
    ├── ci.yml
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/assets`**: You will find the images and assets for the project. You can find more information at [Nuxt's assets directory documentation](https://nuxtjs.org/guide/assets/)

3.  **`/components`**: Vue components for the project. You can find more information at [Nuxt's components directory documentation](https://nuxtjs.org/guide/directory-structure#the-components-directory)

4.  **`/contents`**: You will save your MD files here. They are divided by language and you will have to write the URL name of each of them at `blogsEn.js` and `blogsDe.js`.

5.  **`/layouts`**: You can find information at [Nuxt's layout directory documentation](https://nuxtjs.org/guide/directory-structure#the-layouts-directory)

6.  **`/locales`**: You will save your translations here.

7.  **`/pages`**: You can find information at [Nuxt's pages directory documentation](https://nuxtjs.org/guide/directory-structure#the-pages-directory)

8.  **`/plugins`**: You can find information at [Nuxt's plugins directory documentation](https://nuxtjs.org/guide/directory-structure#the-plugins-directory)

9.  **`/statics`**: You can find information at [Nuxt's statics directory documentation](https://nuxtjs.org/guide/directory-structure#the-static-directory)

10. **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

11. **`LICENSE`**: This is licensed under the MIT license.

12. **`nuxt-config.js`**: This is the main configuration file for a Nuxt site. This is where you can specify information about your site (metadata) like the site title and description, which Nuxt plugins you’d like to include, etc. (Check out the [config docs](https://nuxtjs.org/guide/configuration) for more detail).

13. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

14. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

15. **`README.md`**: A text file containing useful reference information about your project.

## Deploy

Deploy through [GitHub actions](https://docs.github.com/en/actions/) &#128526;