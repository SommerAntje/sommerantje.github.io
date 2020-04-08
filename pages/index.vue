<template>
  <div class="page-index">
      <HeroBanner />
    <div style="background-color: #fff; height: auto;">
      <div class="container">
        <BlogSection :blogs="blogs" />
      </div>
    </div>
  
    <parallax :fixed="true">
      <img src="~/assets/images/hamburg_blue.jpg" />
    </parallax>
    
  </div>
</template>

<script>
  import BlogSection from '~/components/Sections/BlogSection'
  import blogsEn from '~/contents/en/blogsEn.js'
  import blogsEs from '~/contents/es/blogsEs.js'
  import HeroBanner from '~/components/Sections/HeroBanner'

  import Parallax from 'vue-parallaxy'



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
    
    components: {BlogSection, HeroBanner, Parallax},

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
