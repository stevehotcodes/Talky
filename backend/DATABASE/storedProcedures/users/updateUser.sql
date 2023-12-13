CREATE OR ALTER PROCEDURE updateUser(
    @id VARCHAR (200),
    @userName VARCHAR (200),
    @email VARCHAR (200),
    @bio VARCHAR(8000),
    @profileImageUrl VARCHAR (200)
)
AS
BEGIN
    UPDATE users
    SET userName=@userName , email=@email,  bio=@bio,profileImageUrl=@profileImageUrl
    WHERE id=@id
END