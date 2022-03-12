const express = require('express');
const app = express();

app.get('/', (req, res) => {
    response = {
        first_name: req.query.first_name,
        last_name: req.query.last_name,
    };
    console.log(response);
    res.send(response);
})

app.listen(8080, () => {
    console.log("demo listening on 8080")
})
