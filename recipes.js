const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const data = require("./data.js");
const Recipe2 = require("./models/Recipe2.js");

mongoose
  .connect("mongodb://localhost/recipeApp")
  .then(() => {
    console.log("Connected to Mongo!");
    Recipe2.collection.drop().then(()=>console.log('dropped'));

/*     Recipe2.insertMany(data)
    .then(recipes=>{ console.log(recipes); })
    .catch(err=>console.log(err)) */

  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });
  
  /* 
  Recipe2.create( { 
    title: 'Asian Glazed Chicken Thighs',
    level: 'Amateur Chef',
    ingredients: ['1/2 cup rice vinegar', '5 tablespoons honey', '1/3 cup soy sauce (such as Silver Swan®)', '1/4 cup Asian (toasted) sesame oil', '3 tablespoons Asian chili garlic sauce', '3 tablespoons minced garlic', 'salt to taste', '8 skinless, boneless chicken thighs'],
    cousine: 'Asian',
    dishType: ['Dish'],
    image: 'https://images.media-allrecipes.com/userphotos/720x405/815964.jpg',
    duration: 40,
    creator: 'Chef LePapu'
  })
  .then((recipe) => {
    console.log(`El nombre de la receta es ${recipe.title}`)
  })
  .catch((err) => console.log(err))
  
  */
 
 
  Recipe2.insertMany(data)
 .then(recipes=>{
   console.log(recipes);
  })
  .catch(err=>console.log(err))
  
 
 
 Recipe2.updateMany({ title: "Rigatoni alla Genovese"}, { duration: 100 } );
 