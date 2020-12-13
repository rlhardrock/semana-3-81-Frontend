<template>
    <div>

        <seccion-menu></seccion-menu>
        <home-run></home-run>
        <seccion-banner></seccion-banner>
        <!-- <hello-world></hello-world> -->

    </div>
</template>

<script>

/* import HelloWorld from '@/components/HelloWorld.vue' */
import SeccionMenu from '@/components/SeccionMenu.vue'
import SeccionBanner from '@/components/SeccionBanner.vue'
import HomeRun from '../components/HomeRun.vue'

export default {
    components: { /* HelloWorld, */ SeccionMenu, SeccionBanner, HomeRun },
}
</script>

<style scoped
>

</style>
