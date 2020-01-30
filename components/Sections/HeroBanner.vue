<template>
   <section class="hero">
       <div class="hero__content">
    
           <img src="https://dummyimage.com/600x400/32aae1/fff.png&text=Antje+IMG" alt="Imagen de Marina" class="hero__profile" />
      
       <div class="hero__text">
		 <h1 id="hero-text" style="background: white;">
			 <span id="hero-text-content" class="hero-text--typing"> Hi! I'm 
			 	<a target="_blank" rel="noopener" href="https://twitter.com/MarinaAisa">Antje Sommer</a>
			 </span>
		 </h1>
	 </div>
       </div>
   </section>
</template>


<script>
export default {

}
</script>

<style lang="scss">
 .hero {
    width: 100%;
    background: #161618;
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
.container, .hero .hero__content {
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    padding-left: 2.4rem;
    padding-right: 2.4rem;
    max-width: 100%;
}

.hero .hero__content {
    vertical-align: middle;
    overflow: hidden;
}
@media (min-width: 1140px) {
    .container, .hero .hero__content {
        max-width: 1000px;
    }
}
@media (min-width: 992px) {
    .container, .hero .hero__content {
        max-width: 1000px;
    }
}
@media (min-width: 768px) {
    .container, .hero .hero__content {
        max-width: 990px;
    }
}
@media (min-width: 375px) {
    .container, .hero .hero__content {
        max-width: 768px;
    }
}


@media (min-width: 1140px) {
    .hero .hero__text {
        width: 30%;
    }
}
@media (min-width: 992px) {
    .hero .hero__text {
        width: 40%;
    }
}
@media (min-width: 768px) {
    .hero .hero__text {
        width: 48%;
        position: absolute;
        min-height: 0;
        margin-bottom: 0;
    }
}
.hero .hero__text {
    position: absolute;
    background: #fff;
    min-height: 74px;
    margin-bottom: 2rem;
    padding: 0;
    top: 58%;
    width: 20%;
}

.hero .hero__profile {
    float: right;
    margin-bottom: 0;
}

.hero .hero__profile {
    width: 50%;
    margin-bottom: -8px;
}

img {
    max-width: 100%;
    height: auto;
}

</style>