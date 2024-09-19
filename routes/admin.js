var express = require('express');
var router = express.Router();
var productHelper = require('../helpers/productHelper');

/* GET users listing. */
router.get('/', function(req, res, next) {
  productHelper.getAllProducts().then((products) => {
    console.log(products)
    res.render('admin/viewProducts', { admin: true, products })
  })
});

router.get('/addProduct', function(req, res) {
  res.render('admin/addProduct')

});

router.post('/addProduct', (req, res) => {
  console.log("req:" + req.body + "\n");

  productHelper.addProduct(req.body, (id) => {
    console.log("id from admin: " + id)
    let image = req.files.image;
    console.log(image)
    let imageId = id.toString();
    console.log("iamge id: " + imageId);
    image.mv('./public/product-image/' + imageId + '.jpg', (err, done) => {
      if (!err) {
        res.render('admin/addProduct');
      } else {
        console.log(err)
      }
    })
  });
})

module.exports = router;
