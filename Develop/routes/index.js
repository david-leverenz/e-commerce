const router = require('express').Router();
const apiRoutes = require('./api'); // Look in the api folder.

// index.js starts the "chain" with a /api route.
router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;