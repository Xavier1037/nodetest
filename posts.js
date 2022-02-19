var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({
    nome:String,
    email:String,
    mensagem:String,

},{collection:'post'});

var posts = mongoose.model("post",postSchema);

module.exports = posts;