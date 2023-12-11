import {v4 }from 'uuid'
import { Request,Response } from 'express'
import { ExtendedUser } from "../middlewares/verifyToken"
// import { IUserDetails, User } from "../interfaces/user.interfaces";
import DatabaseHelper from "../helpers/dbConnection.helper";

const dbInstance=DatabaseHelper.getInstance()


export const  createComment =async ()=>{
    
}
