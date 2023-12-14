import { Request, RequestHandler, Response } from "express";
// import { registerUserSchema } from "../validators/validators";
// import Connection from "../dbhelpers/dbhelpers";
import { isEmpty } from "lodash";
import { v4 } from "uuid";
import bcrypt from "bcrypt";
import mssql from "mssql";
import { dbConfig } from "../config/dbConfig";
import jwt from "jsonwebtoken";
import { registerUserSchema } from "../validators/registrationSchema";
import DatabaseHelper from "../helpers/dbConnection.helper";
// import { IUserDetails, User } from "../interfaces/userInterface";
import { ExtendedUser } from "../middlewares/verifyToken"
import { IUserDetails, User } from "../interfaces/user.interfaces";

const dbInstance=DatabaseHelper.getInstance()


export const signUp = async (req: Request, res: Response) => {
    try {
      let { userName, fullName, email, password } = req.body;
  
      let { error } = registerUserSchema.validate(req.body);
  
      if (error) {
        return res.status(404).json({ error: error.details });
      }
      const emailTaken = (
        await dbInstance.query(`SELECT * FROM users where email = '${email}'`)
      ).recordset;
  
      if (!isEmpty(emailTaken)) {
        return res.json({ error: "This email is already in use" });
      }
  
      let id = v4();
      const hashedPwd = await bcrypt.hash(password, 5);
  
      let result = await dbInstance.exec("signUpuser", {
        id,
        fullName,
        userName,
        email,
        password: hashedPwd,
      });
      console.log(result);
      if((await result).rowsAffected[0] === 0){
        return res.status(404).json({
            message: "Something went wrong, user not registered"
        })
    }else{
        return res.status(201).json({
            message: "Acccount created  successfully"
        })
    }
  
     
    } catch (error) {
      console.log(error);
    }
  };


  export const loginUser = async (req:Request,res:Response)=>{
    try {
        
        let{email,password}=req.body;

        let user= (await dbInstance.exec('getUserbyEmail',{email,password}))
        console.log(user)

    if (!user.recordset.length) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const { password: storedPassword, ...rest } = user.recordset[0];
    console.log(rest)

    const correctPwd = await bcrypt.compare(password, storedPassword);
    console.log("this the value of the compared password",correctPwd)
    if (!correctPwd) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    const token = jwt.sign(rest, process.env.SECRET_KEY as string, {
        expiresIn: "34000s",
      });
      console.log(token);

      return res.status(200).json({ message: "LogIn successful", token,email,role:rest.role});

    } catch (error) {
        
    }
  }

  export const getAUserById =async(req:ExtendedUser,res:Response)=>{
    try {
          const {id}=req.params
           let user:IUserDetails=(await dbInstance.exec('getAUserById',{id})).recordset[0]
           if(!user){
              return res.status(404).json({message:"No user found"});
           }   
           
           return res.status(200).json(user) 
    } catch (error:any) {
        return res.status(500).json({error:error.message})
      
    }
  }

  export const getSignedInUser =async(req:ExtendedUser,res:Response)=>{
    try {
          const id=req!.info?.id! as string
          console.log(req!.info?.id)
           let user:IUserDetails=(await dbInstance.exec('getAUserById',{id})).recordset[0]
           if(!user){
              return res.status(404).json({message:"No user found"});
           }   
          console.log(user)           
           return res.status(200).json(user) 
    } catch (error:any) {
        return res.status(500).json({error:error.message})
      
    }
  }

  //gets all users but not the signed user
  export const getAllUsers=async(req:ExtendedUser,res:Response)=>{
    try
    {
       const userIdToDelete =req.info?.id;
       let users:IUserDetails[]=(await dbInstance.exec('getAllUsers')).recordset
       console.log(users);
       if(!users.length){
          return res.status(404).json({message:"no users found"})
       }
       
       users = users.filter(user => user.id !== userIdToDelete);
       console.log("users without the log in user",users)
      

       return res.status(200).json(users)

    }
    catch(error:any){
      return res.status(500).json({error:error.message})

    }
  }


  export const updateUser =async (req:ExtendedUser,res:Response)=>{
    try{
        let id=req.info?.id! as string
        let { userName, email,bio, profileImageUrl}=req.body
        if(!userName ||!email ||!bio){
            return res.status(400).json({message: 'required values are missing kindly check again'})
        }
        let user:User= await (await dbInstance.exec('getAUserById', {id})).recordset[0]
        if(!user){
            return res.status(404).json({message: 'The user does not exist'});
  
         }
      
        await dbInstance.exec('updateUser',{id,userName, email,bio,profileImageUrl})
        return res.status(200).json({message:"the user's details was updated successfully "})
  
    }
    catch(error:any){
            return res.status(500).json({message:error.message})
    }
  }