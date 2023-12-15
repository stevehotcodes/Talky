CREATE OR ALTER PROCEDURE getAllPosts
AS
BEGIN
    SELECT p.id as postID, p.postImageUrl, p.postContent , p.postTImeStamp ,p.userID, u.userName, u.fullName,u.profileImageUrl
    FROM posts  as p 
    LEFT JOIN users as u  
    ON p.userID=u.id
    WHERE p.isDeleted=0
END