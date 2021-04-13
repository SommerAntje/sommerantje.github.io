<template>
    <section>
       <p class="about">
        I am Antje, a passionate Frontend Developer with longtime experience 
        in UI/UX Design and Ecommerce, based in Hamburg.
        Currently diving into the magical world of Vue.js and Typescript while working remotely for dpa-IT!
      </p>
      <Timeline />
    </section>
</template>
<script>
import Timeline from '~/components/Timeline'
export default {
  components: {Timeline}
};
</script>
<style lang="scss">
.about {
  line-height: 1.7;
  letter-spacing: -.1px; 
  padding-top: 5rem;
}
</style>
