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
 export interface IPostWithCommentsAndUserDetails{
    postID:string
    postImageUrl:string
    postContent:string
    postTImeStamp:string
    posterID:string
    posterFullName:string
    posterUserName:string
    posterProfilePic:string
    commentID:string
    commentContent:string
    commenterID:string
    commentedAt:string
    commenterFullName:string


}

export interface IPostsWithUserDetails{
    postID:string
    postImageUrl:string
    postContent:string
    postTImeStamp:string
    userID:string
    fullName:string
    userName:string
    profileImagUrl:string
    likesCount:number
}






// "postID": "35400e29-3cf6-4494-8423-5287c27b820f",
// "postImageUrl": "http://res.cloudinary.com/dpxmkgoty/image/upload/v1702666391/ssnrizlya9k8puria4p1.png",
// "postContent": "my post about qa",
// "postTImeStamp": "2023-12-15T00:00:00.000Z",
// "userID": "5afc87d4-c0a5-475c-862f-9432277b71fb",
// "userName": "DKitheka",
// "fullName": "Daniel Kitheka",
// "profileImageUrl": "none",
// "likeCount": 2
export interface ICommentWithUserAndPostInfo{
    id:string
    commentContent:string
    commenterID:string
    isDeleted:number
    postID:string
    commentedAt:string
    parentCommentID:string
    postImage:string
    postedAt:string
    postCaption:string
    commenterFullName:string
    commentedBy:string
    
}
export interface IPostLikeCount{
    postLikes:number
}