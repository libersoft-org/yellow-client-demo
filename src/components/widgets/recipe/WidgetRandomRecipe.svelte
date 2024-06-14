<script>
  

import {onMount} from "svelte";

let ingredients = [];
let imagePath;
let textContent;
let categorytextContent;
let areatextContent;
let descriptiontextContent;
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
  descriptiontextContent = meal.strInstructions;
  videoURL = meal.strYoutube
  
  ingredientsList = ingredients;

}
  
  
</script>


 <div class="recipe">
  <div class="imgbox">
   <img class="image" src="{imagePath}" alt="Recipe Image">
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
   <div class="description">{ descriptiontextContent }</div>
   <div class="video"><a href="{ videoURL }" target="_blank">Video</a></div>
  </div>
 </div>
<button on:click={ randomRecipe }>Random Recipe</button>
