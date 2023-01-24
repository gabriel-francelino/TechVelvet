USE techvelvet;

DROP TABLE IF EXISTS `ROLE`;

CREATE TABLE ROLE (
	ROLE_ID INT(3) NOT NULL AUTO_INCREMENT,
	ROLE_NAME VARCHAR(100) NOT NULL,
    ROLE_DESCRIPTION VARCHAR(300),
	PRIMARY KEY (ROLE_ID)
);

INSERT INTO ROLE (ROLE_NAME, ROLE_DESCRIPTION) VALUES 
    ('Admin', 'Manage everything'),
    ('Sales Manager', 'Manage product price, customers, shipping, orders and sales report'),
    ('Editor', 'Manage categories, brands, products, articles and menus'),
    ('Shipping Manager', 'View products, view orders and update order status'),
    ('Assistant', 'Manage questions and reviews');