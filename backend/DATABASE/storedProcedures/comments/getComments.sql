CREATE OR ALTER PROCEDURE getAllcomments(
@postID VARCHAR(200))
AS
BEGIN
	SELECT * FROM comments
	WHERE postID=@postID AND isDeleted=0
END