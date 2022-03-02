const arguments = process.argv.slice(2);
const mysql = require("mysql2");
const dotenv = require("dotenv");

dotenv.config();

console.table({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    database: process.env.MYSQL_DATABASE,
    password: process.env.MYSQL_ROOT_PASSWORD,
});

const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    database: process.env.MYSQL_DATABASE,
    password: process.env.MYSQL_ROOT_PASSWORD,
});

connection.connect(function (err) {
    if (err) {
        console.log("error", err);
    }
})

const getData = (data) => {
    var tab = [];
    for (const key in data) {
        if (key == 'date_added') {
            var date = new Date(data[key]);
            tab.push(String(date.getFullYear()) + "-" + String(date.getMonth()) + "-" + String(date.getDay()) + " " + String(date.getHours()) + ":" + String(date.getMinutes()) + ":" + String(date.getSeconds()));
        } else {
            if (key == 'release_year')
                tab.push(data[key]);
            else
                tab.push(data[key].replace(/[^\x00-\x7F]/g, ""));
        }
    }
    console.log(tab);
    console.log(data.cast);
    return tab;
}

function main(file_name) {
    const jsonData = require("./" + file_name);
    for (let data of jsonData) {
        JSON.stringify(data, null, ' ')
        const tab = getData(data);
        connection.query("INSERT INTO  `movies` (show_id, type, title, director, cast, country, date_added, release_year, rating, duration, listed_in, description, picture) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", tab, (err, result, fields) => {
            if (err) throw err;
        });
    };
    return 0;
};

if (arguments.length == 1)
    main(arguments[0]);
connection.end();
