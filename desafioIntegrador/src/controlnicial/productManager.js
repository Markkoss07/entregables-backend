import {promises as fs} from 'fs'


export class ProductManager {
  constructor() {
    this.path = 'products.json';
    this.products = [];
  }

  saveProducts() {
    const data = JSON.stringify(this.products, null, 2);
    fs.writeFileSync(this.path, data, 'utf8');
  }

  addProduct = async ({
    title, 
    descripcion,
    thumbanail,
    price,
    code, 
    stock,
    status,
    category
  }) => {
    const id = this.products.length + 1;

    let newProduct = {
      id,
      title,
      descripcion,
      thumbanail,
      price,
      code,
      stock,
      status,
      category
    }

    this.products = await this.getProducts()
    this.products.push(newProduct)

    await fs.writeFile(this.path, JSON.stringify(this.products))

    return newProduct;
  }

  getProducts = async () =>{
    const response = await fs.readFile(this.path, 'utf8')
    const responseJSON = JSON.parse(response)

    return responseJSON;
  }

  getProductById= async (id) => {
    const response = await this.getProducts();

    const product = response.find(product => product.id == id) 
    if(product){
      return product
    } else {
      console.log('Producto no encontrado');
    }
  }

  updateProduct(id, updatedFields) {
    const index = this.products.findIndex(product => product.id === id);
    if (index !== -1) {
      this.products[index] = { ...this.products[index], ...updatedFields };
      this.saveProducts();
      return this.products[index];
    } else {
      console.log('Producto no encontrado');
    }
  }

  deleteProduct = async (id) => {
    const products = await this.getProducts();
    const index = products.findIndex(product => product.id === id);

    if (index !== -1) {
      products.splice(index, 1);
      await fs.writeFile(this.path, JSON.stringify(products))
    } else {
      console.log('Producto no encontrado');
    }
  }
}