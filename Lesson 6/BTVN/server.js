const express = require("express");

const app = express();

const PORT = 3005;

app.use(express.json());



app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT} `);
})