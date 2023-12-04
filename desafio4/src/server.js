import express from "express";
import { ProductManager } from "./controlnicial/productManager.js";
import { CartManager } from "./controlnicial/cartManager.js";
import { productsRouter } from "./routes/products.router.js";
import { cartsRouter } from "./routes/carts.router.js";
import handlebars from "express-handlebars";
import http from 'http';
import __dirname from "./utils.js";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new Server(server);
const PORT = 5000; 


app.engine(
    "hbs", 
    handlebars.engine({
        // index.hbs
        extname: "hbs",
    // Plantilla principal
        defaultLayout: "main",
    })
);

app.set("view engine", "hbs");
app.set("views", `${__dirname}/views`);

export  const productManager = new ProductManager;
export const cartManager = new CartManager;

app.use(express.json())
app.use('/api/products', productsRouter)
app.use ('/api/carts', cartsRouter)


app.listen(PORT, () => console.log(`Server Listening on port ${PORT}`))