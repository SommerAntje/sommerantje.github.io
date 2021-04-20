<template>
  <footer>
    <div class="footer__info">
      <div class="container footer__info-container">
        <div class="footer__copyright">
          © {{ year }} — <span v-html="$t('footer.credits')"/>
        </div>
        <a id="arrow-up" class="footer__top-page"  @click="scrollTop">
          <img alt="arrowup" src="~/assets/images/arrow_up.svg" />
        </a>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  computed: {
    year () {
      return new Date().getFullYear()
    }
  },
  methods: {
    scrollTop: function () {
      this.intervalId = setInterval(() => {
        if (window.pageYOffset === 0) {
          clearInterval(this.intervalId)
        }
        window.scroll(0, window.pageYOffset - 50)
      }, 20)
    }
  }
}
</script>

<style lang="scss">
.footer {
	&__info {
		background-color: $text-negative;
		padding: 1.5em 0;
  }
  
  &__info-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    flex-direction: column;

    @media (min-width: $screen-sm){
      flex-direction: row;
    }
  }

	&__copyright {
		text-align: center;
		@media (min-width: $screen-sm) {
			text-align: inherit;
		}
	}

	&__top-page {
		display: block;
		text-align: center;
		line-height: 1;
		-webkit-transition: 2s;
		-moz-transition: 2s;
    transition: 2s;
    
		@media (min-width: $screen-sm){
			text-align: right;
		}
	}
}
    // Button/Arrow
    #arrow-up {
      display: block;
      cursor: pointer;
      position: relative;
      margin: 0 auto;
      text-align: center;
      width: 30px;
      height: 30px;
      margin-bottom: 30px;
      border-radius: 50%;
      border: 1px solid #767676;
      padding: 6px;
        img {
          transition: .3s ease-in-out;
          width: 16px;
          height: 16px;
        }
        img:hover {
          opacity: 0.7;
          transition: .3s ease-in-out;
        }

      @media (max-width: $screen-sm){
        margin-top: 15px;
      }
    }
</style>

