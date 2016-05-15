'use strict';

function addIngredient(recipe, name, amounts) {
  recipe[name] = amounts;
  return recipe;
}

function removeIngredient(recipe, name) {
  delete recipe[name];
  return recipe;
}

function updateIngredient(recipe, name, amounts) {
  recipe[name] = amounts;
  return recipe;
}

function readRecipe(recipe) {
  for(var key in recipe){
    console.log("this recipe calls for " + recipe[key] + " of " + key);
  }
}
