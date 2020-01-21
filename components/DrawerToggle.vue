<template>
    <div role="button" class="drawer-toggle">
        <div class="bar"></div> 
        <div class="bar"></div> 
        <div class="bar"></div>
    </div>  
</template>
<script>
export default {
}
</script>
<style lang="scss">
.drawer-toggle {
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    justify-content: space-around;
    height: 50%;
    width: 35px;
    cursor: pointer;

    .bar {
        width: 90%;
        height: 4px;
        background-color: $primary;
        margin-bottom: .8rem;
        border-radius: 20px;
    }
}
@media (min-width: $screen-sm) {
    .drawer-toggle {
        display: none;
    }
}
</style>