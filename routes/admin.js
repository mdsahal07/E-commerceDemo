var express = require('express');
var router = express.Router();
var productHelper = require('../helpers/productHelper');

/* GET users listing. */
router.get('/', function(req, res, next) {
  productHelper.getAllProducts().then((products) => {
    res.render('admin/viewProducts', { admin: true, products })
  })
});

router.get('/addProduct', function(req, res) {
  res.render('admin/addProduct')

});

router.post('/addProduct', (req, res) => {
  productHelper.addProduct(req.body, (id) => {
    let image = req.files.image;
    let imageId = id.toString();
    image.mv('./public/product-image/' + imageId + '.jpg', (err, done) => {
      if (!err) {
        res.render('admin/addProduct');
      } else {
        console.log(err)
      }
    })
  });
})

router.get('/deleteProduct/:id', (req, res) => {
  let proId = req.params.id;
  productHelper.deleteProduct(proId).then((response) => {
    res.redirect(/admin/)
  });
})

router.get('/editProduct/:id', async (req, res) => {
  let product = await productHelper.getProductDetails(req.params.id)
  console.log(product);
  res.render('admin/editProduct', { product })
})

router.post('/editProduct/:id', (req, res) => {
  productHelper.updateProductDetails(req.params.id, req.body);
  res.redirect('/admin');
})

module.exports = router;
