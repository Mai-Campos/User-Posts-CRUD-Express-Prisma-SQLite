import express from 'express'
import { PORT } from './config.js'
import { PrismaClient } from '@prisma/client'
import userRoutes from "./routes/users.route.js";
import postRoutes from './routes/posts.route.js'
import {errorHandler} from './middleware/errorHandler.js'

const app = express();
const prisma = new PrismaClient();

app.use(express.json()); // Middleware para leer JSON

app.get('/', (_req, res) => {
    res.json({
        message: "Api funcionando con Express + Prisma 🚀"
    });
});

app.use("/users", userRoutes);
app.use("/posts",postRoutes);
app.use(errorHandler);


app.listen(PORT, () => console.log(`Server on port: ${PORT}`));
