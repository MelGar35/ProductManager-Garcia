
class ProductManager {
  constructor(){
    this.products=[]
    } 

  addProduct(title, description, price, thumbnail, code, stock){
    let product = {
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    }

  if (this.products.length === 0) {
    product["id"] = 1;
  } else {
    product["id"] = this.products[this.products.length - 1]["id"] + 1;
    }

  let codeCopy = this.products.some((copy) => copy.code ===code) 
    if(codeCopy){
      console.log("El codigo ya existe, vuelva a intentarlo")
    }else{
      this.products.push(product);
    }
  }

  getProducts(){
    return this.products
  }

  getProductById(id){
   let idProduct = this.products.find((product)=> product.id === id)
    if(idProduct){
      console.log("El id existe")
      console.log(idProduct);
    }else{
      console.log("Error, not found")
    }
  }
  }

//Creacion de nueva instancia
const product = new ProductManager()

//Creacion de nuevos productos
product.addProduct("Sahumo", "Sahumo de Romero y lavanda", 500, "img/sahumo.jpg","AA2F", 10)
product.addProduct("Porta sahumo", "De ceramica", 1500, "img/porta.jpg","AA3F", 5)
product.addProduct("Mazo tarot Gatitos", "48 cartas", 3500, "img/mazogatitos.jpg","AA4F", 7)
product.addProduct("Libro el tarot y el inconsciente", "300 paginas", 5000, "img/librotarot.jpg","AA5F", 8)
//code repetido para verificar 
product.addProduct("Libro el tarot y el inconsciente", "300 paginas", 5000, "img/librotarot.jpg","AA5F", 8)

//Validación del metodo getProduct
console.log(product.getProducts());

//Validación del metodo getProductById
product.getProductById(2)
product.getProductById(7)





