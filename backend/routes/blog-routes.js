import express from 'express';
import { addBlog, getAllBlogs } from '../controllers/blog-controller.js';

const blogRouter = express.Router();//grabbing the router

blogRouter.get("/", getAllBlogs);
blogRouter.post("/add",addBlog);

export default blogRouter;

