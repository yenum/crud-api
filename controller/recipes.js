import {v4 as uuidv4} from 'uuid'

let recipes = [];

export const getRecipes = (req, res) => {
    res.send(recipes);
}

export const createRecipes = (req, res) => {
    const recipe = req.body;

    recipes.push({ ...recipe , id:uuidv4() })

    res.send('New Recipe has been created on the database')
}

export const getRecipe = (req, res) => {
    const { id }= req.params;

    const foundRecipe = recipes.find((recipe) => recipe.id === id)
    res.send(foundRecipe);
}

export const deleteRecipe = (req, res) => {
    const { id }= req.params;

    recipes = recipes.filter((recipe) => recipe.id !== id);
     res.send('Recipe has been deleted from database')
}

export const updateRecipe = (req, res) => {
    const { id }= req.params;
    const {name, cookTime, cuisine} = req.body
    const recipe = recipes.find((recipe) => recipe.id === id)

    if (name) {
        recipe.name = name
    }

    if (cookTime) {
        recipe.cookTime = cookTime
    }

    if (cuisine) {
        recipe.cuisine = cuisine
    }

    
    res.send('Recipe has been updated');
}