CREATE DATABASE IF NOT EXISTS DSCompany;

USE DScompany;

CREATE TABLE employees(
	id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(11) DEFAULT NULL,
    PRIMARY KEY(id)
    );
    
    DESCRIBE employees;
    
    INSERT INTO employees values
    (1, 'Andrew Reynolds', 50000),
    (2, 'Ali Boulala', 40000),
    (3, 'Jeff Lenoce',48000),
    (4, 'Erik Ellington', 51000),
    (5, 'Antwuan Dixon', 45000),
    (6, 'Dustin Dollin', 49000),
    (7, 'Terry Kennedy', 47000),
    (8, 'Jim Greco', 49000),
    (9, 'Braydon Szafranski', 45000),
    (10, 'Theotis Beasley', 46000),
    (11, 'Kevin Long', 43000);
    
    SELECT * FROM dscompany.employees;