$(document).ready( function(){

		//función ocultar flecha 
	$(".js-back").hide();

	//función para impirmir nueva receta

	function printNews(){
		$(".receta").html("<b>NUEVAS RECETAS</b>");
	printNews(); // con esto se ejecuta la función 
	renderHighlightedRecipes(recipesArray);
	renderActivities(activities);
 };
	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	

	/*var recetas = recipesArray['highlighted'];

	$.each(recipesArray,function(i,recetas){ // la función each es un metodo para recorrer la data. Es una función que busca el indice de la variable que se solicita en este caso highlighted.
		if(recetas.highlighted === true){
			console.log(recetas);
		}

	});*/
});
/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
	/*console.log('Recipes:', recipesArray);*/
	
	for(var i = 0; i < recipesArray.length; i++){ //recorre los datos del objeto, en este caso la data  
		if(recipesArray[i].highlighted === true){// condición que la key highlighted el valor es verdarero.
			renderRecipe(recipesArray[i]); //se ejetuca si es verdad la función que esta más abajo
		}
	}
}

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) { //para ejecutar esta función debe cumplirse la condición de la función renderHighlightedRecipes
	$('.list-recipes').append(
			"<a class='item-recipe' href='#'>" +
				"<span class='attribution'>" +
					"<span class='title-recipe'>" + recipe.title + "</span>" +
					"<span class='metadata-recipe'>" +
						 "<span class='author-recipe'>" + recipe.source.name + "</span>" +
						"<span class='bookmarks-recipe'>" +
							"<span class='icon-bookmark'></span>" +
						"</span>" +
					"</span>" +
				"</span>" +
				"<img src='img/recipes/640x800/" + recipe.name + ".jpg'>" +
			"</a>"
		);
		/*console.log('Voy a imprimir la receta: v', recipe);*/
	}



/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	/*console.log('Activities: ', activitiesArray);*/

	for(var i = 0; i < activitiesArray.length; i++){ //recorre la data de activities
		console.log(i);

		renderActivity(i) // llamo la función renderActivity y se le entrega el producto de el arreglo de activities
	}

}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	$("list-recipes")
}




