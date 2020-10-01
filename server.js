var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 8080


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var reservations = [{
    routeName: "api-data",
    name: "somedude",
    phone: "555-5555",
    email: "dude@cool.com",
    id: 05
}]

var waitList = [{
    routeName: "api-data",
    name: "anotherdude",
    phone: "555-5555",
    email: "dude@notsocool.com",
    id: 05
}]

// Setting root page to be "index.html" and serving "index.html" if user navigates to root
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Serving "reservation.html" if user navigates to ""./reservation.html." This is where our reservation form should be.
app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "reservation.html"));
});

// Serving "view.html" if user navigates to the "./view.html." This is the page that will show booked tables and the waiting list.
app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
});

// This allows the user to see the data currently stored in the api.
app.get("/api/reservations", function(req, res) {
    return res.json(reservations);
});

app.get("/api/waitlist", function(req, res) {
    return res.json(waitList);
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});