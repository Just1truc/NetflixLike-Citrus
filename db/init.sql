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
    picture TEXT
);

CREATE TABLE IF NOT EXISTS account
(
    id BIGINT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    email TEXT,
    password TEXT,
    name TEXT,
    firstname TEXT
);

CREATE TABLE IF NOT EXISTS credit_card
(
    id BIGINT unique NOT NULL PRIMARY KEY AUTO_INCREMENT,
    credit_card BIGINT,
    password TEXT,
    account_id BIGINT UNSIGNED NOT NULL,
    FOREIGN KEY (account_id) REFERENCES account(id) ON DELETE CASCADE
);
