CREATE OR ALTER PROCEDURE getLikesofAPost(
    @postID VARCHAR (200)
)
AS
BEGIN
    SELECT * FROM postLikesTable
    WHERE postID=@postID
END