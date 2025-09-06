import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient()

//Get all users
router.get('/', async (req, res) => {
        const users = await prisma.user.findMany({ include: { posts: true } });
        res.json(users);
});

//Get user by id
router.get('/:id', async (req, res) => {
        const id = parseInt(req.params.id);
        const user = await prisma.user.findUnique({ where: { id }, include: { posts: true } });
        user ? res.json(user) : res.status(404).json({
            message: "User Not found"
        });
   
});

//Get posts by authors
router.get('/:authorName/posts', async (req, res) => {
    
        const authorName = req.params.authorName;
        const posts = await prisma.user.findMany({where:{name:authorName},select:{posts: true}});
        res.json(posts);
   
   
});

//Create user
router.post('/', async (req, res) => {
   
        const { name, email } = req.body;
        const createdUser = await prisma.user.create({
            data: {
                name,
                email
            }
        });
        res.status(201).json(createdUser);
    
});

//Update user
router.put('/:id', async (req, res) => {
   
        const id = parseInt(req.params.id);
        const { name, email } = req.body;
        const updatedUser = await prisma.user.update({ where: { id }, data: { name, email } });
        res.json(updatedUser);
   
});

//Delete user
router.delete('/:id', async (req, res) => {
   
        const id = parseInt(req.params.id);
        const userDeleted = await prisma.user.delete({where:{id}});
        res.status(201);
    
});



export default router;