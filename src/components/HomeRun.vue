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
        <div class="container" background-image="linear-gradient(to bottom, rgba(255,255,0,0.5), rgba(0,0,255,0.5))">
            
            <ul class="nav justify-content-center">
                <li class="nav-item">
                    <a class="nav-link"><h3>{{user.nombre}}</h3></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link"><h3>schwarzenegger</h3></a>
                </li>
                <!-- <div class="spinner-border text-primary" role="status"></div> -->
                <li class="nav-item">
                    <a class="nav-link"><h3>{{user.email}}</h3></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link"><h3>{{user.profesion}}</h3></a>
                </li>
            </ul>
        </div>
        
    </div>
</template>

<script>


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
        }
    },
    created(){
        this.getUserDetails();
    }
}
</script>

<style scoped>

</style>