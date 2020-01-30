<template>
  <header class="the-header">
    <div class="container">
      <a href="/" class="the-header__link-logo nuxt-link-exact-active nuxt-link-active">
         <img src="~/assets/images/logo-antje.svg" alt="Logo Antje Sommer" class="the-header__logo" />
      </a>
      <DrawerToggle/>
      <Navigation/>
    </div>
  </header>
</template>
<script>
import Navigation from '~/components/Navigation';
import DrawerToggle from '~/components/DrawerToggle';
export default {
  components: {
    Navigation,
    DrawerToggle
  }
}
</script>

<style lang="scss">
.the-header {
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

  .container {
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
     width: 100%;

    @media (max-width: $screen-xs){
      flex-direction: row;
    }
  }
  @media (min-width: $screen-sm) {
    .drawer-toggle {
        display: none;
    }
  }
  @media (min-width: $screen-sm) {
    height: 8rem;
  }
  @media (max-width: $screen-xs) {
    .navigation-items {
      display: none;
    }
  }
}
</style>

