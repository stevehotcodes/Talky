export interface InewUserDetails{
    fullName:string
    userName:string
    email:string
    password:string
}

export interface IUserLogincredntials{
    email:string
    password:string
}
export interface IloggedUser{
    email:string
    token:string
}
export interface IflashMessage {
    type: 'error' | 'success' | 'info'
    message:string
  }

  
export interface InewPostDetails{
    postContent:string
    postImageUrl:string
 }

 export interface InewPostSuccessMessage{
    message:string
    postId:string
 }
 export interface IPosts{
    id:string
    postContent:string
    postImageUrl:string
    postTImeStamp:string
    userID:string
 }
 export interface IPostsWithUserDetails{
    postId:string
    postImageUrl:string
    postContent:string
    postTImeStamp:string
    userId:string
    fullName:string
    userName:string
    profileImagUrl:string
}
