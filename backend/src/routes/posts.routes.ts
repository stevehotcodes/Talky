import { Router } from "express";

import { accountRequired } from "../middlewares/verifyToken";
import { createNewPost, deletePost, getAllPost } from "../controllers/posts.controllers";




const postsRouter = Router()

postsRouter.post('/new' ,accountRequired,createNewPost)
postsRouter.get('/all' ,getAllPost)
postsRouter.delete("/:id",accountRequired,deletePost)





export default postsRouter