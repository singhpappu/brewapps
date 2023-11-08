import { Router } from "express";
import BookController from "../controllers/book.controller";
import { Routes } from "../interfaces/routes.interface";

class ApiRoute implements Routes {
    public path = '/api/';
    public router = Router();
    public bookController = new BookController();
    
    constructor() {
        this.initRoutes();
    }

    private initRoutes() {
        this.router.post(`${this.path}book/store`, this.bookController.store);
        this.router.get(`${this.path}books`, this.bookController.listBooks);
        this.router.get(`${this.path}book/:id`, this.bookController.find);
        this.router.delete(`${this.path}book/:id`, this.bookController.deleteBook);
    }
}

export default ApiRoute;