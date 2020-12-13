<template>
    <div>

        <seccion-menu></seccion-menu>
        <home-run></home-run>
       
        <seccion-banner></seccion-banner>
        <hello-world></hello-world>
         <seccion-modal></seccion-modal>

    </div>
</template>

<script>

import HelloWorld from '@/components/HelloWorld.vue'
import SeccionMenu from '@/components/SeccionMenu.vue'
import SeccionBanner from '@/components/SeccionBanner.vue'
import HomeRun from '@/components/HomeRun.vue'
import SeccionModal from '@/components/SeccionModal.vue'

export default {
    components: { HelloWorld, SeccionMenu, SeccionBanner, HomeRun, SeccionModal },
}
</script>

<style scoped>

</style>
