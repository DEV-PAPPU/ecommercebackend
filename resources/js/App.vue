<template>
    <div>
        <Toast/>
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

<style scoped>

</style>
