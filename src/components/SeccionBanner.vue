<template>
    <div>
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
      <!-- <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel"> -->
        <ol class="carousel-indicators">
            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"></li>
            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"></li>
            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4"></li>
        </ol>
       
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="@/assets/img/BigData.jpg"  class="bd-placeholder-img bd-placeholder-img-lg d-block w-100"  height="550">

                    <div class="carousel-caption d-none d-md-block"> 
                        <h3>Data Science</h3>
                
                    </div>
            </div>
            <div class="carousel-item">
                <img src="@/assets/img/DataScience.jpg"  class="bd-placeholder-img bd-placeholder-img-lg d-block w-100"  height="550">
                
                    <div class="carousel-caption d-none d-md-block"> 
                        <h3>Big Data</h3> 
                        
                    </div> 
            </div>
            <div class="carousel-item"> 
                <img src="@/assets/img/MachineLearning.png"  class="bd-placeholder-img bd-placeholder-img-lg d-block w-100"  height="550">
                    
                    <div class="carousel-caption d-none d-md-block"> 
                        <h3>Machine Learning</h3> 
                            
                    </div> 
            </div> 
            <div class="carousel-item"> 
                <img src="@/assets/img/ForeCasting.jpg"  class="bd-placeholder-img bd-placeholder-img-lg d-block w-100"  height="550">
                    
                    <div class="carousel-caption d-none d-md-block"> 
                        <h3>ForeCasting</h3> 
                            
                    </div> 
            </div>
            <div class="carousel-item"> 
                <img src="@/assets/img/Robotics.png"  class="bd-placeholder-img bd-placeholder-img-lg d-block w-100"  height="550">
                    
                    <div class="carousel-caption d-none d-md-block"> 
                        <h3>Robotics</h3> 
                            
                    </div> 
            </div> 
        </div>

        <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-bs-slide="prev"> 
            <span class="carousel-control-prev-icon" aria-hidden="true"></span> 
            <span class="visually-hidden">Previous</span>
            
        </a> 
        <a class="carousel-control-next" href="#carouselExampleCaptions" role="button"
        data-slide="next"> 
            <span class="carousel-control-next-icon" aria-hidden="true"></span> 
            <span class="visually-hidden">Next</span>
            
        </a> 
    </div>  

    </div>
</template>

<script>

export default {
    name: "SeccionBanner"
}
</script>

<style scoped>

</style>