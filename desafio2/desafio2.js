class ProductManager {
    constructor() {
      this.products = [];
      this.productIdCounter = 1;
    }
  
    addProduct(productData) {
      if (
        !productData.titulo ||
        !productData.descripcion ||
        !productData.precio ||
        !productData.imagen ||
        !productData.codigo ||
        !productData.stock
      ) {
        console.log("Todos los campos son obligatorios");
        return;
      }
  

      if (this.products.some((product) => product.codigo === productData.codigo)) {
        console.log("El código de producto ya existe");
        return;
      }
  
      const nuevoProducto = {
        id: this.productIdCounter,
        titulo: productData.titulo,
        descripcion: productData.descripcion,
        precio: productData.precio,
        imagen: productData.imagen,
        codigo: productData.codigo,
        stock: productData.stock,
      };
  
      this.products.push(nuevoProducto);
      this.productIdCounter++;
  
      console.log("Producto agregado con éxito");
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(id) {
      const product = this.products.find((product) => product.id === id);
  
      if (product) {
        return product;
      } else {
        console.log("Producto no encontrado");
        return null;
      }
    }
  }

  const productManager = new ProductManager();
  
  productManager.addProduct({
    titulo: "La noche estrellada",
    descripcion: "representa la vista desde la ventana de la habitación del pintor  Vincent van Gogh durante su estancia en un asilo psiquiátrico.",
    precio: 110000,
    imagen: "https://media.admagazine.com/photos/618a6acbcc7069ed5077ca7f/master/w_1600,c_limit/68704.jpg",
    codigo: "A1",
    stock: 10,
  });
  
  productManager.addProduct({
    titulo: "La joven de la perla",
    descripcion: "La posición del retrato y el pendiente de perla que destaca en su vestimenta ha sido uno de los grandes misterios del mundo del arte.",
    precio: 80000,
    imagen: "https://media.admagazine.com/photos/618a6acb5e45a526c6be8f9c/master/w_1600,c_limit/68703.jpg",
    codigo: "A2",
    stock: 10,
  });
  productManager.addProduct({
    titulo: "El horizonte",
    descripcion: "El objetivo de esta obra es concienciar sobre la conservación de las montañas, teniendo en cuenta su papel en los ecosistemas.",
    precio: 18000,
    imagen: "https://www.p55.art/cdn/shop/articles/Design_sem_nome_1_54a30f84-cf36-484f-a29c-4437cd37ccf3.png?v=1639070159",
    codigo: "A3",
    stock: 10,
  });
  
  const allProducts = productManager.getProducts();
  console.log("Todos los productos:", (allProducts));