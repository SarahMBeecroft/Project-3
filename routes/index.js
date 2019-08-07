const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const passport = require("./users");
// Our API Routes
router.use("/users", passport);
router.use("/api", apiRoutes);

// any other request, including external API calls: send the React app
router.use((req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
