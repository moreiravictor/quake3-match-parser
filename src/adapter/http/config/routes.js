import express from 'express'
import quakeController from '../quakeController.js'
const routes = express.Router();

routes.get('/matches', quakeController.getAll)
routes.get('/matches/:match_id', quakeController.getById)

export default routes
