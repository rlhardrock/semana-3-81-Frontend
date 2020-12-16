<template>
    <div>
        <nav class="navbar navbar-light bg-dark">
            <div class="container-fluid">
         
                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button class="btn btn-dark" type="button"> </button>
                </div>
                <form class="d-flex">
                <button 
                @click.prevent="logout"
                class="btn btn-warning btn-lg"
                type="buttom">Log Out</button>

                </form>
            </div>
        </nav>
        <div class="container">
            
            <ul class="nav justify-content-center">
                <li class="nav-item">
                    <a class="nav-link"><h3>{{user.nombre}}</h3></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link"><h3>{{user.rol}}</h3></a>
                </li>
                <!-- <div class="spinner-border text-primary" role="status"></div> -->
                <li class="nav-item">
                    <a class="nav-link"><h3>{{user.email}}</h3></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link"><h3>{{user.status}}</h3></a>
                </li>
            </ul>
        </div>
        
    </div>
</template>

<script>

import VueJwtDecode from 'vue-jwt-decode'

export default {
    name: 'HomeRun',
  
    data(){
        return{
            user:{
                
            }
        }
    },
    methods:{
        getUserDetails(){
            let user = localStorage.getItem('user');
            let token = localStorage.getItem('jwt');
            if(token){
                this.user = JSON.parse(user);
            }
        },
        logout(){
            localStorage.removeItem('jwt');
            localStorage.removeItem('user');
            this.$router.push('/');
        },
        getUserData(){
            let token = localStorage.getItem('jwt')
            let user = VueJwtDecode.decode(token);
            this.user = user;
        }
    },
    created(){
        this.getUserDetails();
    }
}
</script>

<style scoped>

</style>