var path = require("path");

module.exports = function(app) {
// home
		app.get('/', function (req, res) {
				res.sendFile(path.join(__dirname, '/../public/index.html'));
		});
// survey
		app.get('/survey', function (req, res) {
				res.sendFile(path.join(__dirname, '../public/survey.html'));
		});
// default to home
		app.use('*', function (req, res) {
				res.sendFile(path.join(__dirname + '/../public/index.html'));
		});
	};