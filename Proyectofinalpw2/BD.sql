CREATE DATABASE IF NOT EXISTS pw2; -- pw2 hace referencia a la materia (Programación Web 2)
USE pw2;

-- Creamos tabla 'users'
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(70) NOT NULL,
    email VARCHAR(100) NOT NULL,
    universidad VARCHAR(100) NOT NULL,
    cuenta INT(9) NOT NULL,
    PRIMARY KEY (id)
);

CREATE USER IF NOT EXISTS 'root'@'localhost' IDENTIFIED BY '123456';

GRANT ALL PRIVILEGES ON pw2.* TO 'root'@'localhost';

-- Insertamos un usuario 
INSERT INTO users (name, email, universidad, cuenta) VALUES ('IRVING RODRIGUEZ ESCOBAR', 'irvingescobar53@aragon.unam.mx', 'UNAM', '319298653');




