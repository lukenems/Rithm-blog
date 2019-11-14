/** Server for microblog. */

const app = require("./app");

// const path = require('path');
// app.use(express.static(path.resolve(__dirname, '../frontend/build')));

app.listen(process.env.PORT || 5000, function () {
  console.log("Server is listening on port 5000");
});
