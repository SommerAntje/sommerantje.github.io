<template>
<div class="navigation-items">
  <ul class="nav-list">
    <li class="nav-item">
      <nuxt-link to="/posts" class="ani">
        <span> Posts </span>
      </nuxt-link>
    </li>
    <li class="nav-item">
    <nuxt-link to="/resume" class="ani">
        <span> Resume </span>
    </nuxt-link>
    </li>
  </ul>
  <LangSwitcher />
</div>
</template>
<script>
import LangSwitcher from '~/components/LangSwitcher';
export default {
  components: {LangSwitcher}
}
</script>
<style scoped lang="scss">
  .navigation-items {
    @media (min-width: $screen-sm) {
      display: -webkit-box;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: justify;
      justify-content: space-between;
    }
    @media (max-width: $screen-xs) {
      a {
        color: $text-negative;
      }
    }
  }

  .nav-list {
    list-style: none;
    padding: 0;
    margin: 0;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column; 
    display: -webkit-box;
    display: flex;  
  }

  .nav-item {
    margin: 0 10px;
    @media (max-width: $screen-xs) {
      margin: 10px;
      border-bottom: 1px solid $text-negative;
      padding: 0.5rem;
    }
  }

  @media (min-width: $screen-sm) {
    .nav-list {
       -webkit-box-orient: horizontal;
       -webkit-box-direction: normal;
       flex-direction: row;
    }
  }
</style>