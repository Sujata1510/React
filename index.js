import fs from 'fs';
// import os from 'os';
import express from 'express';
import productRoutes from './routes/productRoutes.js';
import mongoose from 'mongoose';
import userRoutes from './routes/userRoutes.js';
const app = express();
mongoose.connect('mongodb+srv://sujakutuwa2:Happysoul@cluster0.cxvs4.mongodb.net/Shop').then(() => {
  console.log('successfully connected');
}).catch(() => {
  console.log('sth');
})
const products = [
  {
    id: 1,
    name: 'laptop',
  },
  {
    id: 2,
    name: 'mobile',
  },
  {
    id: 3,
    name: 'abc',
  },
];
app.use(express.json());
// app.use((req, res, next) => {
//   const { id } = req.query;
//   if ([1, 2, 3].includes(Number(id))) {
//     return next();
//   }
//   // return res.status(400).json({
//   //   message: 'provide valid id'
//   // });
// });
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  // console.log(req.query);
  const { id } = req.query;
  const product = products.find((prod) => prod.id === Number(id));


  return res.status(200).json({
    message: 'success',
    product
  });

})
app.listen(5000, () => {
  console.log('serverrun');
});

// app.get('/', (req, res) => {
//   // console.log(req);
//   // console.log(res);
//   return res.status(200).json({
//     message: 'welcome to backend'
//   })
// });
// app.get('/products', (req, res) => {
//   console.log(req.query);
//   return res.status(200).json([
//     { id: 1, title: 'Gucci' }
//   ])
// })
// app.use(express.static('uploads'));

// console.log('hello');
// for (let i = 1; i < 1000; i++) {
//   console.log(i)
// }
// console.log('hello s');

// setTimeout(() => {
//   console.log('hello');

// }, 1000);
// console.log('helos');
// const getData = async () => {
//   await new Promise((resolve) => setTimeout(resolve, 3000));
//   console.log('hello');
// }
// const getData1 = async () => {
//   await new Promise((resolve) => setTimeout(resolve, 1000));
//   console.log('hello1000');
// }
// getData();
// getData1();
// fs.readFile('./sample.txt', 'utf-8', (err, data) => {
//   console.log(data);

// });
// fs.writeFile('./sample1.txt', 'hello', (err) => {
//   console.log(err);
// });
// fs.unlink('./sample1.txt', (err) => {

// });
// fs.mkdir('./new', () => {

// });
// fs.writeFile('./new/new.txt', 'this is new file', () => {

// });
// fs.writeFile('./new/new.jsx', 'this is new file', (err) => {
//   console.log(err);

// });


