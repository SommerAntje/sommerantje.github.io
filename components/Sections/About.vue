<template>
    <section>
       <h3 class="padding">Welcome to my tech blog! </h3>
       <p class="about">
        I am Antje, a former graphic designer by profession and self-taught front-end developer based in Hamburg.
        With a focus on online shop software development, I have worked as UI/UX designer and front-end developer in e-commerce for many years. 
        <br /> <br />As an autodidact I decided to follow my passion for consistent learning and to specialize focusing on vue.js, Jamstack architecture and MVP development concept. Apart from being a nerd, 
        I am also an autodidactic guitarist (bloody beginner level) and enthusiastic about learning dutch.
       <br />
      </p>
      <h3>Work Experience</h3>
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
.padding {
  padding-top: 4rem;
  padding-bottom: 2rem;
}
.about {
  line-height: 1.7;
  letter-spacing: -.1px; 
}
h3 {
  font-family: $font-family-headline;
  color: rgba(53,168,224,1);
  font-size: 1.75rem;
}
</style>
