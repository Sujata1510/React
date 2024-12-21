import express from "express";

const router = express.Router();
//getAllproduct
// getTop5product
// getShoesProduct
// addProduct  yetti garne tala ko route le

router.route('/api/products').get((req, res) => {
  return res.status(200).json({
    message: 'welcome to backend',
  })
}
).post();

//deleteProduct
//updateProduct
//getProductId yetti garne tal ko route le



router.route('/api/products/:id').get().patch().delete();


export default router;


