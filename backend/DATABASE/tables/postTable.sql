CREATE TABLE posts(
    id VARCHAR(200) PRIMARY KEY,
    postImageUrl VARCHAR(8000) DEFAULT 'none' NOT NULL,
    postContent VARCHAR(200) NOT NULL,
    postTImeStamp DATE DEFAULT GETDATE(),
    userID VARCHAR (200) FOREIGN KEY REFERENCES  users(id),
    isDeleted INT DEFAULT 0 NOT NULL
)
