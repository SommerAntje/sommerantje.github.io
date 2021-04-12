<template>
  <footer>
    <div class="footer__info">
      <div class="container footer__info-container">
        <div class="footer__copyright">
          © {{ year }} — <span v-html="$t('footer.credits')"/>
        </div>
        <a id="arrow-up" href="#top" class="footer__top-page">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 4" aria-hidden="true" style="width: 16px; transform: rotate(270deg);">
              <polygon fill="#35A8E0" points="0 2.33 4.72 2.33 3.53 3.53 4 4 6 2 4 0 3.53 0.47 4.72 1.67 0 1.67 0 2.33"/>
          </svg>
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
      position: relative;
      margin: 0 auto;
      text-align: center;
      width: 30px;
      height: 30px;
      margin-bottom: 30px;
      border-radius: 50%;
      border: 1px solid #767676;
      padding-top: 7px;
        svg {
          transition: .3s ease-in-out;
        }
        svg:hover {
          opacity: 0.7;
          transition: .3s ease-in-out;
        }

      @media (max-width: $screen-sm){
        margin-top: 15px;
      }
    }
</style>

