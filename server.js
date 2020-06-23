const express = require("express");
const app = express();
const mysql = require("mysql");

// npm install colors 
//npm install cowsay
const colors = require("colors");
const cowsay = require("cowsay");
const PORT = 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const apiRoutes = require("./routes/api-routes");
app.use(apiRoutes);

// app.use("/", (req, res) => {
//   connection.query("SELECT * FROM todos", (err, data) => {
//     res.send(data);
//   });
// });
app.listen(PORT, () => {
    // console.log(`listening at: http://localhost:${PORT}`);
    console.log(cowsay.say(
        {
            text: "\n listening: ".bold + `http://localhost:${PORT}\n`.rainbow,
            //eyes for cow
            e: "oO",
            //tongue for cow
            T: "U ",
        }));
});