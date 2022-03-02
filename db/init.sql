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
