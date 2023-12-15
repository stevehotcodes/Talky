import {v4 }from 'uuid'
import { Request,Response } from 'express'
import { ExtendedUser } from "../middlewares/verifyToken"
// import { IUserDetails, User } from "../interfaces/user.interfaces";
import DatabaseHelper from "../helpers/dbConnection.helper";
import { IPosts } from '../interfaces/posts.interface';


const dbInstance=DatabaseHelper.getInstance()


export const addLikeToPost =async(req:ExtendedUser,res:Response)=>{
    try {   
            let id=v4()
            let userID=req.info?.id as string
            let {postID}=req.params
            //check whether the post exist if not prevent like
            let post:IPosts=(await dbInstance.exec('getOnePost',{id:postID})).recordset[0]
            console.log(post)
    
            if(!post){
                return res.status(404).json({message:"the post does not exist"})
            }

            let result= await dbInstance.exec('addLikeToPost',{id,userID,postID})

            return res.status(201).json({message:"post was liked"});
            
        
    } catch (error:any) {
        return res.status(500).json({error:error.message})
    }
}

export const getLikesofAPost=async(req:ExtendedUser,res:Response)=>{
    try {   
            
         
            let {postID}=req.params
            //check whether the post is deleted
            let post:IPosts=(await dbInstance.exec('getOnePost',{id:postID})).recordset[0]
            console.log(post)
    
            if(!post){
                return res.status(404).json({message:"the post does not exist,so cannot get the likes"})
            }

            let likes= (await dbInstance.exec('getLikesofAPost',{postID})).recordset

            return res.status(201).json({likes:likes});
            
        
    } catch (error:any) {
        return res.status(500).json({error:error.message})
    }
}