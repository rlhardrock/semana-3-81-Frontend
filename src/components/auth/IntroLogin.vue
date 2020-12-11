<template>
    <div>
        <form class="row g-3">
            <div class="col-auto">
                <label for="staticEmail2" class="visually-hidden">Identifier</label>
                <input 
                v-model="login.identifier"
                type="text" 
                class="form-control" 
                id="staticEmail2" 
                placeholder="Identifier">
            </div>
            <div class="col-auto">
                <label for="inputPassword2" class="visually-hidden">Password</label>
                <input 
                v-model="login.password"
                type="password" 
                class="form-control" 
                id="inputPassword2" 
                placeholder="Password">
            </div>
            
            <div class="col-auto">
                <button
                @click.prevent="loginUser"
                type="submit" 
                class="btn btn-success mb-3">Authenticate</button>
            </div>
            <pre>{{login}}</pre>
        </form>
    </div>
</template>

<script>

import Swal from 'sweetalert2'

export default {
    name: 'IntroLogin',
    data(){
        return{
            login:{
                identifier:'',
                password:''
            }
        }
    },
    methods: {
        async loginUser () {
            try{
                let response = await this.$http.post('/api/user/login', this.login);
                let token = response.data.tokenReturn;
                let user = response.data.user;

                localStorage.setItem('jwt',token);
                localStorage.setItem('user', JSON.stringify(user));
                if(token){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Touch Down',
                        showConfirmButton: false,
                        timer: 1500,
                        backdrop: `rgba(0,250,0,0.6)`
                        })
                    this.$router.push('/home');
                }
            }catch (e){
                Swal.fire({
                title: 'Encroachment !',
                width: 600,
                padding: '3em',
                timer: 2500,
                backdrop: `rgba(0,0,250,0.6)`
                })
            }
        }
    }
}

</script>

<style scoped>

</style>