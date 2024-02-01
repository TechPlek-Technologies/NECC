require("rootpath")();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const errorHandler = require("_middleware/error-handler");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// api routes
app.use("/users", require("./mvc/users/user.controller"));
app.use("/categories", require("./mvc/categories/category.controller"));
app.use("/events", require("./mvc/events/event.controller"));
app.use("/uploads", require("./mvc/pdfFile/pdfFile.controller"));
app.use("/contact", require("./mvc/contact/contact.controller"));
app.use("/office", require("./mvc/address/address.controller"));
app.use("/content", require("./mvc/content/content.controller"));
app.use("/page", require("./mvc/page/page.controller"));

// global error handler
app.use(errorHandler);

// start server
const port =
  process.env.NODE_ENV === "production" ? process.env.PORT || 80 : 4000;
  
app.listen(port, () => console.log("Server listening on port " + port));
