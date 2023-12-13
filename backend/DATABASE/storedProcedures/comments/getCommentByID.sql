CREATE OR ALTER PROCEDURE getCommentById
(
    @id VARCHAR(200)
)
AS
BEGIN
    SELECT * FROM comments
    WHERE id=@id AND isDeleted=0
END