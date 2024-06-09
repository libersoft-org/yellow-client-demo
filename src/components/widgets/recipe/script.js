document.addEventListener('DOMContentLoaded', () => {
 fetch('https://www.themealdb.com/api/json/v1/1/random.php').then(response => response.json()).then(data => {
  const meal = data.meals[0];
  const imagePath = meal.strMealThumb;
  const ingredients = [];
  for (let i = 1; i <= 20; i++) if (meal[`strIngredient${i}`]) ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`);
  document.querySelector('.recipe .imgbox .image').src = imagePath;
  document.querySelector('.recipe .imgbox .title').textContent = meal.strMeal;
  document.querySelector('.recipe .imgbox .category').textContent = `Category: ${meal.strCategory}`;
  document.querySelector('.recipe .imgbox .area').textContent = `Area: ${meal.strArea}`;
  document.querySelector('.recipe .descbox .description').textContent = meal.strInstructions;
  document.querySelector('.recipe .descbox .video').innerHTML = '<iframe class="video" width="640" height="480" src="' + meal.strYoutube + '" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
  const ingredientsList = document.querySelector('.recipe .descbox .ingredients');
  ingredientsList.innerHTML = '';
  ingredients.forEach(ingredient => {
   const li = document.createElement('li');
   li.textContent = ingredient;
   ingredientsList.appendChild(li);
  });
 }).catch(error => console.error('Error:', error));
});
