CREATE TABLE users(
    id VARCHAR(200) PRIMARY KEY,
    fullName VARCHAR (200) NOT NULL,
    userName  VARCHAR(200) UNIQUE NOT NULL,
    email VARCHAR (200) UNIQUE NOT NULL,
    password VARCHAR(200) NOT NULL,
    role VARCHAR (200) NOT NULL DEFAULT 'user',
    profileImageUrl VARCHAR(500) NOT NULL DEFAULT 'none',
    dateJoined VARCHAR(200) NOT NULL DEFAULT GETDATE(),
    isDeleted INT DEFAULT 0,
    isWelcomed INT DEFAULT 0,
    isResetPasswordEmailSent INT DEFAULT 0,
    resetPasswordToken VARCHAR (200) DEFAULT 'empty'
    )