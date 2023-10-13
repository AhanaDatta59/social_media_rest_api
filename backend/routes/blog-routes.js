import express from 'express';
import { getAllBlogs } from '../controllers/blog-controller.js';

const blogRouter = express.Router();//grabbing the router

blogRouter.get("/", getAllBlogs);

export default blogRouter;

