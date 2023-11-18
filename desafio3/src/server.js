import express from "express";
// import ProductManager from "./desafio3.js";

const app = express();
const PORT = 5000; 

// const ProductManager = new ProductManager('productos.json'); 

app.use(express.json());

app.get("/", (req, res) => {
    res.send("<h1 style='color: red; text-align: center;'>No puedo solucionar el problema que me pide en el cogido que hice</h1>")
})

// app.get('/productos', async (req, res) => {
//   try {
//     const limit = req.query.limit;
//     const productos = await ProductManager.getProducts();

//     if (limit) {
//       res.json(productos.slice(0, parseInt(limit)));
//     } else {
//       res.json(productos);
//     }
//   } catch (error) {
//     res.status(500).json({ error: 'Error al obtener los productos' });
//   }
// });

// app.get('/productos/:pid', async (req, res) => {
//   try {
//     const productosId = parseInt(req.params.pid);
//     const productos = await ProductManager.getProductById(productosId);

//     if (productos) {
//       res.json(productos);
//     } else {
//       res.status(404).json({ error: 'Producto no encontrado' });
//     }
//   } catch (error) {
//     res.status(500).json({ error: 'Error al obtener el producto' });
//   }
// });

app.listen(PORT, () => console.log(`Server Listening on port ${PORT}`))
