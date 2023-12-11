CREATE OR ALTER  PROCEDURE deletePost(
    @id VARCHAR (200),
    @userID VARCHAR (200)
)
AS 
BEGIN
    UPDATE posts
    SET isDeleted =1
    WHERE isDeleted=0 AND userID=@userID AND id=@id
END