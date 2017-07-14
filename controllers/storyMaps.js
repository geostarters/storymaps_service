var fs = require('fs');
var os = require('os');
var path = require('path');
const uuidv1 = require('uuid').v1;
const uuidv4 = require('uuid').v4;
var _f = require('../config');

module.exports.getStoryMap = function(req, res, next){
	var file_path = _f.file_path;
	var patt = new RegExp(req.params.id+"_.*\.json");
	var encoding = 'utf8';
	var found_file = false;
	fs.readdir(file_path, function(err, files) {
		files.forEach(function ( fileName ){
			if(patt.test(fileName)){
				found_file = true;
				fs.readFile(path.join(file_path,fileName), encoding, function(err, data){
					if (err) {
    					res.send({err:'respond with a get NO resource'});
  					}
  					data = JSON.parse(data)
  					data.id_editor = "XXXXXXXXXXXXXXXX";
  					res.send(data);
				});	
			}
		});
		if(!found_file){
			res.send({err:'respond with a get NOT resource'});
		}
	});
};

module.exports.getEditStoryMap = function(req, res, next){
	var file_path = _f.file_path;
	var patt = new RegExp(".*_"+req.params.id+"\.json");
	var encoding = 'utf8';
	var found_file = false;
	fs.readdir(file_path, function(err, files) {
		files.forEach(function ( fileName ){
			if(patt.test(fileName)){
				found_file = true;
				fs.readFile(path.join(file_path,fileName), encoding, function(err, data){
					if (err) {
    					res.send({err:'respond with a get NO resource'});
  					}
  					res.send(JSON.parse(data));
				});	
			}
		});
		if(!found_file){
			res.send({err:'respond with a get NOT resource'});
		}
	});
};


module.exports.createStoryMap = function(req, res, next){
	var id = uuidv1();
	var id_editor = uuidv4();
	var fileName = id + "_" + id_editor + ".json";
	var file_path = _f.file_path;
	var data = req.body;
	data.id = id;
	data.id_editor = id_editor;
	var json_txt = JSON.stringify(data, null, 4);
	fs.writeFile(path.join(file_path,fileName), json_txt, function (err) {
  		if (err){
  			res.send({err:'respond with a NOT post resource'});
  		}
  		res.send(data);
	});
};

module.exports.updateStoryMap = function(req, res){
	var id_editor = req.params.id;
	var data = req.body;
	if(id_editor === data.id_editor){
		var file_path = _f.file_path;
		var fileName = data.id + "_" + id_editor + ".json";
		var total_path = path.join(file_path,fileName);
		fs.stat(total_path, function(err, stat) {
			if(err == null) {
				var json_txt = JSON.stringify(data, null, 4);
				fs.writeFile(total_path, json_txt, function (err) {
			  		if (err){
			  			res.send({err:'respond with a NOT put resource'});
			  		}
			  		res.send(data);
				});
			}else{
				res.send({err:'respond with a NOT put resource'});
			}
		});
	}else{
		res.send({err:'respond with a NO put resource'});
	}
};

module.exports.deleteStoryMap = function(req, res, next){
	var id_editor = req.params.id_editor;
	var id = req.params.id;
	var file_path = _f.file_path;
	var fileName = id + "_" + id_editor + ".json";
	var total_path = path.join(file_path,fileName);
	fs.stat(total_path, function(err, stat) {
		if(err == null) {
			fs.unlink(total_path,function(err){
        		if(err){
        			res.send({err:'respond with a delete NOT resource'});
        		}
        		res.send({err:'respond with a delete resource ' + id_editor + "/" + id});
        	});
		}else{
			res.send({err:'respond with a delete NO resource ' + id_editor + "/" + id});
		}
	});
};