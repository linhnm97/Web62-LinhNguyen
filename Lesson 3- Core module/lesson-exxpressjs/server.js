const { request } = require("express");
const express = require("express");

const app = express();
const PORT = 5000;

app.get("/", (req,res) => {
    res.send("Hello to my server!")
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
console.log()