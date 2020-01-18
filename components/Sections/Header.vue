<template>
  <header class="header">
    <div class="container header__container">
      <a href="/" class="header__link-logo nuxt-link-exact-active nuxt-link-active">
         <img src="~/assets/images/logo-antje.svg" alt="Logo Antje Sommer" class="header__logo" />
      </a>
      <div class="navigation-items">
        <LangSwitcher/>
        <LangSwitcher/>
        <ul class="nav-list"><li class="nav-item"><a href="/blog" class="ani"><span>Posts</span></a></li></ul>
      </div>
    </div>
  </header>
</template>
<script>
import LangSwitcher from '~/components/LangSwitcher';
export default {
  components: {LangSwitcher}
}
</script>

<style lang="scss">
.header {
  width: 100%;
  height: 6rem;
  display: -webkit-box;
  display: flex;
  justify-content: space-around;
  -webkit-box-align: center;
  align-items: center;
  z-index: 100;
  box-shadow: 0 4px 12px 0 rgba(0,0,0,.05);
  background-color: #fff;

  &__logo {
    height: 100%;
  }

  &__link-logo {
     line-height: 0;
  }
  
  &__container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    flex-direction: column;

    @media (min-width: $screen-sm){
      flex-direction: row;
    }
  }
}
.navigation-items {
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;

  .nav-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;

    @media (min-width: $screen-sm) {
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
       flex-direction: row;
    }
  }

  .nav-item {
    @media (min-width: 768px) {
      li {
          margin-bottom: 0;
      }
    }
  }
}
</style>

