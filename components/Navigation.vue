<template>
<div class="navigation">
  <ul class="navigation__list">
    <li class="navigation__item">
      <nuxt-link to="/posts" class="ani">
        <span>Blog</span>
      </nuxt-link>
       <nuxt-link   :to="{ path: localePath('index'), hash:`#contact` }" class="ani">
        <span>Contact</span>
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
.navigation {
  @media (min-width: $screen-sm) {
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
  }

  &__list {
    padding-left:0;
    
    @media (min-width: $screen-sm) {
      list-style: none;
      padding: 0;
      margin: 0;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      flex-direction: column; 
      display: -webkit-box;
      display: flex;
    }
  }

  &__item {
    margin: 10px;
    border-bottom: 1px solid $text-negative;

    .ani > span {
      color: $grey-2;
      &:hover {
        color: $primary-light;
      }
    }
    

    @media  (min-width: $screen-md) and (max-width: $screen-xlg) {
      margin: 0;
      border: 0;
      padding-right: 2.5rem;
    }

    @media (max-width: $screen-sm) {
      margin: 0;
      border: 0;
      padding: 0;
    }
  }
}
</style>
