var express = require('express');
var router = express.Router();
var productHelper = require('../helpers/productHelper');

/* GET users listing. */
router.get('/', function(req, res, next) {
  productHelper.getAllProducts().then((products)=>{
    console.log("Saadhanam kayyilund")
    res.render('admin/viewProducts',{admin:true, products})
  })
});

router.get('/addProduct',function(req,res){
  console.log("get working")
  res.render('admin/addProduct')
  
});

router.post('/addProduct',(req,res)=>{

  productHelper.addProduct(req.body,(id)=>{
    let image = req.files.image;
    id = Date.now() + '.jpg';
    image.mv('./public/product-image/'+id+'.jpg',(err,done)=>{
      if(!err){
        res.render('admin/addProduct');
      }else{
        console.log(err)
      }
    })
  });
})

module.exports = router;
