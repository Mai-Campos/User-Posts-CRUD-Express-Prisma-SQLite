import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

//Get all posts
router.get('/', async (_req, res) => {
    const posts = await prisma.post.findMany({ include: { author: true } });
    res.json(posts);
});

//Get post by id
router.get('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const post = await prisma.post.findUnique({ where: { id } });
    post ? res.json(post) : res.status(404).json({ message: "Post not found" });
});



//Create post
router.post('/', async (req, res) => {
    try {
        const { title, content, authorId } = req.body;
        const createPost = await prisma.post.create({ data: { title, content, authorId } });
        res.status(201).json(createPost);
    } catch (err) {
        res.status(400).json({ error: "Error creating Post" });
    };
});

//Update post
router.put('/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { title, content } = req.body;
        const updatedPost = await prisma.post.update({ where: { id }, data: { title, content } });
        res.json(updatedPost);
    } catch (err) {
        res.status(404).json({ error: "Error updating Post" });
    };
});

//Delete post
router.delete('/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        await prisma.post.delete({ where: { id } });
        res.sendStatus(204);
    } catch (err) {
        res.status(404).json({ error: "Error deleting Post" })
    };
});

export default router;