export default function CardColumn() {

return( 
<html>
<div class="columns">
<div class="column card-column">
  <div class="card card-sedan">
    <img class="card__img" src="images/icon-sedans.svg" onerror="this.style.display='none'"/>
    <h2 class="card__title">Sedans</h2>
    <p class="card__description">Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city 
      or on your next road trip.</p>
    <a href="#" class="card__cta">Learn More</a>
  </div> 
</div> 
<div class="column card-column">
  <div class="card card-suv">
    <img class="card__img" src="images/icon-suvs.svg" onerror="this.style.display='none'"/>
    <h2 class="card__title">SUVs</h2>
    <p class="card__description">  
      Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation 
      and off-road adventures.</p>
    <a href="#" class="card__cta">Learn More</a>
  </div> 
</div> 
<div class="column card-column">
  <div class="card card-luxury">
    <img class="card__img" src="images/icon-luxury.svg" onerror="this.style.display='none'"/>
    <h2 class="card__title">Sedans</h2>
    <p class="card__description">Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury 
      rental and arrive in style.</p>
    <a href="#" class="card__cta">Learn More</a>
  </div> 
</div> 
</div> 
</html>
);
}

