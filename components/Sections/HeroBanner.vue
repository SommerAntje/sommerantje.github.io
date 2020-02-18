<template>
  <section class="hero">
    <div class="hero__content">
      <ImageResponsive
        imageURL="profile_picture.png"
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
}
@media (min-width: 992px) {
  .hero {
    height: 488px;
  }
}
@media (min-width: 768px) {
  section {
    margin-bottom: 7.2rem;
  }
}
.hero__content {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: 2.4rem;
  max-width: 100%;
  vertical-align: middle;
}

@media (min-width: 1140px) {
  .hero__content {
    max-width: 1000px;
  }
}
@media (min-width: 992px) {
  .hero__content {
    max-width: 1000px;
  }
}
@media (min-width: 768px) {
  .hero__content {
    max-width: 990px;
  }
}

@media (min-width: 1140px) {
  .hero__text {
    width: 30%;
  }
}
@media (min-width: 992px) {
  .hero__text {
    width: 40%;
  }
}
@media (min-width: 768px) {
  .hero__text {
    width: 48%;
    position: absolute;
    min-height: 0;
    margin-bottom: 0;
  }
}
.hero__text {
  position: absolute;
  background: #fff;
  min-height: 74px;
  margin-bottom: 2rem;
  padding: 1rem;
  top: 55%;
  width: 27%;
  left: 21%;
  @media (max-width: 375px) {
    top: 68%;
    width: 77%;
    left: -6%;
  }
}

.hero__profile {
  margin-bottom: 0;
  border: 5px solid #32aae1;
  border-radius: 50%;
  width: 50%;
  position: relative;
  @media (max-width: 375px) {
    width: 100%;
  }
}

img {
  max-width: 100%;
  height: auto;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
}
</style>
