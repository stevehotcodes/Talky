CREATE TABLE comments(
    id VARCHAR(200) PRIMARY KEY ,
    commentContent VARCHAR(200) NOT NULL,
    userID VARCHAR (200) FOREIGN KEY REFERENCES  users(id),
    isDeleted INT DEFAULT 0 NOT NULL,
    postID VARCHAR(200) FOREIGN KEY REFERENCES posts(id),
    commentTimeStamp   DATE DEFAULT GETDATE()
    
)
