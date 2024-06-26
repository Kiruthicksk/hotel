const express = require("express");
const cors = require("cors");
const dbConfig = require("./db");
const roomsRoute = require("./routes/roomRoute");
const usersRoute = require("./routes/userRoute");
const bookingRoute = require("./routes/bookingRoute");

const app = express();

// Allow all origins
app.use(cors());

app.use(express.json());
app.use("/api/rooms", roomsRoute);
app.use("/api/users", usersRoute);
app.use("/api/bookings", bookingRoute);

const port = 5000;
app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Node app listening on ${port} port!`));
