const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/productModel')
const app = express()

app.use(express.json())

app.get('/blog', (req, res) => {
        res.send('Hello World!')
})

app.get('/product', async(req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

app.get('/product/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);

    } catch (error) {
     res.status(500).json({message: error.message})   
    }
})

app.post('/product', async(req, res) => {
    try {
        const product = await product.create(req.body)
        res.status(200).json(product);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})
// uodate product
app.put('/product/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        // can not find product
        if (!product){
            return res.status(404).json({message: `Product with id ${id} not found`})
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

mongoose.
connect('mongodb+srv://chelsea:a1234@cluster0.uph4jgf.mongodb.net/project-2?retryWrites=true&w=majority')
.then(() => {
    console.log('Connected to database')
    app.listen(3000, ()  => {
        console.log('Server running on port 3000')
   });
}).catch((error) => {
    console.log(error)
})