<template>
    <section>
      <div class="skill-inner">
          <div class="skill-container">
            <div class="skill-box">
              <div class="skill-title">
                <div class="skill-img">
                  <img src="~/assets/images/code_tag.svg" alt="" class="skill-icon" />
                </div>
               <h3>Technologies</h3>
              </div>
                <p class="skill-content">#Vue.js #Tailwind CSS #Vuetify #Bootstrap #Rest API #GraphQL
                  #jQuery #Docker #Gitlab #nuxt.js #VS Code #npm #yarn
                </p>
            </div>
            <div class="skill-box">
              <div class="skill-title">
                <div class="skill-img">
                  <img src="~/assets/images/browser_coffee.svg" alt="" class="skill-icon" />
                </div>
                <h3>Experiences</h3>
              </div>
                <p class="skill-content">#Software Development #Jamstack architecture #micro frontend #microservice architecture 
                  #eCommerce Software #Unit Testing #CI/CD
                  #UI/UX Design 
                </p>
            </div>
            <div class="skill-box">
              <div class="skill-title">
                <div class="skill-img">
                  <img src="~/assets/images/experience_skills.svg" alt="" class="skill-icon" />
                </div>
                <h3>Languages</h3>
              </div>
                <p class="skill-content">#Html5 #CSS3 #SASS/LESS #JavaScript #TypeScript #Dutch #English #German
                </p>
            </div>
            <div class="skill-box">
              <div class="skill-title">
                <div class="skill-img">
                  <img src="~/assets/images/coffee_cup.svg" alt="" class="skill-icon" />
                </div>
                <h3>Soft Skills</h3>
              </div>
                <p class="skill-content">#Agile Software Development #Pair Porgramming #Mentoring #Creative #Leadership
                  #Approachability #Teamplayer #Patience #Ability to Take Criticism #Responsibility</p>
            </div>
         </div>
      </div>
    </section>
</template>
<script>
export default {};
</script>
<style lang="scss">
.skill-inner {
  margin-top: 5rem;
}
.skill-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  text-align: center;
  grid-gap: 1rem;
  font-size: 1.2rem;
}

.skill-box:hover > .skill-title:after,
.skill-box:hover > .skill-title:before {
  width: 35px;
}

.skill-box {
  padding: 1rem;
  cursor: pointer;
}

.skill-content {
  line-height: 1.7;
  letter-spacing: -.1px;
  font-size: 1.5rem;
}

.skill-box:hover .skill-img {
  transform: translateY(-10px)
}

.skill-title {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  position: relative;
}

.skill-title:after {
  content: '';
  position: absolute;
  bottom: 0;
  right: 50%;
  width: 0;
  height: 2px;
  border-radius: 2px 0 0 2px;
  background-color:  $primary;
  transition: .5s;
}

.skill-title:before {
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

.skill-img {
  width: 90px;
  height: 90px;
  position: relative;
  border-radius: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: .5s;
}

.skill-title h3 {
  color:  $primary;
  margin-top: 0.5rem;
}

.skill-icon {
  width: 100%;
  z-index: 2;
}

@media (max-width: $screen-md){
  .skill-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media  (min-width: $screen-sm) and (max-width: $screen-sm){
  .skill-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: $screen-xs){
  .skill-container {
    grid-template-columns: 1fr;
  }
}

</style>
