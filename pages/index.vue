<template>
  <div class="page-index">
    <HeroBanner />

    <div class="parallax1 parallax">
      <div class="parallax__caption">
        <span class="parallax__caption__border">TECH BLOG</span>
      </div>
    </div>
   
    <div class="container">
      <BlogSection :blogs="blogs" />
    </div>
    
    <div class="parallax2 parallax">
      <div class="parallax__caption">
        <span class="parallax__caption__border">ABOUT ME</span>
      </div>
    </div>
    
    <div class="container">
      <About />
    </div>

    <div class="parallax3 parallax">
      <div class="parallax__caption">
        <span class="parallax__caption__border">SKILLS</span>
      </div>
    </div>

    <div class="container">
      <Skills />
    </div>

    <div class="parallax4 parallax">
      <div class="parallax__caption">
        <span class="parallax__caption__border">GET IN TOUCH</span>
      </div>
    </div>

    <div class="container">
       <Contact />
    </div>
  </div>
</template>

<script>
  import BlogSection from '~/components/Sections/BlogSection'
  import blogsEn from '~/contents/en/blogsEn.js'
  import blogsDe from '~/contents/de/blogsDe.js'
  import HeroBanner from '~/components/Sections/HeroBanner'
  import About from '~/components/Sections/About'
  import Skills from '~/components/Sections/Skills'
  import Contact from '~/components/Sections/Contact'

  export default {
    async asyncData ({app}) {

      const blogs = app.i18n.locale === 'en' ? blogsEn : blogsDe
  
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
    
    components: {HeroBanner, About, Skills, BlogSection, Contact},

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
<style lang="scss">


.parallax1 {
  background: linear-gradient(rgba(53,168,224,0.4), rgba(153, 7, 250, 0.4)), url("../assets/images/turm.jpg");
}
.parallax2 {
  background: linear-gradient(rgba(209, 59, 152, 0.4), rgba(40, 148, 190, 0.4)), url("../assets/images/dockland_2.jpg");
}
.parallax3 {
  background: linear-gradient(rgba(55, 223, 159, 0.4), rgba(199, 39, 106, 0.4)), url("../assets/images/hafen.jpg");
}
.parallax4 {
  background: linear-gradient(rgba(221, 219, 92, 0.4), rgba(153, 7, 250, 0.4)), url("../assets/images/dockland_a.jpg");
}
.parallax {
  min-height: 450px; 
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  opacity: 0.65;

  @media (max-width: $screen-sm) {
    min-height: 350px; 
    padding: 10px;
    font-size: 2rem;
    letter-spacing: 5px;
  }

  &__caption {
    font-family: $font-family-headline;
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    text-align: center;
    color: $background-secondary-darker;
    &__border {
      background-color: $background-secondary-darker;
      color: $background-primary;
      padding: 18px;
      font-size: 2.25rem;
      letter-spacing: 10px;
      text-transform: uppercase;

      @media (max-width: $screen-sm) {
        padding: 10px;
        font-size: 2rem;
        letter-spacing: 5px;
      }
    }
  }
}
</style>
