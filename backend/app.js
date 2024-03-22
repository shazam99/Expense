const express = require('express');
const dotenv = require("dotenv").config();
const errorHandler = require("./middleware/errorHandler");
const sequelize = require('./config/dbConfig');
const userRoute = require("./routes/userRoute")
const categoryRoute = require("./routes/categoryRoute")
const subRoute = require("./routes/subCategoryRoute")
const apiRoute = require("./routes/apiRoute")
// DB connectivity check 
sequelize.authenticate()
.then(() => {
    console.log('Connected to Database');
})
.catch((err) => {
    console.log("Error connecting Databse: ",err)
});

const app = express();
const port = process.env.PORT;

// Body Parser middleware
app.use(express.json());

//routes
app.use("/api/doc",apiRoute)
app.use("/api/v1/users", userRoute)
app.use("/api/v1/update/category", categoryRoute)
app.use("/api/v1/update/sub-category", subRoute)



// Error Handler middleware
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
