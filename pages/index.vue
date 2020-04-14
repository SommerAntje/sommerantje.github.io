<template>
  <div class="page-index">
    <HeroBanner />

    <div class="parallax1">
      <div class="caption">
        <span class="border">ABOUT ME</span>
      </div>
    </div>
   
    <div class="container">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Velit euismod in pellentesque massa placerat duis. Praesent elementum facilisis leo vel.
        Pellentesque elit eget gravida cum sociis. Augue lacus viverra vitae congue eu consequat. 
        Aliquam sem fringilla ut morbi tincidunt augue interdum velit. 
        Orci dapibus ultrices in iaculis nunc sed augue lacus. 
        Sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. 
        Arcu ac tortor dignissim convallis aenean et tortor at. 
        Sit amet cursus sit amet dictum sit amet. Consectetur libero id faucibus nisl tincidunt. 
        Non curabitur gravida arcu ac tortor dignissim convallis aenean et. 
        Sed cras ornare arcu dui vivamus. Elementum integer enim neque volutpat ac tincidunt vitae semper quis.
        Nibh sed pulvinar proin gravida hendrerit lectus. Semper risus in hendrerit gravida. 
        Montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada.
      </p>
      <p>
        Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra justo. 
        Dictumst quisque sagittis purus sit amet volutpat consequat mauris nunc. 
        Pellentesque massa placerat duis ultricies lacus sed. Pretium quam vulputate dignissim suspendisse in est ante in. 
        Faucibus nisl tincidunt eget nullam non. Ut morbi tincidunt augue interdum velit. 
        Dapibus ultrices in iaculis nunc sed augue lacus. Habitant morbi tristique senectus et netus et. 
        Aliquet porttitor lacus luctus accumsan tortor posuere ac. 
        Scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis.
      </p>
    </div>
    
    <div class="parallax2">
      <div class="caption">
        <span class="border">FRONTEND SKILLS</span>
      </div>
    </div>
    
    <div class="container">
      <p>
        Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra justo. 
        Dictumst quisque sagittis purus sit amet volutpat consequat mauris nunc. 
        Pellentesque massa placerat duis ultricies lacus sed. Pretium quam vulputate dignissim suspendisse in est ante in. 
        Faucibus nisl tincidunt eget nullam non. Ut morbi tincidunt augue interdum velit. 
        Dapibus ultrices in iaculis nunc sed augue lacus. Habitant morbi tristique senectus et netus et. 
        Aliquet porttitor lacus luctus accumsan tortor posuere ac. 
        Scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis.
      </p>
      <p>
        Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra justo. 
        Dictumst quisque sagittis purus sit amet volutpat consequat mauris nunc. 
        Pellentesque massa placerat duis ultricies lacus sed. Pretium quam vulputate dignissim suspendisse in est ante in. 
        Faucibus nisl tincidunt eget nullam non. Ut morbi tincidunt augue interdum velit. 
        Dapibus ultrices in iaculis nunc sed augue lacus. Habitant morbi tristique senectus et netus et. 
        Aliquet porttitor lacus luctus accumsan tortor posuere ac. 
        Scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis.
      </p>
    </div>

    <div class="parallax3">
      <div class="caption">
        <span class="border">BLOG POSTS</span>
      </div>
    </div>

    <div class="container">
      <BlogSection :blogs="blogs" />
    </div>

    <div class="parallax4">
      <div class="caption">
        <span class="border">GET IN TOUCH</span>
      </div>
    </div>

    <div class="container">
     <p>
        Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra justo. 
        Dictumst quisque sagittis purus sit amet volutpat consequat mauris nunc. 
        Pellentesque massa placerat duis ultricies lacus sed. Pretium quam vulputate dignissim suspendisse in est ante in. 
        Faucibus nisl tincidunt eget nullam non. Ut morbi tincidunt augue interdum velit. 
        Dapibus ultrices in iaculis nunc sed augue lacus. Habitant morbi tristique senectus et netus et. 
        Aliquet porttitor lacus luctus accumsan tortor posuere ac. 
        Scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis.
      </p>
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
<style lang="scss">
.parallax1 {
  background-image: url("../assets/images/turm.jpg");
  min-height: 500px; 
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  opacity: 0.65;
  .caption {
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    text-align: center;
    color: #000;
    .border {
      background-color: #111;
      color: #fff;
      padding: 18px;
      font-size: 25px;
      letter-spacing: 10px;
    }
  }
}
.parallax2 {
  background-image: url("../assets/images/turm_blau.jpg");
  min-height: 500px; 
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  opacity: 0.65;
   .caption {
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    text-align: center;
    color: #000;
    .border {
      background-color: #111;
      color: #fff;
      padding: 18px;
      font-size: 25px;
      letter-spacing: 10px;
    }
  }
}
.parallax3 {
  background-image: url("../assets/images/turm_mint.jpg");
  min-height: 500px; 
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  opacity: 0.65;
  .caption {
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    text-align: center;
    color: #000;
    .border {
      background-color: #111;
      color: #fff;
      padding: 18px;
      font-size: 25px;
      letter-spacing: 10px;
    }
  }
}
.parallax4 {
  background-image: url("../assets/images/turm_magenta.jpg");
  min-height: 500px; 
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  opacity: 0.65;
  .caption {
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    text-align: center;
    color: #000;
    .border {
      background-color: #111;
      color: #fff;
      padding: 18px;
      font-size: 25px;
      letter-spacing: 10px;
    }
  }
}


</style>
