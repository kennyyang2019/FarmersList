class Cart {
    constructor(){
        this.products = [];
        this.total = 0;
    }
    addProduct(product){
        this.products.push(product);
        this.total += product.price;
    }
    removeProduct(i){
        if(i>this.products.length) return "Product does not exist in the cart!";
        this.total -= this.products[i].price;
        this.products.splice(i,1);
    }
    getTotal(){
        return "$" + this.total;
    }
    clear(){
        this.products = [];
        this.total = 0;
    }
}

module.exports = Cart;