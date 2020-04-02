<template>
  <header class="header">
    <div class="container">
      <a href="/" class="header__link-logo nuxt-link-exact-active nuxt-link-active">
         <img src="~/assets/images/logo-antje.svg" alt="Logo Antje Sommer" class="header__logo" />
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
  background-color: $background-primary;
  
  @media (min-width: $screen-sm){
  	height: 8rem;
  }

  &__logo {
    height: 33px;
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

    @media(max-width: $screen-xs){
      flex-direction: row;
    }

    @media(max-width: $screen-sm){
      flex-direction: row;
    }
  }

  .navigation-items {
  	@media (max-width: $screen-xs) {
  		display: none;
    }
    
    @media(max-width: $screen-sm){
      display: none;
    }
  }

  .drawer-toggle {
  	@media(min-width: $screen-sm) {
  		display: none;
  	}
  }
}
</style>
