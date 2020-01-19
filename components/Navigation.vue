<template>
  <div class="nav">
    <nav>
        <nuxt-link to="/posts" class="ani">
            Posts
        </nuxt-link> |
        <nuxt-link to="/resume" class="ani">
            Resume
        </nuxt-link>
        <LangSwitcher/>
    </nav>
  </div>
</template>
<script>
import LangSwitcher from '~/components/LangSwitcher';

export default {
  components: {LangSwitcher}
}
</script>
<style lang="scss">
</style>