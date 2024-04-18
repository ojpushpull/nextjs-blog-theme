export default function CardColumn() {

return( 
<html>
<div class="columns">
<div class="column card-column">
  <div class="card card-sedan">
    <img class="card__img" src="images/icon-sedans.svg" onerror="this.style.display='none'"/>
    <h2 class="card__title">Project</h2>
    <p class="card__description">Ima project a put here.</p>
    <a href="#" class="card__cta">Learn More</a>
  </div> 
</div> 
<div class="column card-column">
  <div class="card card-suv">
    <img class="card__img" src="images/icon-suvs.svg" onerror="this.style.display='none'"/>
    <h2 class="card__title">More projectss</h2>
    <p class="card__description">  
      Another project gonna pull here</p>
    <a href="#" class="card__cta">Learn More</a>
  </div> 
</div> 
<div class="column card-column">
  <div class="card card-luxury">
    <img class="card__img" src="images/icon-luxury.svg" onerror="this.style.display='none'"/>
    <h2 class="card__title">Surprisess</h2>
    <p class="card__description">More Projects.</p>
    <a href="#" class="card__cta">Learn More</a>
  </div> 
</div> 
</div> 
</html>
);
}

