
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.helloworld = function(req, res){
  res.render('helloworld', { title: 'Hello, World!'});
}

// exports.helloworld = function(req, res){
//   res.render('main', { title: 'Main'});
// }