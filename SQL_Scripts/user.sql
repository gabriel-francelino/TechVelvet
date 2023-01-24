USE techvelvet;

DROP TABLE IF EXISTS `USERS`;

CREATE TABLE USERS (
	USER_ID INT(3) NOT NULL AUTO_INCREMENT,
	FIRST_NAME VARCHAR(255) NOT NULL,
    LAST_NAME VARCHAR(255),
    EMAIL VARCHAR(255),
    PASSWORD VARCHAR(255),
	PRIMARY KEY (USER_ID)
);

INSERT INTO USERS (FIRST_NAME, LAST_NAME, EMAIL, PASSWORD) VALUES
    ('Dedalus', 'Stephen', 'dedalus@apple.com', '123'),
    ('Bart', 'Lily', 'bart@gmail.com', '123'),
    ('Golightly', 'Holly', 'golightly@gmail.com', '123'),
    ('Samsa', 'Gregor', 'samsa@yahoo.com', '123'),
    ('Buendia', 'Aureliano', 'buendia@yahoo.com', '123'),
    ('Dalloway', 'Clarissa', 'dalloway@gmail.com', '123'),
    ('Reilly', 'Ignatius', 'reilly@gmail.com', '123'),
    ('Smiley', 'George', 'smiley@gmail.com', '123'),
    ('Pooh', 'Winnie', 'pooh@yahoo.com', '123'),
    ('Thomas', 'Bigger', 'thomas@hotmail.com', '123');