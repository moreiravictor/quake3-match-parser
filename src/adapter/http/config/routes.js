import express from 'express'
import quakeController from '../controller/quakeController.js'
const routes = express.Router();

routes.get('/games', quakeController.getAll)
routes.get('/games/:game_id', quakeController.getById)

export default routes
