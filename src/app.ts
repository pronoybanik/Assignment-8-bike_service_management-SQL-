import express, { Application, Request, Response } from "express"
import cors from 'cors';
import router from "./app/routes";
import GlobalErrorHandler from "./app/middlewares/globalErrorHandler";
import ApiNotFound from "./app/middlewares/apiNotFound";


const app: Application = express();
app.use(cors());

// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get("/", (req: Request, res: Response) => {
    res.send({
        message: "Bike Servicing Management server"
    })
});


// routes
app.use('/api', router);


//global error handle
app.use(GlobalErrorHandler);
app.use(ApiNotFound);

export default app;
