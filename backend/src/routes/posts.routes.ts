import { Router } from "express";

import { accountRequired } from "../middlewares/verifyToken";
import { createNewPost, deletePost, getAllPost, getPostsByUser } from "../controllers/posts.controllers";




const postsRouter = Router()

postsRouter.post('/new' ,accountRequired,createNewPost)
postsRouter.get('/all' ,getAllPost)
postsRouter.delete("/:id",accountRequired,deletePost)
postsRouter.get('/user',accountRequired,getPostsByUser)





export default postsRouter