<script>
  

import {onMount} from "svelte";

let ingredients = [];
let imagePath;
let textContent;
let categorytextContent;
let areatextContent;
let description = [];
let videoURL;
let ingredientsList = [];

onMount(async () => {
    await randomRecipe();
});

async function randomRecipe() {

  const r = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
  const data = await r.json();
  const meal = data.meals[0];

  imagePath = meal.strMealThumb;
  textContent = meal.strMeal;
  
  for (let i = 1; i <= 20; i++) if (meal[`strIngredient${i}`]) ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`);
  
  categorytextContent = `Category: ${meal.strCategory}`;
  
  areatextContent = `Area: ${meal.strArea}`;
  description = meal.strInstructions.split('\n');
  /*console.log('description');
  console.log(description);*/
  videoURL = meal.strYoutube
  
  ingredientsList = ingredients;

}
  
  
</script>

<style>
  
  .recipe {
 display: flex;
 flex-direction: column;
 border: 1px solid #333;
 padding: 10px;
 background-color: #FFF;
 border-radius: 10px;
 width: 500px;
 box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.recipe .imgbox {
 display: flex;
 flex-direction: row;
 margin-bottom: 10px;
}

.recipe .imgbox .image {
 margin-right: 10px;
 max-width: 200px;
 border-radius: 10px;
}

.recipe .imgbox .title {
 font-size: 20px;
 font-weight: bold;
 margin-bottom: 10px;
}

.recipe .descbox .title {
 font-size: 16px;
 font-weight: bold;
 margin-bottom: 10px;
}

.recipe .descbox .ingredients {
 text-align: left;
 list-style-type: none;
}

.recipe .descbox .ingredients ul li {
 font-size: 1em;
 margin: 5px 0;
}

.recipe .descbox .description {
 font-size: 1em;
 color: #555;
 text-align: left;
}

.recipe .descbox .video {
 display: block;
 margin-top: 20px;
 font-size: 1.1em;
 text-decoration: none;
}

  
  
</style>


 <div class="recipe">
  <div class="imgbox">
   <img class="image" src="{imagePath}" alt="Recipe Image" >
   <div class="categories">
    <div class="title">{ textContent }</div>
    <div class="category">{ categorytextContent }</div>
    <div class="area">{ areatextContent }</div>
   </div>
  </div>
  <div class="descbox">
   <div class="title">Ingredients:</div>
   <ul class="ingredients">
     {#each ingredientsList as ingredient}
       <li>{ingredient}</li>
     {/each}     
   </ul>
   <div class="title">Instructions:</div>
   <div class="description">
     {#each description as line}
       <p>{line}</p>
     {/each}
   </div>
   <div class="video"><a href="{ videoURL }" target="_blank">Video</a></div>
  </div>
 </div>
<button on:click={ randomRecipe }>Random Recipe</button>
