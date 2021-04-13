<template>
    <section>
       <p class="about">
        Hello and welcome to my tech blog! <br /> I am Antje a graphic designer, autodidact and Front-End Developer with passion. 
        <br /> Taking online shop development to the next level, I've been working as UI/UX Designer and Front-End Developer in E-Commerce for many years.
         Following my passion for constant learning and upgrading my front end skills, I am currently working in a scrum team at the dpa-IT Service GmbH
        where I am diving into the magical world of Vue.js and Typescript.
        Apart from that I am also an autodidactic guitarist (bloody beginner level) and enthusiastic about learning dutch!
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
