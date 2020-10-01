var express = require("express");
var app = express();
var PORT = process.env.PORT || 8080


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var data = [{
    routeName: "api-data",
    name: "",
    table: "05",
    date: "10/05/2020",
}]


app.get("/api/data", function(req, res) {
    return res.json(data);
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});