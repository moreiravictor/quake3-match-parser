import express, { json } from 'express';
import routes from './adapter/http/config/routes.js';

class App {
    constructor() {
        this.express = express()
        this.middlewares()
        this.routes()
    }

    middlewares() {
        this.express.use(json())
    }

    routes() {
        this.express.use(routes)
    }
}

export default new App().express