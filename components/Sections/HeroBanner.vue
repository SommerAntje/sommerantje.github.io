<template>
  <section class="hero">
    <div class="hero__content">
      <ImageResponsive
        imageURL="profile_picture.jpg"
        classes="hero__profile"
        alt="Antje Sommer"
      />
      <div class="hero__text">
        <h1>
          <span
            id="hero-text-content"
            class="hero-text--typing"
          > Hi! I'm
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
.hero {
  width: 100%;
  background: #fff;
  text-align: center;
  position: relative;

  @media (min-width: $screen-md) {
    height: 488px; 
  }

  @media (min-width: $screen-sm) {
    margin-bottom: 7.2rem;
  }

  &__content {
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    padding: 2.4rem;
    max-width: 100%;
    vertical-align: middle;

    @media (min-width: $screen-lg) {
     max-width: $container-lg;
    }

    @media (min-width: $screen-md) {
     max-width: $container-lg;
    }

    @media (min-width: $screen-sm) {
     max-width: $container-md;
    }

    img {
      max-width: 100%;
      height: auto;
      -webkit-transition: all 0.3s ease;
      transition: all 0.3s ease;
    }
  }

  &__profile {
    margin-bottom: 0;
    border: 5px solid #32aae1;
    border-radius: 50%;
    width: 50%;
    position: relative;

    @media (max-width: $screen-xs) {
      width: 100%;
    }
  }

  &__text {
    position: absolute;
    background: #fff;
    min-height: 74px;
    margin-bottom: 2rem;
    padding: 1rem;
    top: 55%;
    width: 27%;
    left: 21%;

    @media (min-width: $screen-lg) {
      width: 30%;
    }

    @media (min-width: $screen-md) {
      width: 40%;
    }

    @media (min-width: $screen-sm) {
      width: 48%;
      position: absolute;
      min-height: 0;
      margin-bottom: 0;
    }

    @media (max-width: $screen-xs) {
      top: 68%;
      width: 77%;
      left: -6%;
    }

    h1 {
      margin-bottom: 0;
      padding: .7rem 2rem;
      text-align: left;
      -webkit-transition: background-color .3s ease-out;
      transition: background-color .3s ease-out;
    
      @media (min-width: $screen-sm) {
        font-size: 3rem;
      }
    }
  }
}
</style>
