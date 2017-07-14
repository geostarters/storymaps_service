var _f = require('../config');
var jwt = require('jsonwebtoken');


module.exports.validateUser = function(req, res, next){
	/*
	// check header or url parameters or post parameters for token
  	var token = req.body.token || req.query.token || req.headers['x-access-token'];

  	if (token) {
  		jwt.verify(token, _f.secret, function(err, decoded) {
  			if (err) {
  				return res.status(403).send({ 
	        		err: err.message || 'Failed to authenticate token.' 
	    		});
  			}else{
  				req.decoded = decoded;   
  				next();
  			}
  		});
  	}else {
		// if there is no token
	    // return an error
	    return res.status(403).send({ 
	        err: 'No token provided.' 
	    });
  	}
  	*/
  	next();
};