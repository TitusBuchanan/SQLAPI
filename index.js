const express = require('express');
const cors = require('cors');
const mysql = require('mysql');




const app = express();
app.use(cors());


const SELECT_ALL_CUSTOMERS_QUERY = 'SELECT * FROM customers';

const connection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'password',
    database:'sql_store'
});



connection.connect(err => {
    if (err) {
        console.log(err);
    } else {
        console.log('Connected to MySQL server');
    }
});





const PORT = process.env.PORT || 4000;


app.get('/', (req,res) => {
    
    const sqlInsert = "INSERT INTO customers (first_name, last_name) VALUES ('TEEZUS','BUCHANAN')"

    connection.query(sqlInsert, (err,result) => {
        res.send(result)
    })
    
    
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




app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`)
})