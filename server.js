var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 8080


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var reservations = [{
}]

var waitList = [{
}]

// Setting root page to be "index.html" and serving "index.html" if user navigates to root
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Serving "reservation.html" if user navigates to ""./reservation.html." This is where our reservation form should be.
app.get("/reservations", function (req, res) {
    res.sendFile(path.join(__dirname, "reservations.html"));
});

// Serving "view.html" if user navigates to the "./view.html." This is the page that will show booked tables and the waiting list.
app.get("/view", function (req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
});


// This allows the user to see the data currently stored in the api.
app.get("/api/reservations", function (req, res) {
    return res.json(reservations);
});

app.get("/api/waitlist", function (req, res) {
    return res.json(waitList);
});

// Add app.post for new reservation and waitlist apis

app.post("/api/reservations", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newReservation = req.body;

    console.log(req.body);

    // Using a RegEx Pattern to remove spaces from newCharacter
    // newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();

    console.log(newReservation);

    reservations.push(newReservation);

    res.json(newReservation);
});

app.post("/api/waitlist", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newWaitList = req.body;

    // Using a RegEx Pattern to remove spaces from newCharacter
    // newWaitList.routeName = newWaitList.name.replace(/\s+/g, "").toLowerCase();

    console.log(newWaitList);

    waitList.push(newWaitList);

    res.json(newWaitList);

});

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});