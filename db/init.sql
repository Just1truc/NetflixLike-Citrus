CREATE DATABASE IF NOT EXISTS db;

use db;

CREATE TABLE IF NOT EXISTS movies
(
    show_id TEXT,
    type TEXT,
    title TEXT,
    director TEXT,
    cast TEXT,
    country TEXT,
    date_added datetime,
    release_year BIGINT,
    rating TEXT,
    duration TEXT,
    listed_in TEXT,
    description TEXT,
    picture TEXT,
    FULLTEXT(title, cast)
);

CREATE TABLE IF NOT EXISTS account
(
    id BIGINT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    email TEXT,
    password TEXT,
    name TEXT,
    firstname TEXT
);

