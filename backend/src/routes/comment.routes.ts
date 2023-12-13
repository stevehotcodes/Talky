import { Router } from "express";
import { createComment, deleteComment, getAllComments } from "../controllers/comments.controllers";
import { accountRequired } from "../middlewares/verifyToken";





const commentRouter = Router()

commentRouter.post('/new/:postID',accountRequired,createComment)
commentRouter.get('/:postID',getAllComments)
commentRouter.delete('/one/:id', accountRequired,deleteComment)




export default commentRouter