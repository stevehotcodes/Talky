import {v4 }from 'uuid'
import { Request,Response } from 'express'
import { ExtendedUser } from "../middlewares/verifyToken"
// import { IUserDetails, User } from "../interfaces/user.interfaces";
import DatabaseHelper from "../helpers/dbConnection.helper";

const dbInstance=DatabaseHelper.getInstance()


export const  createComment =async (req:ExtendedUser, res:Response)=>{
try {
    const id =v4();
    const userID=req!.info?.id as string
    const {postID}=req.params

    const{commentContent}=req.body

    let result=await dbInstance.exec('createComment',{id,userID,commentContent,postID})
    console.log(result)
    return res.status(201).json({message:"comment added"})
    
} catch (error:any) {
    return res.status(500).json({error:error.message})
}
    
    
}

export const getAllComments= async(req:Request, res:Response)=>{
    try {
         const {postID}=req.params
         let comments=(await dbInstance.exec('getAllComments',{postID})).recordset;
         if(!comments){return res.status(404).json({message:"no comments"})};

         return res.status(200).json(comments)
    } catch (error) {
        return res.status(500).json({error:error})
        
    }
}

export const deleteComment=async (req:ExtendedUser, res:Response)=>{
    try {
           let userID=req!.info?.id as string
           let {id}=req.params
           let comment=await dbInstance.exec('getCommentById',{id})
           console.log(comment)
           if(!comment){return res.status(404).json({message:"comment not found"})}
           
           //there must be an if condition to check if the user is the one
            let result =await dbInstance.exec("deleteComment",{id,userID})
             console.log(result)
            return res.status(200).json({message:"comment deleted"})
           
        //    let result =await dbInstance.exec("deleteComment",{id,userID})

    } catch (error) {
        return res.status(500).json({error:error})
    }
}