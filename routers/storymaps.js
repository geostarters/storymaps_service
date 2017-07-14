var express = require('express');

var storyMaps = require('../controllers/storyMaps');
var validateUser = require('../controllers/validateUser');
var router = express.Router();

router.get('/:id', function(req, res, next) {
	storyMaps.getStoryMap(req, res, next);
});

router.get('/edit/:id', validateUser.validateUser, function(req, res, next) {
	storyMaps.getEditStoryMap(req, res, next);
});

router.post('/edit', validateUser.validateUser, function(req, res, next) {
	storyMaps.createStoryMap(req, res, next);
});

router.put('/edit/:id', validateUser.validateUser, function(req, res, next) {
	storyMaps.updateStoryMap(req, res, next);
});

router.delete('/edit/:id_editor/:id', validateUser.validateUser, function(req, res, next) {
	storyMaps.deleteStoryMap(req, res, next);
});


var notImplimented = function(req,res) {
	res.send(501)
}

module.exports = router;