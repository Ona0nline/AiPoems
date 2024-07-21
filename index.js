function recipeGen(event){
  event.preventDefault();
  
new Typewriter('#recipeOutput', {
  strings: "Fry an egg",
  autoStart: true,
  delay: 20,
  cursor:""
});
}

let recipeFormElement = document.querySelector("#recipeForm");
recipeFormElement.addEventListener("submit",recipeGen);

