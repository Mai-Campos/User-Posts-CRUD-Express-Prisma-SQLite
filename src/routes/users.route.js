import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient()

router.get('/', async(req, res) =>{
    try{
        const users = await prisma.user.findMany({include: {posts: true}});
        res.json(users);
    }catch(err){
        res.status(500).json({
            message: err.message
        });
    }
});

export default router;