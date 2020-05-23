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
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@200&display=swap');

.header {
  width: 100%;
  display: -webkit-box;
  display: flex;
  font-family: 'Raleway', Arial, sans-serif;
  height: 8rem;
  justify-content: space-around;
  -webkit-box-align: center;
  align-items: center;
  z-index: 100;
  box-shadow: 0 4px 12px 0 rgba(0,0,0,.05);
  background-color: $background-primary;
  
  @media (min-width: $screen-sm){
  	height: 6rem;
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

    @media(min-width: $screen-md){
      padding-right: 0;
      padding-left: 0;
      max-width: 1300px;
      margin-right: 30px;
      margin-left: 50px;
    }

    @media(min-width: $screen-lg){
      height: 6rem;
      padding-right: 0;
      padding-left: 0;
      max-width: 1500px;
      margin-right: 30px;
      margin-left: 50px;
    }
  }

  .navigation {
    display: none;

  	@media (min-width: $screen-sm) {
  		display: inline-flex;
    }
  }

  .drawer-toggle {
    display: flex;

  	@media (min-width: $screen-sm) {
  		display: none;
  	}
  }
}
</style>
