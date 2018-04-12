const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const data = require("./data.js");

const repiceSchema = new Schema ({
  title: String,
  level: {type: String, enum: ["Easy Peasy", "Amateur Chef", "UltraPro Chef"]},
  ingredients: [],
  cousine: String,
  dishType: {type: String, enum: ["Breakfast", "Dish", "Snack", "Drink", "Dessert", "Other"]},
  image: { type: String, default: "https://images.media-allrecipes.com/images/75131.jpg"},
  duration: Number,
  creator: {type: Date, default: Date.now }
})

const Recipe2 = mongoose.model("Recipe2", repiceSchema);

module.exports = Recipe2;