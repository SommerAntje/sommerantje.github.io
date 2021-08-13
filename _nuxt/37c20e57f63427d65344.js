(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{244:function(t,e){const n={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dynamicMarkdown"},[n("p",[t._v("This blog post documents the steps needed to be exectued in order to deploy a nuxt app (pre-rendering SPA) as static site generator to GitHub Pages and how to serve it as a website from a custom domain.")]),t._v(" "),n("h2",[t._v("Technologies that I’ve been using")]),t._v(" "),t._m(0),t._v(" "),n("h2",[t._v("Create a User Page Site on GitHub Pages")]),t._v(" "),n("p",[t._v("I wanted to host my tech blog as a website, but being also allowed to publish my blog posts at anytime without much effort by using a continuous deployment workflow, which is why I’ve chosen to use GitHub actions and to host my blog on GitHub Pages as user page site.")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),n("h2",[t._v("Configure a continous deployment workflow with GitHub Actions")]),t._v(" "),t._m(3),t._v(" "),n("p",[n("image-responsive",{attrs:{imageURL:"blog/deploy-nuxt-app-to-github-pages/_main.jpg",width:"952",height:"509",alt:"create user site"}})],1),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),n("h2",[t._v("Configure a deployment target to enable nuxt for static hosting")]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),n("h2",[t._v("Configure your User page site to serve static content")]),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),n("p",[n("image-responsive",{attrs:{imageURL:"blog/deploy-nuxt-app-to-github-pages/create_user_site.png",width:"952",height:"509",alt:"create user site"}})],1),t._v(" "),t._m(14),t._v(" "),n("p",[t._v("The gh-pages branch is where GitHub will look for static content to serve, such as build artifacts.")]),t._v(" "),n("p",[t._v("A gh-pages branch can either be created by command line from your local repository")]),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),n("h2",[t._v("Serve your website from a custom domain")]),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),n("p",[t._v("To configure a custom domain in GitHub, go to the settings tab, navigate to pages and add your custom domain accordingly.")]),t._v(" "),n("p",[n("image-responsive",{attrs:{imageURL:"blog/deploy-nuxt-app-to-github-pages/custom-domain.jpg",width:"952",height:"509",alt:"create user site"}})],1),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),n("p",[t._v("To point to an apex domain I use an A record pointing to the server’s IP.")]),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),n("p",[t._v("An IP address isn’t always linked with one domain name. Several names can also refer to the same IP address. To enable this, the DNS uses CNAME records.")]),t._v(" "),t._m(26),t._v(" "),t._m(27),t._v(" "),n("p",[t._v("For having these changes to be made, I had to contact the provider service to add the DNS settings like the following:")]),t._v(" "),t._m(28),t._v(" "),t._m(29),t._v(" "),n("p",[t._v("The apex domain antje-sommer.de points to the GitHub IPs,\nwhile the subdomain www.antje-sommer.de leads to the CNAME sommerantje.github.io, which GitHub points back to the apex domain.")]),t._v(" "),n("p",[n("image-responsive",{attrs:{imageURL:"blog/deploy-nuxt-app-to-github-pages/dns.png",width:"952",height:"509",alt:"dns"}})],1),t._v(" "),t._m(30),t._v(" "),t._m(31),t._v(" "),t._m(32),t._v(" "),n("p",[t._v("After the DNS changes have been added enforce https inside of the GitHub page settings to have your site served from https only.")]),t._v(" "),n("p",[n("image-responsive",{attrs:{imageURL:"blog/deploy-nuxt-app-to-github-pages/custom_domain_setup.png",width:"952",height:"509",alt:"create user site"}})],1),t._v(" "),n("h2",[t._v("What problems have I encountered")]),t._v(" "),t._m(33),t._v(" "),n("p",[t._v("I had to perform test deployments with minimal changes to the master branch, for\ntesting my CD.")]),t._v(" "),t._m(34),t._v(" "),t._m(35),t._v(" "),n("p",[t._v("I needed pull requests not to trigger a deployment because I am  developing my blog content on WIP:Pull requests as part of my personal workflow.")]),t._v(" "),t._m(36),t._v(" "),n("p",[t._v("At the beginning I’ve missed adding my apex domain to the cname configuration within the deployment action.")]),t._v(" "),n("p",[t._v("That caused a deletation of my custom domain entry within the GitHub pages settings with the consequence that each time a deployment action has been executed my domain entry appears to be empty and therefore my User page site down.")]),t._v(" "),t._m(37)])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[t._v("Website and blog built with "),n("em",[t._v("nuxt.js, vue.js and markdown")]),t._v(" (pre-rendering SPA)")]),t._v(" "),n("li",[t._v("GitHub Pages")]),t._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/peaceiris/actions-gh-pages"}},[t._v("Paeceiris GitHub Actions")])]),t._v(" "),n("li",[t._v("DNS and CNAME configurations")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("I already had my blog constantly developed in a private GitHub repository, so I just needed to make the repository public, as I am using GitHub free, where a public repository is required, if you want to create a user page site for your account, "),e("strong",[this._v("GitHub entitles a user to host at least one User page site per account for free.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("To have a user page site created all I had to do afterwards, was changing the repository name under the settings tab from the project name to "),e("code",{pre:!0},[this._v("your-user-account.github.io ")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("As I want my content to be published automatically everytime I update the source code, I introduced a continous deployment workflow to my project using "),e("a",{attrs:{href:"https://github.com/peaceiris/actions-gh-pages"}},[this._v("Paeceiris GitHub Actions")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("This workflow enables me to deploy a static site to GitHub Pages with "),e("a",{attrs:{href:"https://jamstack.org/generators/"}},[this._v("Static Site Generators")]),this._v(" and also creates a new gh-pages branch automatically, as soon as the corresponding action has been executed.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("To set up a workflow for my nuxt project I had to create a "),e("strong",[this._v("cd.yml")]),this._v(" file inside of my repository like the following")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",{pre:!0},[this._v("/.github/workflows/cd.yml ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",{staticClass:"language-yml"},[n("code",{pre:!0,attrs:{class:"language-yml"}},[t._v("  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" cd\n\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("on")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("push")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branches")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" master\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("jobs")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cd")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("runs-on")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" matrix.os "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("strategy")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("matrix")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("os")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ubuntu"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("latest"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("node")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("steps")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Checkout\n          "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" actions/checkout@master\n\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Setup node env\n          "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" actions/setup"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("node@v2.1.2\n          "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("node-version")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" matrix.node "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Install dependencies\n          "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" npm ci\n\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Generate\n          "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" npm run generate\n\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Deploy\n          "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" peaceiris/actions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("gh"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pages@v3\n          "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("github_token")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" secrets.GITHUB_TOKEN "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("publish_dir")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ./dist\n            "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cname")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" antje"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("sommer.de\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("For static sites add "),e("code",{pre:!0},[this._v("target: static ")]),this._v(" to your "),e("strong",[this._v("nuxt.config.js")]),this._v(", as Nuxt.js also works as a static site generator.")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",{staticClass:"language-js"},[n("code",{pre:!0,attrs:{class:"language-js"}},[t._v("  module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    env"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      baseUrl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      productionUrl\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    target"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'static'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The nuxt "),e("code",{pre:!0},[this._v("generate ")]),this._v(" command will generate a static version of your website. It will generate HTML for every one of your routes and put it inside of its own file in the "),e("strong",[this._v("dist/ directory")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",{staticClass:"language-js"},[n("code",{pre:!0,attrs:{class:"language-js"}},[t._v(" generate"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    routes"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/en'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'404'")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("concat")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("blogsDe"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("w")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token template-string"}},[n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("/blog/")]),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("w"),n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("concat")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("blogsEn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("w")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token template-string"}},[n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("/en/blog/")]),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("w"),n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Go to the "),e("strong",[this._v("settings tab")]),this._v(" in GitHub and navigate to "),e("strong",[this._v("pages")]),this._v(" to set the configuation for the gh-pages branch.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("I selected the "),e("strong",[this._v("gh-pages branch as source")]),this._v(" and "),e("strong",[this._v("serve the static content from the root")]),this._v(" folder, this setting has the benefit of not having to maintain two repositories at the same time, one for holding the source code and one for serving the build artifacts.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[e("em",[this._v("What is the gh-pages branch for?")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",{pre:!0},[this._v("git checkout -b gh-pages\ngit push --set-upstream origin gh-pages \n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("or by using "),e("a",{attrs:{href:"https://github.com/peaceiris/actions-gh-pages"}},[this._v("Paeceiris GitHub Actions")]),this._v(" as part of the configuration of a CD workflow.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("After running a test deployment, my User page site was available on "),e("code",{pre:!0},[this._v("https://sommerantje.github.io ")]),this._v(".\nNow I wanted to have my custom domain being prompted to my User page site.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("em",[this._v("Read on GitHub Docs "),e("a",{attrs:{href:"https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain"}},[this._v("configure a custom domain")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Configure a custom domain on GitHub")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Set up your DNS and CNAME configuration")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[e("em",[this._v("What is an apex domain?")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("An Apex domain, is a root domain that does not contain a subdomain, for example "),e("code",{pre:!0},[this._v("antje-sommer.de ")]),this._v(" is an\napex domain because it doesn’t have a subdomain.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",{pre:!0},[this._v("www.antje-sommer.de ")]),this._v(" is not an apex domain because it contains the subdomain part www.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Note:")]),this._v(" "),e("em",[this._v("This solution doesn’t scale and isn’t viable for cloud platforms, where multiple and frequently changing backends are responsible for responding to requests.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[e("em",[this._v("What is a CNAME record?")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("A Canonical Name record is a type of resource record in the Domain Name System that maps one domain name to another. This can prove convenient when running multiple services from a single IP address. One can, for example, point "),e("em",[this._v("ftp.example.com")]),this._v(" and "),e("em",[this._v("www.example.com")]),this._v(" to the DNS entry for "),e("em",[this._v("example.com")]),this._v(" , which in turn has an A record which points to the IP address.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("I also use CNAME records for my subdomain pointing to "),e("code",{pre:!0},[this._v("sommerantje.github.io ")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",{pre:!0},[this._v("  DNS A Records for my domain antje-sommer.de:\n  // GitHub IPs\n  185.199.108.153\n  185.199.109.153\n  185.199.110.153\n  185.199.111.153\n  \n  A CNAME Record from www.antje-sommer.de to sommerantje.github.io\n\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Basically you want to create a mapping like this:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("As last steps I had to set my apex domain to the cname configuration inside the "),e("strong",[this._v("cd.yml")]),this._v(" where I have set up the peaceiris/actions-gh-pages@v3 for the deployment.")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",{staticClass:"language-yml"},[n("code",{pre:!0,attrs:{class:"language-yml"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Deploy\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" peaceiris/actions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("gh"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pages@v3\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("github_token")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" secrets.GITHUB_TOKEN "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("publish_dir")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ./dist\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cname")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" antje"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("sommer.de\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Enforce HTTPS")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Testing GitHub Actions is not really possible")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("This is also how I encountered an issue within my CD configuration, as I had executed a deployment each time when I pushed to master but also with each pull request, caused by the following configuration inside of the "),e("strong",[this._v("cd.yml")]),this._v(":")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",{staticClass:"language-yml"},[n("code",{pre:!0,attrs:{class:"language-yml"}},[n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("on")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("push")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branches")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" master\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("pull_request")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branches")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" master\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Wrong CNAME configuration")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",{staticClass:"language-yml"},[n("code",{pre:!0,attrs:{class:"language-yml"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Deploy\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" peaceiris/actions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("gh"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pages@v3\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("github_token")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" secrets.GITHUB_TOKEN "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("publish_dir")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ./dist\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cname")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" antje"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("sommer.de\n")])])}]};t.exports={attributes:{name:"deploy-nuxt-app-to-github-pages",title:"Deploy a nuxt app to GitHub Pages and host your website",year:"14 May 2021",id:"deploy-nuxt-app-to-github-pages",description:"Deploy a nuxt app to GitHub Pages by creating a workflow through GitHub actions and serve your website from a custom domain\n"},vue:{render:n.render,staticRenderFns:n.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(t){return this.templateRender?this.templateRender():t("div","Rendering")},created:function(){this.templateRender=n.render,this.$options.staticRenderFns=n.staticRenderFns}}}}}}]);