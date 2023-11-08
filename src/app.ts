import express, { Router } from "express"
import * as dotevnv from "dotenv"
import cors from "cors"
import helmet from "helmet"
import ApiRoute from "./routes/api.route"
import { Routes } from "./interfaces/routes.interface"

dotevnv.config()

if (!process.env.PORT) {
    console.log(`No port value specified...`)
}


class App {
    public app: express.Application;
    public port: string | number;
    public router = Router();
    constructor(routes: Routes[]) {
        this.port = parseInt(process.env.PORT as string) || 7000;
        let app = express();
        this.app = app;
        this.initMiddleware();
        this.initRoutes(routes);
    }

    initMiddleware() {
        this.app.use(express.json())
        this.app.use(express.urlencoded({ extended: true }))
        this.app.use(cors())
        this.app.use(helmet())
    }

    initRoutes(routes: Routes[]) {
        this.app.get("/debug-sentry", function mainHandler(req, res) {
            throw new Error("My first Sentry error!");
        });
        // this.app.use(`/api/book/store`, function mainHandler(req, res) {
        //     throw new Error("My first Sentry error!");
        // });
        routes.forEach(route => {
            this.app.use('/', route.router);
        });
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server is listening on port ${this.port}`)
        })
    }
}


const app = new App([
    new ApiRoute()
])

app.listen();