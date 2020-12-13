<template>
    <div>
        <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
            <div class="card h-100">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">{{user.nombre}}</h5>
                    <p class="card-text">{{user.email}}</p>
                </div>
                <div class="card-footer">
                    <small class="text-muted">Bienvenido</small>
                </div>
            </div>
        </div>
        </div> 
    </div>
</template>

<script>
export default {
    name: 'CardSpec'
    
}
</script>

<style scoped>

</style>