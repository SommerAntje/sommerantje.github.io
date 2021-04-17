<template>
    <section>
        <div class="contact-inner">
          <div class="contact-container">
            <div class="contact-box">
              <div class="contact-title">
                <div class="contact-img">
                  <img src="~/assets/images/bird_2.svg" alt="" class="contact-icon" />
                </div>
                <a
                  target="_blank"
                  rel="noopener"
                  href="https://twitter.com/AntjeSommer3"
                ><h3>Twitter</h3>
                </a>
              </div>
            </div>
              <div class="contact-box">
              <div class="contact-title">
                <div class="contact-img">
                  <img src="~/assets/images/linkSocial.svg" alt="" class="contact-icon" />
                </div>
                <a
                  target="_blank"
                  rel="noopener"
                  href="https://www.linkedin.com/in/antje-sommer"
                >
                <h3>LinkedIn</h3>
                </a>
              </div>
            </div>
              <div class="contact-box">
              <div class="contact-title">
                <div class="contact-img">
                  <img src="~/assets/images/github_2.svg" alt="" class="contact-icon" />
                </div>
                <a
                  target="_blank"
                  rel="noopener"
                  href="https://github.com/SommerAntje"
                ><h3>GitHub</h3>
                </a>
              </div>
            </div>
            <div class="contact-box">
              <div class="contact-title">
                <div class="contact-img">
                  <img src="~/assets/images/xing_3.svg" alt="" class="contact-icon" />
                </div>
                <a
                  target="_blank"
                  rel="noopener"
                  href="https://www.xing.com/profile/Antje_Sommer9/cv"
                ><h3>Xing</h3>
                </a>
              </div>
            </div>
          </div>
      </div>
    </section>
</template>
<script>
export default {};
</script>
<style lang="scss">
.contact-inner {
  margin-top: 5rem;
}
.contact-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  align-items: center;
  text-align: center;
  grid-gap: 1rem;
  padding: 1rem 80px;
  font-size: 1.2rem;
}

.contact-box:hover > .contact-title:after,
.contact-box:hover > .contact-title:before {
  width: 35px;
}

.contact-box {
  padding: 1rem;
  cursor: pointer;
}

.contact-box:hover .contact-img {
  transform: translateY(-10px)
}

.contact-title {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  position: relative;
}

.contact-title:after {
  content: '';
  position: absolute;
  bottom: 0;
  right: 50%;
  width: 0;
  height: 2px;
  border-radius: 2px 0 0 2px;
  background-color: $primary;
  transition: .5s;
}

.contact-title:before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  border-radius: 0 2px 2px 0;
  background-color:  $primary;
  transition: .5s;
}

.contact-img {
  width: 90px;
  height: 90px;
  position: relative;
  border-radius: 45px;
  background-color:  $primary-light;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: .5s;
}

.contact-img:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 90px;
  background:  $primary;
  border-radius: 45px 0 0 45px;
}

.contact-title h3 {
  color:  $primary;
  margin-top: 0.5rem;
}

.contact-icon {
  width: 50px;
  z-index: 2;
}

@media (max-width: $screen-md){
  .contact-container {
    grid-template-columns: repeat(2, 1fr);
    padding: 2rem 50px;
  }
}

@media  (min-width: $screen-sm) and (max-width: $screen-sm){
  .contact-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: $screen-xs){
  .contact-container {
    grid-template-columns: 1fr;
  }
}
</style>