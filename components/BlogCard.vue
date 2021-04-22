<template>
  <li class="blog">
    <nuxt-link 
      :to="localePath({ name: 'blog-slug', params: { slug: blog.name }})"
    >
      <ImageResponsive
        :imageURL="`blog/${blog.id}/_thumbnail.jpg`"
        :classes="'cardThumbnail'"
        :width="'952'"
        :height="'509'"
        :alt="blog.cardAlt" />
      <h3 class="blog__title">
        {{ blog.title }}
      </h3>
      <p class="blog__description">
        {{ blog.description }}
      </p>
    </nuxt-link>
  </li>
</template>

<script lang="js">
  export default {
    props: {
      blog: {
        type: Object
      }
    }
  }
</script>

<style lang="scss">
.cardThumbnail {
    transition: all ease .75s;
    opacity: .7;
    &[lazy='loaded'] {
      opacity: 1;
    }
  }
  .blog {

    @media (min-width: $screen-sm){
      padding-bottom: 0;

      &:last-child {
        margin-right: 0;
      }
    }

    &:hover {
      .blog__title {
        color: $primary;
      }
    }

    &__title {
      font-family: $font-family-headline;
      color: $grey-2;
      padding-top: 1rem;
      font-size: 2.5rem;
      transition: color .3s;
      line-height: 1.25em;
    }

    &__description {
      margin: 0;
      color: $grey-2;
    }
  }
</style>
