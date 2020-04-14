<template>
  <div class="page-index">
    <HeroBanner />
   
    <div class="container">
      <BlogSection :blogs="blogs" />
    </div>

    <div class="container">
      <BlogSection :blogs="blogs" />
    </div>

    <div class="container">
      <img src="~/assets/images/turm.jpg" />
    </div>

    <div class="container">
      <BlogSection :blogs="blogs" />
    </div>
  </div>
</template>

<script>
  import BlogSection from '~/components/Sections/BlogSection'
  import blogsEn from '~/contents/en/blogsEn.js'
  import blogsEs from '~/contents/es/blogsEs.js'
  import HeroBanner from '~/components/Sections/HeroBanner'


  export default {
    async asyncData ({app}) {

      const blogs = app.i18n.locale === 'en' ? blogsEn : blogsEs
  
      async function asyncImport (blogName) {
        const wholeMD = await import(`~/contents/${app.i18n.locale}/blog/${blogName}.md`)
        return wholeMD.attributes
      }

      return Promise.all(blogs.slice(-2).map(blog => asyncImport(blog)))
      .then((res) => {
        return {
          blogs: res
        }
      })
    },
    
    components: {BlogSection, HeroBanner},

    transition: {
      name: 'slide-fade'
    },

    head () {
      return {
        title: this.$t('indexPageHead.title'),
        htmlAttrs: {
          lang: this.$i18n.locale,
        },
        meta: [
          { name: "author", content: "Antje Sommer" },
          { name: "description", property: "og:description", content: this.$t('indexPageHead.description'), hid: "description" },
          { property: "og:title", content: this.$t('indexPageHead.title') },
          { property: "og:image", content: this.ogImage }
        ]
      };
    },

    computed: {
      ogImage: function () {
        return;
      }
    }
  }
</script>
