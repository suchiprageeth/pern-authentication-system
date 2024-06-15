-- Users Table
CREATE TABLE users(
    id serial primary key,
    email varchar(255) unique not null,
    password varchar(255) not null,
    created_at timestamp default current_timestamp
);