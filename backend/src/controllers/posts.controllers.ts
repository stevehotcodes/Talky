import { v4 } from 'uuid'
import { Request, Response } from 'express'
import { ExtendedUser } from "../middlewares/verifyToken"
// import { IUserDetails, User } from "../interfaces/user.interfaces";
import DatabaseHelper from "../helpers/dbConnection.helper";
import { IPosts, IPostsWithUserDetails } from '../interfaces/posts.interface';

const dbInstance = DatabaseHelper.getInstance()






export const createNewPost = async (req: ExtendedUser, res: Response) => {
    try {
        let id = v4()
        let userID = req!.info?.id as string
        const { postImageUrl, postContent } = req.body

        let result = await dbInstance.exec("createNewPost", {
            id,
            postImageUrl,
            postContent,
            userID

        });

        console.log(result);
        return res.status(201).json("Posts created succesfully")


    } catch (error: any) {
        console.log(error)
        return res.status(500).json({ error: error.message })

    }

}


export const getAllPost = async (req: ExtendedUser, res: Response) => {
    try {

        const posts: IPosts[] = await (await dbInstance.exec('getAllPosts')).recordset
        if (!posts.length) {
            return res.status(404).json({ message: "No posts found" });
        }

        console.log(posts);
        return res.status(200).json(posts)


    } catch (error: any) {
        console.log(error)
        return res.status(500).json({ error: error.message })

    }

}

export const getPostsByUser = async (req: ExtendedUser, res: Response) => {
    try {

        let userID=req.info?.id as string
        const posts: IPostsWithUserDetails[] = await (await dbInstance.exec('getPostsByUser',{userID})).recordset
        if (!posts.length) {
            return res.status(404).json({ message: "No posts found" });
        }

        console.log(posts);
        return res.status(200).json(posts)


    } catch (error: any) {
        console.log(error)
        return res.status(500).json({ error: error.message })

    }

}




export const deletePost = async (req: ExtendedUser, res: Response) => {
    try 
    {
        const { id } = req.params
        const userID = req!.info?.id as string
        await dbInstance.exec('deletePost', { id, userID })
        return res.status(200).json('post deleted successful')
    }

    catch (error: any) {
        console.log(error)
        return res.status(500).json({ error: error.message })
    }
}