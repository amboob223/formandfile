CREATE DATABASE work;

CREATE TABLE data(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    filename BYTEA --here we put the originak name 
);

