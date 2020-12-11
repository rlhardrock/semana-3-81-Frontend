<template>
    <div>
        <nav class="navbar navbar-light bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand">PG-WEB 2</a>
                <form class="d-flex">
                <button 
                @click.prevent="logout"
                class="btn btn-warning btn-lg" 
                type="buttom">Log Out</button>

                </form>
            </div>
        </nav>

        <div class="container">
            <p>
                {{user.nombre}}
            </p>
            <p>
                {{user.email}}
            </p>
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