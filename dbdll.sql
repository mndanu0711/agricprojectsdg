CREATE DATABASE agrovet;

USE agrovet;

CREATE TABLE vets (
  id INT AUTO_INCREMENT PRIMARY KEY,
  fullname VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  phone VARCHAR(20),
  specialization VARCHAR(100),
  experience INT,
  location VARCHAR(100)
);

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(100),
  password VARCHAR(100)
);
