<template>
    <div>
        <seccion-menu></seccion-menu>

        <seccion-banner></seccion-banner>    
    </div>
</template>

<script>
import SeccionBanner from '../components/SeccionBanner.vue'
import SeccionMenu from '../components/SeccionMenu.vue'

export default {
    name: 'Start',
    components: { SeccionMenu, SeccionBanner },
    
}
</script>

<style scoped>

</style>