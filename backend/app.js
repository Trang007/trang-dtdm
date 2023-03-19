const express = require("express");
const app = express();
const ErrorHandler = require("./middleware/error");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const bodyParser = require("body-parser");
const path = require("path");

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(fileUpload({ useTempFiles: true }));

// config
if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({
        path: "backend/config/.env"
    })
}

// Route imports
const project = require("./routes/ProjectRoute");
const user = require("./routes/UserRoute");
const wishlist = require("./routes/WishListRoute");
const category = require("./routes/CategoryRoute");
const department = require("./routes/DepartmentRoute");
const branch = require("./routes/BranchRoute");
const specialized = require("./routes/SpecializedRoute");
const classroom = require("./routes/ClassroomRoute");
const trainingSystem = require("./routes/TrainingSystemRoute");
const schoolYear = require("./routes/SchoolYearRoute");
const notify = require("./routes/NotifyRoute");
const support = require("./routes/SupportRoute");
const config = require("./routes/ConfigRoute");
const faq = require("./routes/FaqRoute");
const council = require("./routes/CouncilRoute");
app.use("/api/v2", project);

app.use("/api/v2", user);

app.use("/api/v2", category);

app.use("/api/v2", wishlist);

app.use("/api/v2", department);

app.use("/api/v2", branch);

app.use("/api/v2", specialized);

app.use("/api/v2", classroom);

app.use("/api/v2", trainingSystem);

app.use("/api/v2", schoolYear);

app.use("/api/v2", notify);

app.use("/api/v2", support);

app.use("/api/v2", config);

app.use("/api/v2", council);

app.use("/api/v2", faq);

app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
})

// it's for errorHandeling
app.use(ErrorHandler);

module.exports = app