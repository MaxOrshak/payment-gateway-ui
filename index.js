// const fs = require("fs");
// const path = require("path");
const express = require("express");
const app = express();

app.use(express.static("public"));

// const filePath = path.join(__dirname, 'public', 'payerInformation.html');

// let html;

// fs.readFile(filePath, 'utf-8', (err, content) => {
//     if (err) {
//         throw err
//     }
//     html = content;
// })

// app.get("/info", (req, res) => {
//     // res.send(`${html}`);
//     res.send(html)
// });

app.listen(5000, () => {
    console.log("server started");
});
