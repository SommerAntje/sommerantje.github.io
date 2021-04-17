<template>
    <section>
       <p class="contact">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Velit euismod in pellentesque massa placerat duis. Praesent elementum facilisis leo vel.
        Pellentesque elit eget gravida cum sociis. Augue lacus viverra vitae congue eu consequat. 
        Aliquam sem fringilla ut morbi tincidunt augue interdum velit. 
        Orci dapibus ultrices in iaculis nunc sed augue lacus. 
        Sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. 
        Arcu ac tortor dignissim convallis aenean et tortor at. 
        Sit amet cursus sit amet dictum sit amet. Consectetur libero id faucibus nisl tincidunt. 
        Non curabitur gravida arcu ac tortor dignissim convallis aenean et. 
        Sed cras ornare arcu dui vivamus. Elementum integer enim neque volutpat ac tincidunt vitae semper quis.
        Nibh sed pulvinar proin gravida hendrerit lectus. Semper risus in hendrerit gravida. 
        Montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada.
      </p>
        <div class="inner">
          <div  class="header">
            <h1>Contact me</h1>
          </div>
        <div class="skill-container">
          <div class="skill-box">
            <div class="skill-title">
              <div class="img">
                 <img src="~/assets/images/bird.svg" alt="" class="skill-icon" />
               </div>
               <h3>Twitter</h3>
             </div>
             <p>Montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada</p>
          </div>
            <div class="skill-box">
            <div class="skill-title">
              <div class="img">
                 <img src="~/assets/images/linkSocial.svg" alt="" class="skill-icon" />
               </div>
               <h3>linkedIn</h3>
             </div>
             <p>Montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada</p>
          </div>
            <div class="skill-box">
            <div class="skill-title">
              <div class="img">
                 <img src="~/assets/images/github.svg" alt="" class="skill-icon" />
               </div>
               <h3>Github</h3>
             </div>
             <p>Montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada</p>
          </div>
            <div class="skill-box">
            <div class="skill-title">
              <div class="img">
                 <img src="~/assets/images/xing.svg" alt="" class="skill-icon" />
               </div>
               <h3>Xing</h3>
             </div>
             <p>Montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada</p>
          </div>
        </div>
      </div>
    </section>
</template>
<script>
export default {};
</script>
<style lang="scss">
.contact {
  line-height: 1.7;
  letter-spacing: -.1px; 
  padding-top: 5rem;
}

.inner {
  padding-top: 20px;
}

.header {
  text-align: center;
  color: #000;
  padding: 1rem;
  position: relative;
}

.header:after {
  position: absolute;
  content: '';
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 4px;
  width: 100px;
  background-color: #2ecc71;
}

.skill-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  align-items: center;
  text-align: center;
  grid-gap: 1rem;
  padding: 1rem 80px;
  font-size: 1.2rem;
}

.skill-box {
  padding: 1rem;
  color: #ddd;
  cursor: pointer;
}

.skill-title {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
}

img {
  width: 90px;
  height: 90px;
  position: relative;
  border-radius: 45px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.skill-title h3 {
  color: #000;
  margin: 0.5rem;
}

.skill-icon {
  width: 50px;
}
</style>