var path = require('path'); 

module.exports = function(app) {
	app.get("/survey", function(req, res) {
		res.sendFile(path.join(__dirname, "/../public/survey.html"));
	});

	// why do we have to implement app.use instead of app.get("/", function()) ?
	app.use(function(req, res) {
	    res.sendFile(path.join(__dirname, "/../public/home.html"));
	});
}