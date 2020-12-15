<template>
    <div class="login">
        <intro-login></intro-login>
    </div>
</template>

<script>

import IntroLogin from '@/components/auth/IntroLogin.vue'

export default {  
    components: { IntroLogin },
    
}
</script>

<style scoped>
.login {
    background: #1a2a6c;
    background: -webkit-linear-gradient(to top, #fdbb2d, #b21f1f, #1a2a6c); 
    background: linear-gradient(to top, #fdbb2d, #b21f1f, #1a2a6c);
    align-content : center;
    padding: 25px 10px 15px 400px;

}

</style>