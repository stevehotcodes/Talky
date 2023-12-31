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
    userID:string
    fullName:string
    userName:string
    profileImagUrl:string
    likesCount:number
}


// export interface IPostWithCommentsAndUserDetails{
//     postID:string
//     postImageUrl:string
//     postContent:string
//     postTImeStamp:string
//     posterID:string
//     posterFullName:string
//     posterUserName:string
//     posterProfilePic:string
//     commentID:string
//     commentContent:string
//     commenterID:string
//     commentedAt:string
//     commenterFullName:string

// }

