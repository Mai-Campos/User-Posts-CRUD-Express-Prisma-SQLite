import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

//Get all posts
router.get('/', async (_req, res) => {
    try {
        const posts = await prisma.post.findMany({include:{author:true}});
        res.json(posts);
    } catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});

//Get post by id
router.get('/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const post = await prisma.post.findUnique({where:{id}});
        post ? res.json(post) : res.status(404).json({message: "Post not found"});
    } catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});



//Create post
router.post('/', async (req, res) => {
    try {
        const {title, content, authorId} = req.body;
        const createPost = await prisma.post.create({data:{title, content, authorId}});
        res.status(201).json(createPost);
    } catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});

//Update post
router.put('/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const {title, content} = req.body;
        const updatedPost = await prisma.post.update({where:{id}, data:{title,content}});
        res.json(updatedPost);
    } catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});

//Delete post
router.delete('/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const deletedPost = await prisma.post.delete({where:{id}});
        res.sendStatus(204);
    } catch (err) {
        res.status(404).json({
            message: err.message
        });
    }
});

export default router;