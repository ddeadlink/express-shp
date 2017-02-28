var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

var Product = require('../models/product');
mongoose.connect('localhost:27017/shopping');


var products = [
  new Product({
    imagePath:'https://static.pexels.com/photos/1826/wood-nature-sunny-forest.jpg',
    title: 'forest 1',
    description: 'green forest',
    price: 2000
  }),
  new Product({
    imagePath:'http://s9.favim.com/orig/130725/forest-nature-photography-rain-Favim.com-800620.jpg',
    title: ' forest 2',
    description: 'rain forest',
    price: 3000
  }),
  new Product({
    imagePath:'https://static.pexels.com/photos/5049/forest-trees-fog-foggy.jpg',
    title: 'forest',
    description: 'foggy forest 3',
    price: 4000
  }),
  new Product({
    imagePath:'https://www.occrp.org/images/stories/CCWatch/investigations/forest.jpg',
    title: 'forest',
    description: 'tree forest 4',
    price: 5000
  })
];

var done = 0;
for (var i = 0; i < products.length; i++) {
  products[i].save(function(err,result){
    done++;
    if (done === products.length){
      exit();
    }
  });
}
function exit(){
  mongoose.disconnect();
}
