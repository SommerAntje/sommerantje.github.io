<template>
  <header class="header">
    <div class="container header__container">
      <a href="/" class="header__link-logo nuxt-link-exact-active nuxt-link-active">
         <img src="~/assets/images/logo-antje.svg" alt="Logo Antje Sommer" class="header__logo" />
      </a>
    </div>
  </header>
</template>
<script>
export default {
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
</style>

