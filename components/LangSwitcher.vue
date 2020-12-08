<template>
  <select v-model="selected" @change="changeLocale()" class="lang-switcher">
    <option :value="selected" selected>{{ $i18n.locale }}</option>
    <option v-for="locale in $i18n.locales" v-if="locale.code !== $i18n.locale" :key="locale.code" >
      {{ locale.code }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'LangSwitcher',
  data () {
    return {
      selected: ''
    }
  },
  methods: {
    changeLocale () { 
      this.$router.push(this.switchLocalePath(this.selected));
    } 
  }
}
</script>
<style lang="scss">
select {
  border-radius: 0;
  color: $primary;
  padding: 1.25rem 3rem 1rem 1rem;
  border: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: url("data:image/svg+xml, <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 136.059 90.71'><polygon fill='rgb(50, 170, 225)' points='0,22.678 90.707,22.678 45.353,68.032'/></svg>") no-repeat;
  background-size: 12px;
  background-position: calc(100% - 1rem) center;
  background-repeat: no-repeat;
  text-transform: uppercase;
  transition: border-color .3s;
  cursor: pointer;

  &:hover {
    border-color: $primary;
    option {
      color: $primary;
    }

    option:selected {
      color: $text-negative;
      @media (min-width: $screen-sm) {
        color: $primary;
      }
    }
  }
  
  &:focus {
    outline: none;
     option {
      color: $primary;
    }

    option:selected {
      color: $text-negative;
      @media (min-width: $screen-sm) {
        color: $primary;
      }
    }
  }
}
.lang-switcher {
    display: none;
    color: $text-negative;
    @media (min-width: $screen-sm) {
      color: $primary;
    }
    
   &:focus {
    outline: none;
    color: $text-negative;
    @media (min-width: $screen-sm) {
      color: $primary;
    }
  }
}
</style>
