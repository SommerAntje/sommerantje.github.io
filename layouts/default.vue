<template>
  <div class="layout">
    <Header/>
    <SideNav/>
    <nuxt class="nuxt-content"/>
    <Footer/>
  </div>
</template>
<script>
  import Footer from '~/components/Sections/Footer'
  import Header from '~/components/Sections/Header'
  import SideNav from '~/components/Sections/SideNav'

  export default {
    components: {
      Footer,
      Header,
      SideNav
    }
  }
</script>
<style lang="scss">
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.nuxt-content {
  flex-grow: 1;
}
</style>
