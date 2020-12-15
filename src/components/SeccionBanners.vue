<template>
    <div>
    <div>
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
      <!-- <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel"> -->
        <ol class="carousel-indicators">
            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"></li>
            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"></li>
            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4"></li>
            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5"></li>
        </ol>
       
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="@/assets/neonlights/neon01.jpg"  class="bd-placeholder-img bd-placeholder-img-lg d-block w-100"  height="550">

                    <div class="carousel-caption d-none d-md-block"> </div>
            </div>
            <div class="carousel-item">
                <img src="@/assets/neonlights/neon02.jpg"  class="bd-placeholder-img bd-placeholder-img-lg d-block w-100"  height="550">
                
                    <div class="carousel-caption d-none d-md-block"> </div>
            </div>
            <div class="carousel-item"> 
                <img src="@/assets/neonlights/neon03.jpg"  class="bd-placeholder-img bd-placeholder-img-lg d-block w-100"  height="550">
                    
                    <div class="carousel-caption d-none d-md-block"> </div> 
            </div> 
            <div class="carousel-item"> 
                <img src="@/assets/neonlights/neon04.jpeg"  class="bd-placeholder-img bd-placeholder-img-lg d-block w-100"  height="550">
                    
                    <div class="carousel-caption d-none d-md-block"> </div>
            </div>
            <div class="carousel-item"> 
                <img src="@/assets/neonlights/neon05.jpg"  class="bd-placeholder-img bd-placeholder-img-lg d-block w-100"  height="550">
                    
                    <div class="carousel-caption d-none d-md-block"> </div>
            </div> 
            <div class="carousel-item"> 
                <img src="@/assets/neonlights/neon06.jpg"  class="bd-placeholder-img bd-placeholder-img-lg d-block w-100"  height="550">
                    
                    <div class="carousel-caption d-none d-md-block"> </div>
            </div> 
        </div>

        <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-bs-slide="prev"> 
            <span class="carousel-control-prev-icon" aria-hidden="true"></span> 
            <span class="visually-hidden">Back</span>
            
        </a> 
        <a class="carousel-control-next" href="#carouselExampleCaptions" role="button"
        data-slide="next"> 
            <span class="carousel-control-next-icon" aria-hidden="true"></span> 
            <span class="visually-hidden">Next</span>
            
        </a> 
    </div>  
    </div>
    
    </div>
</template>

<script>

export default {
    name: 'SeccionBanners'
    
}
</script>

<style scoped>

</style>