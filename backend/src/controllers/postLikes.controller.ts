import {v4 }from 'uuid'
import { Request,Response } from 'express'
import { ExtendedUser } from "../middlewares/verifyToken"
// import { IUserDetails, User } from "../interfaces/user.interfaces";
import DatabaseHelper from "../helpers/dbConnection.helper";


const dbInstance=DatabaseHelper.getInstance()


export const addLikeToPost =async(req:ExtendedUser,res:Response)=>{
    try {   
            let id=v4()
            let userID=req.info?.id as string
            let {postID}=req.params

            let result= await dbInstance.exec('addLikeToPost',{id,userID,postID})

            return res.status(201).json({message:"post was liked"});
            
        
    } catch (error:any) {
        return res.status(500).json({error:error.message})
    }
}

export const getLikesofAPost=async(req:ExtendedUser,res:Response)=>{
    try {   
            
         
            let {postID}=req.params

            let likes= (await dbInstance.exec('getLikesofAPost',{postID})).recordset

            return res.status(201).json({message:likes.length});
            
        
    } catch (error:any) {
        return res.status(500).json({error:error.message})
    }
}