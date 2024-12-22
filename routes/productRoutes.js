import express from "express";
import { getAllProducts } from "../controllers/productControllers.js";

const router = express.Router();
//getAllproduct
// getTop5product
// getShoesProduct
// addProduct  yetti garne tala ko route le
//
//for example ko lagi
// router.route('/').get((req, res) => {
//   return res.status(200).json({
//     message: 'welcome to backend',
//   })
// }
// ).post();

router.route('/').get(getAllProducts);
//deleteProduct
//updateProduct
//getProductId yetti garne tal ko route le



router.route('/:id').get((req, res) => {
  return res.status(200).json({
    message: 'id',
  })
}).patch().delete();


export default router;


