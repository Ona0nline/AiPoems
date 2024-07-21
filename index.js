// ----------------------Event listener-------------------------------
document.addEventListener("DOMContentLoaded", function() {
    let recipeFormElement = document.querySelector("#recipeForm");
    recipeFormElement.addEventListener("submit", recipeGen);
});

function recipeGen(event){
event.preventDefault();

let userInput = document.querySelector("#input")

let prompt = `Generate a recipe based off of ${userInput.value}`
let context = "You are a cozy home cook who recommends easy to follow home chef recipes.Your mission is to generate a recipe that can be made in under an hour. All your measurements are metric and you use ingredients readily availiable in South Africa. You dont add ingredients that the user does not have. You follow user instructions.You place the ingredients and the method in a neat format"
let ApiKey = "444t95o4afedabca0957fcb3605bfd54";
let ApiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${ApiKey}`

axios.get(ApiUrl).then(displayRecipe)
console.log(response.data.answer)
console.log(`Prompt: ${prompt}`)
console.log(`Context: ${context}`)



// --------------------------Ai implementation-------------------------
function displayRecipe(response){
 
  new Typewriter('#recipeOutput', {
  strings: `[${response.data.answer}]`,
  autoStart: true,
  delay: 20,
  cursor:""
});

}

}


