<template>
    <div class="sidenav-container">
        <div v-if="toggleSidebar" class="sidenav-backdrop" @click="$store.dispatch('nav/toggleSidebar')"></div> 
       <transition name="slide-side">
            <div v-if="toggleSidebar" class="sidenav">
                <Navigation/>
                <LangSwitcher/>
            </div>
        </transition>
    </div>
</template>
<script>
import Navigation from '~/components/Navigation';
export default {
    components: {
        Navigation
    },
     computed: {
        toggleSidebar() {
            return this.$store.getters['nav/toggleSidebar']
        }
    }
}
</script>
<style scoped lang="scss">
    .sidenav-container {
        height: 100%;
        width: 100%;
        
    }
    .sidenav {
        height: auto;
        background-color: $text-negative;
        z-index: 10000;
        box-sizing: border-box;
        padding: 30px;
    }
    .sidenav-backdrop {
        height: 100%;
        background-color: rgba(0,0,0,.7);
        z-index: 1000;
    }
    .sidenav,
    .sidenav-backdrop {
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
    }
    .slide-side-enter-active,
    .slide-side-leave-active {
        transition: all 0.3s ease-out;
    }
    .slide-side-enter,
    .slide-side-leave-to {
        transform: translateY(-100%);
    }
</style>