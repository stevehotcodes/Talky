export interface IPosts{

    id:string
    postImageUrl:string
    postContent:string
    postTImeStamp:string
    userID:string
    isDeleted:number


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

