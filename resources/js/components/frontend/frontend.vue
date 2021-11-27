<template>
    <div>
          <!-- Other Routes -->
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Main App Component mounted.')
        }
    }
</script>

<style  scoped>

@import "../../../../public/website/css/style";
@import "../../../../public/website/css/custom";
@import "../../../../public/website/css/tailwind";

</style>
