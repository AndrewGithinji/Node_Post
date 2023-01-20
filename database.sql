CREATE DATABASE full_stack_dev

CREATE TABLE books (
    id SERIAL PRIMARY KEY,
    bookname VARCHAR(255) NOT NULL,
    author_id INT NOT NULL
);