import express from 'express'
import cors from 'cors'
import { globalErrorHandler } from './app/middleware/globalErrorHandler.js';
import { notFoundHandler } from './app/middleware/notFoundHandller.js';
import router from './app/routes/index.js';

const app = express();

// cors middleware
const corsOptions = {
    origin: ["http://localhost:5173"],
    credentials: true,
};
app.use(cors(corsOptions));

// json parser
app.use(express.json());

// application routes
app.use("/api", router);

// root route response 
app.get('/', (req, res) => {
    res.send("Welcome to content sharing backend")
})

// route not found handle
app.all("*", notFoundHandler);

// global error handler
app.use(globalErrorHandler);


export default app;