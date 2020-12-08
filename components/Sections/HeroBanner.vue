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
            a passionate Frontend Developer - welcome to 
            <nuxt-link to="/posts" class="ani">
              <span>my Blog</span>
            </nuxt-link>
          </span>
        </h1>
        <h3>Scroll down to see more</h3>
        <div id="arrow-down">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 4" aria-hidden="true" style="width: 16px; transform: rotate(90deg);">
              <polygon fill="#35A8E0" points="0 2.33 4.72 2.33 3.53 3.53 4 4 6 2 4 0 3.53 0.47 4.72 1.67 0 1.67 0 2.33"/>
          </svg>
        </div>
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
      margin-top: 2.75rem;
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
      font-family: 'Raleway ExtraLight', Arial, sans-serif;
      font-size: 3rem;
      text-align: center;
      padding: 0;
      -webkit-transition: background-color .3s ease-out;
      transition: background-color .3s ease-out;

      a {
        cursor: pointer;
      }

      @media (min-width: $screen-sm) {
        font-size: 2.5rem;
        margin-bottom: 0;
        text-align: center;
        padding: 0;
        margin-top:15%;
      }

      @media (min-width: $screen-md) {
        font-size: 4rem;
        margin-bottom: 0;
        padding: 0;
      }

      @media (min-width: $screen-lg) {
        font-size: 4.5rem;
        margin-top: 0;
      }
    }
    h3 {
      font-family: 'Raleway ExtraLight', Arial, sans-serif;
      font-size: 2rem;
      color: $primary;
      text-align: center;
      padding: 4% 0;
      text-transform: uppercase;
      letter-spacing: 4px;
      
      @media (min-width: $screen-sm) {
        font-size: 1.5rem;
      }
    }
 
    // Animation
    @keyframes jump {
      0% { top: 0; } 50% { top: 50px; } 100% { top: 0; }
    }

    // Button/Arrow
    #arrow-down {
      position: relative;
      margin: 0 auto;
      text-align: center;
      animation: jump 5s infinite;
      width: 30px;
      height: 30px;
      margin-bottom: 30px;
        svg {
          transition: .3s ease-in-out;
      }
        svg:hover {
          opacity: 0.7;
          transition: .3s ease-in-out;
      }
    }
  }
}
</style>
