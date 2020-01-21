<template>
    <div class="sidenav-container">
        <div class="sidenav-backdrop"></div> 
        <div class="sidenav">
            <Navigation/>
            <LangSwitcher/>
        </div>
    </div>
</template>
<script>
import Navigation from '~/components/Navigation';
import LangSwitcher from '~/components/LangSwitcher';
export default {
    components: {
        Navigation
    }
}
</script>
<style lang="scss">
.sidenav-container {
    height: 100%;
    width: 100%;
    .sidenav {
        height: auto;
        background-color: #6c5cff;
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
}
</style>