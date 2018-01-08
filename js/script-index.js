$(document).ready( function(){

		//función ocultar flecha 
	$(".js-back").hide();

	//función para impirmir nueva receta

	function printNews(){
		$(".receta").html("<b>NUEVAS RECETAS</b>");
	};
   
	printNews(); // con esto se ejecuta la función 


	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);

	var recetas = recipesArray['highlighted'];

	$.each(recipesArray,function(i,recetas){ // la función each es un metodo para recorrer de la data. Es una función que busca el indice de la variable que se solicita en este caso highlighted.
		if(recetas.highlighted === true){
			console.log(recetas);
		}

	});
});
/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
	console.log('Recipes:', recipesArray);
}

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	console.log('Voy a pintar la receta:recetas', recipe);
}



/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
}


