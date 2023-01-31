USE techvelvet;

DROP TABLE IF EXISTS `PRODUCT`;

CREATE TABLE PRODUCT (
    PRODUCT_ID INT(3) NOT NULL AUTO_INCREMENT,
    PRODUCT_NAME VARCHAR(255),
    PRODUCT_PRICE FLOAT,
    PRODUCT_DESCRIPTION VARCHAR(300),
    PRODUCT_BRAND VARCHAR(255),
    PRIMARY KEY (PRODUCT_ID)
);

INSERT INTO PRODUCT (PRODUCT_NAME, PRODUCT_PRICE, PRODUCT_DESCRIPTION, PRODUCT_BRAND) VALUES
    ('Teclado Mecânico Redragon', 329.99, 'Teclado Mecânico com fio preto', 'Redragon'),
    ('Teclado Mecânico HyperX', 319.99, 'Teclado Mecânico sem fio cinza', 'HyperX'),
    ('Teclado Mecânico Motospeed', 199.99, 'Teclado Mecânico com fio branco', 'Motospeed'),
    ('Headset HyperX Cloud', 199.99, 'Headset com fio preto', 'HyperX'),
    ('Headset ASTRO A50', 1899.99, 'Headset sem fio preto', 'ASTRO'),
    ('Headset Multilaser Warrior', 133.90, 'Headset com fio preto/verde', 'Multilaser'),
    ('Placa de Vídeo GTX 1660 NVIDEA', 1399.99, 'Placa de vídeo preta', 'NVIDEA'),
    ('Placa de Vídeo RTX 3060 NVIDEA', 2399.99, 'Placa de vídeo cinza', 'NVIDEA'),
    ('Placa de Vídeo Radeon RX6700 AMD', 2599.99, 'Placa de vídeo cinza', 'AMD'),
    ('Placa de Vídeo RX580 Redragon', 1399.99, 'Placa de vídeo preta', 'Redragon');