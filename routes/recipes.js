import express from 'express'
import {createRecipes, getRecipes, getRecipe, deleteRecipe, updateRecipe} from '../controller/recipes.js'

const router = express.Router()

router.get('/', getRecipes)

router.post('/', createRecipes)

router.get('/:id', getRecipe)

router.delete('/:id', deleteRecipe)

router.patch('/:id', updateRecipe)



export default router;