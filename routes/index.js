var router = require("express").Router();


router.get("/", (req, res) => {
	res.render("./index.pug");

});
router.get("/works", (req, res) => {
	res.render("works.pug");

});

module.exports = router;
