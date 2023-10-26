// To connect with your mongoDB database
const mongoose = require('mongoose');
const Product = require('./models/Product');
mongoose.connect('mongodb+srv://dungna0912:dungna@cluster0.vuqmk.mongodb.net/', {
	dbName: 'Fsoft',
	useNewUrlParser: true,
	useUnifiedTopology: true
}, err => err ? console.log(err) : 
	console.log('Connected to yourDB-name database'));


// For backend and express
const express = require('express');
const app = express();
const cors = require("cors");
console.log("App listen at port 5000");
app.use(express.json());
app.use(cors());


app.get('/api/products', async (req, res) => {
	try {
	  const products = await Product.find(); // Lấy tất cả sản phẩm từ cơ sở dữ liệu
	  res.json(products);
	} catch (error) {
	  res.status(500).json({ error: 'Lỗi khi lấy dữ liệu sản phẩm' });
	}
  });
  app.get('/api/products/:id', async (req, res) => {
	try {
	  const productId = req.params.id;
	  const product = await Product.findById(productId); // Tìm sản phẩm theo ID trong cơ sở dữ liệu
  
	  if (!product) {
		return res.status(404).json({ error: 'Không tìm thấy sản phẩm' });
	  }
  
	  res.json(product);
	} catch (error) {
	  res.status(500).json({ error: 'Lỗi khi lấy dữ liệu sản phẩm' });
	}
  });
app.listen(5000);
