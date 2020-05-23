<template>
  <section class="hero">
    <div class="hero__content">
      <ImageResponsive
        imageURL="placeholder_pixel.jpg"
        classes="placeholder_lazyload"
        alt="lazyload pixel"
      />
      <ImageResponsive
        imageURL="profile_square.jpg"
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
            a self-taught Frontend Developer, welcome to 
            <nuxt-link to="/posts" class="ani">
              <span>my Blog</span>
            </nuxt-link>
          </span>
        </h1>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@200&display=swap');

.placeholder_lazyload {
  visibility: hidden;
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

    @media (min-width: $screen-lg) {
     height: 100vh;
    }
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
      position: absolute;
      top: 0;
    }
  }

  &__text {
    position: absolute;
    background: transparent;
    min-height: 74px;
    margin-bottom: 2rem;
    padding: 1rem;
    top: 39%;

    @media (max-width: $screen-xs) {
      position: relative;
      min-height: 74px;
      margin-bottom: 0;
      top: 0;
      margin-top: 2.75rem;
    }

    @media (min-width: $screen-xs) and (max-width: $screen-sm)  {
      position: relative;
      min-height: 74px;
      margin-bottom: 0;
      margin-top: 2.75rem;
      top: 12%;
    }

    @media (min-width: $screen-sm) {
      width: 48%;
      position: absolute;
      min-height: 0;
      margin-bottom: 0;
    }

    @media (min-width: $screen-md) {
      left: 4%;
      width: 43%;
      top: 21%;
      padding: 4rem;
    }

    @media (min-width: $screen-lg) {
      left: 8%;
      width: 35%;
      top: 20%;
      padding: 4rem;
    }
  
    h1 {
      font-family: 'Raleway', Arial, sans-serif;
      font-size: 3.5rem;
      text-align: center;
      padding: 0;
      -webkit-transition: background-color .3s ease-out;
      transition: background-color .3s ease-out;

      a {
        cursor: pointer;
      }

      @media (min-width: $screen-sm) {
        margin-bottom: 0;
        font-size: 3.5rem;
        text-align: center;
        padding: 0;
      }

      @media (min-width: $screen-md) {
        margin-bottom: 0;
        padding: 0;
      }

      @media (min-width: $screen-lg) {
        font-size: 4.5rem;
      }
    }
  }
}

</style>
