const express = require('express');
const cors = require('cors');
const mysql = require('mysql');


const app = express();

const SELECT_ALL_CUSTOMERS_QUERY = 'SELECT * FROM customers';

const connection = mysql.createConnection({
    host: 'localhost',
    user:'titusbuchananjr',
    password:'Titus908!',
    database:'sql_store'
})

connection.connect(err => {
    if(err) {
        return err;
    }
});

console.log(connection);

app.use(cors());

const PORT = process.env.PORT || 4000;


app.get('/', (req,res) => {
    res.send('Go to customers page')
})

app.get('/customers', (req,res) => {
    connection.query(SELECT_ALL_CUSTOMERS_QUERY, (err,results) => {
        if(err) {
            return res.send(err)
        }
        else {
            return res.json({
                data: results
            })
        }
    });
})
connection.connect(err => {
    if (err) {
        console.log(err);
    } else {
        console.log('Connected to the MySQL server');
    }
});



app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`)
})