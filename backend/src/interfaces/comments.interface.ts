


export interface  IComment{
    id:string
    commentContent:string
    userID:string
    isDeleted:0 |1
    postID:string
    commentTImeStamp:string
    parentCommentID:string
}

export interface ICommentWithuserDetails{
     id:string
    commentContent:string
    userID:string
    isDeleted:0|1
    postID:string
    commentTimeStamp:string
    postId:string
    userId:string
    userName:string
    postCaption:string
    imagePost:string

}