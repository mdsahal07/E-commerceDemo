var express = require('express');
var router = express.Router();
var productHelper = require('../helpers/productHelper');

/* GET users listing. */
router.get('/', function(req, res, next) {
  let products=[
    {
      name:"Nokia",
      category:"Modile",
      description:"You can use it as shield",
      image:"https://5.imimg.com/data5/HE/CI/MY-59752656/keypad-mobile-phone-500x500.jpg"
    },
    {
      name:"IPhone 15",
      category:"Mobile",
      description:"good camera",
      image:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQU4qvpGgZpSsAYU8spz5X5zJEUblEXVawDngDsjx5iDzckPFA8Bm2foPrUjCeqcvBcDX075l2bvejAtwux60MlA381EhFVkzHsSkhbf2hdAMPqd9fcGe4rZmUDaQ"
    },
    {
      name:"S23 Ultra",
      category:"Mobile",
      description:"100x zoom",
      image:"https://m.media-amazon.com/images/I/71lD7eGdW-L._AC_UF1000,1000_QL80_.jpg"
    },
    {
      name:"Rog 8 ultimate",
      category:"Mobile",
      description:"Gaming Phone",
      image:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRctsk7CspXZMMtEzHKeHFZ5dynPn1s-mHzS0hjTq8e8A10NUSH5emrzxbQguUuvM3ZMtRrXIamKIzRYv0_XbkRvXGKQj4Yaa33T7CruPrz688ycdBu_3HGZVI"
    }
  ]
  res.render('admin/viewProducts',{admin:true, products})
});

router.get('/addProduct',function(req,res){
  console.log("get working")
  res.render('admin/addProduct')
  
});

router.post('/addProduct',(req,res)=>{
  console.log(req.body);
  console.log(req.files.image)
  productHelper.addProduct(req.body,(result)=>{
    res.render('admin/addProduct')
  });
})

module.exports = router;
