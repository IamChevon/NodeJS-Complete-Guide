const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'cart.json'
);

module.exports = class Cart {

    static addProduct(id, productPrice) {
        //fetch cart
        fs.readFile(p, (error, fileContent) => {

            let cart = { products: [], totalPrice: 0 };
            if (!error) {
                cart = JSON.parse(fileContent);
            }


            //Analyze cart => find existing product
            const existingProductIndex = cart.products.findIndex(prod => prod.id === id);
            const existingProduct = cart.products[existingProductIndex];
            let updatedProduct;

            if (existingProduct) {
                updatedProduct = { ...existingProduct };
                updatedProduct.qty = updatedProduct.qty + 1;
                cart.products = [ ...cart.products ];
                console.log("updating product: ", updatedProduct);
                cart.products[existingProductIndex] = updatedProduct;
            } else {
                updatedProduct = { id: id, qty: 1 };
                cart.products = [ ...cart.products, updatedProduct ];

                console.log("creating product: ", updatedProduct);
            }
            //Add product, increment product quantity
            cart.totalPrice = cart.totalPrice + +productPrice;
            fs.writeFile(p, JSON.stringify(cart), (err) => {
                console.log(err);
            });
        });


    }

    static deleteProduct(id, productPrice) {
        fs.readFile(p, (error, fileContent) => {
            if(err) {
                return 
            }
            const updatedCart = {...cart};
            const product = updatedCart.findIndex(prod => prod.id = id);
            const productQty = product.qty;
            updatedCart.products = products.filter(prod => prod.id !== id);
            updatedCart.totalPrice = cart.totalPrice - productPrice * productQty;
            fs.writeFile(p, JSON.stringify(updatedCart), (err) => {
                console.log(err);
            });
        });
        
    }
};