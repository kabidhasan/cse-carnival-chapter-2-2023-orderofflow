const express = require("express");
const { json } = require("express");
const app = express();
const { PORT, CLIENT_URL } = require("./constants");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");

const adminRoutes = require("./routes/admin");

const cookieParser = require("cookie-parser");
const cors = require("cors");

app.use(cors());
const passport = require("passport");

require("./middlewares/passport-middleware");

app.use(express.json());
app.use(cookieParser());

//app.use(cors({ credentials: true }));
app.use(passport.initialize());
app.use("/", authRoutes);
app.use("/", userRoutes);
app.use("/admin/", adminRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on: http://localhost:${PORT}`);
});
