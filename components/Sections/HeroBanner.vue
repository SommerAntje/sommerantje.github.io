<template>
  <section class="hero">
    <div class="hero__content">
      <ImageResponsive
        imageURL="placeholder_pixel.jpg"
        classes="placeholder_lazyload"
        alt="lazyload pixel"
      />
      <ImageResponsive
        imageURL="profile_picture_blue.jpg"
        classes="hero__profile"
        alt="Antje Sommer"
      />
      <div class="hero__text">
        <h1>
          <span> Hi! I'm
            <a
              target="_blank"
              rel="noopener"
              href="https://github.com/SommerAntje"
            >Antje Sommer,</a>
            welcome to my blog.
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
@import url('https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap');

.placeholder_lazyload {
  visibility: hidden;
}
.hero {
  width: 100%;
  background: $background-primary;
  text-align: center;
  position: relative;

  @media (min-width: $screen-sm) {
    margin-bottom: 7.2rem;
  }

  @media (min-width: $screen-md) {
    height: 488px; 
  }

  &__content {
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    padding: 2.4rem;
    max-width: 100%;
    vertical-align: middle;

    @media (min-width: $screen-sm) {
     max-width: $container-md;
     padding-top: 1rem;
    }

    @media (min-width: $screen-md) {
     max-width: $container-lg;
     padding-top: 1rem;
    }

    @media (min-width: $screen-lg) {
     max-width: $container-lg;
     padding-top: 1rem;
    }

  }

  &__profile {
    margin-bottom: 0;
    border: 5px solid $primary;
    border-radius: 50%;
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
    top: 39%;

    @media (max-width: $screen-xs) {
      position: relative;
      min-height: 74px;
      margin-bottom: 0;
      padding: 0;
      top: 0;
      margin-top: 2.75rem;
    }

    @media (min-width: $screen-xs) and (max-width: $screen-sm)  {
      position: relative;
      min-height: 74px;
      margin-bottom: 0;
      padding: 0;
      margin-top: 2.75rem;
    }

    @media (min-width: $screen-sm) {
      width: 48%;
      position: absolute;
      min-height: 0;
      margin-bottom: 0;
    }

    @media (min-width: $screen-md) {
      width: 40%;
    }

    @media (min-width: $screen-lg) {
      width: 30%;
    }
  
    h1 {
      font-family: 'Indie Flower', cursive;
      font-size: 3.5rem;
      text-align: center;
      padding: 0;
      -webkit-transition: background-color .3s ease-out;
      transition: background-color .3s ease-out;
    
      @media (min-width: $screen-md) {
        margin-bottom: 0;
        padding: 2rem;
        text-align: left;
      }
    }
  }
}

</style>
