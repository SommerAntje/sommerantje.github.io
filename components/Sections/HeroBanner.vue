<template>
  <section class="hero">
    <div class="hero__content">
      <ImageResponsive
        imageURL="placeholder_pixel.jpg"
        classes="placeholder_lazyload"
        alt="lazyload pixel"
      />
      <ImageResponsive
        imageURL="profile.jpg"
        classes="hero__profile"
        alt="Antje Sommer"
      />
      <div class="hero__text">
        <h1>
          <span> Hi! I'm
            <a class="ani"
              target="_blank"
              rel="noopener"
              href="https://github.com/SommerAntje"
            ><span>Antje Sommer,</span></a>
            a Front-End Developer based in Hamburg, welcome to 
            <nuxt-link to="/posts" class="ani">
              <span>my Blog</span>
            </nuxt-link>
          </span>
        </h1>
        <h2>Scroll down to read more</h2>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
.placeholder_lazyload {
  visibility: hidden;
  position: absolute;
}
.hero {
  width: 100%;
  background: $background-primary;
  text-align: center;
  position: relative;

  @media (min-width: $screen-sm) {
    margin-bottom: 0;
  }

  @media (min-width: $screen-md) {
    margin-bottom: 0px;
    opacity: 0;
    animation: fadeinmove .5s ease;
    animation-delay: .5s;
    animation-fill-mode: forwards;
    overflow: hidden;
  }

  @media (min-width: $screen-lg) {
    margin-bottom: 0px;
    opacity: 0;
    animation: fadeinmove .5s ease;
    animation-delay: .5s;
    animation-fill-mode: forwards;
    overflow: hidden;
  }

  &__content {
    width: 100%;
    padding: 0;  
    max-width: 100%;
    vertical-align: middle;
  }

  &__profile {
    margin-bottom: 0;
    width: 100%;
    float: right;

    @media (min-width: $screen-sm) and (max-width: $screen-md) {
      width: 50%;
    }
  	 
    @media (min-width: $screen-md) {
      width: 50%;
    }

    @media (min-width: $screen-lg) {
      width: 50%;
    }
  }

  &__text {
    position: absolute;
    background: transparent;
    min-height: 74px;
    margin-bottom: 2rem;
    padding: 1rem;
    top: 20%;

    @media (max-width: $screen-xs) {
      position: relative;
      min-height: 74px;
      margin-bottom: 0;
      top: 0;
      padding: 2rem;
      margin-top: 1.75rem;
    }

    @media (min-width: $screen-xs) and (max-width: $screen-sm)  {
      position: relative;
      min-height: 74px;
      margin-bottom: 0;
      margin-top: 2.75rem;
    }

    @media (min-width: $screen-sm) {
      width: 48%;
      position: absolute;
      min-height: 0;
      margin-top: 0;
      top:4%;
    }
    
    @media (min-width: $screen-md) and (max-width: $screen-lg) {
      top: 0;
      padding: 2rem;
    }

    @media (min-width: $screen-lg) {
      top: 20%;
      padding: 2rem;
    }
  
    h1 {
      font-family: $font-family-headline;
      font-size: 3rem;
      text-align: center;
      padding: 0;
      -webkit-transition: background-color .3s ease-out;
      transition: background-color .3s ease-out;

      a {
        cursor: pointer;
        color: $primary;
      }

      @media (max-width: $screen-sm) {
        font-size: 2.5rem;
        margin-bottom: 0;
        text-align: center;
        padding: 0;
        margin-top:10%;
      }

      @media (min-width: $screen-md) {
        font-size: 4rem;
        margin-bottom: 0;
        margin-top: 5%;
        padding: 0;
      }

      @media (min-width: $screen-lg) {
        font-size: 4.5rem;
        margin-top: 0;
      }
    }
    h2 {
      font-family: $font-family-headline;
      font-size: 2rem;
      font-weight: 400;
      color: $primary;
      text-align: center;
      padding: 4% 0;
      letter-spacing: 3px;
      
    }
  }
}
</style>
