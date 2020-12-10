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
        </form>

    <pre>
        {{login}}
    </pre>

    </div>
</template>

<script>
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
                    this.$route.push('/home');
                }
            }catch{
                console.log(err.response);
            }
        }
    }
}
</script>

<style scoped>

</style>