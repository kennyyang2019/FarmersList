const Customer = require("./Customer")

class Auth {
    constructor() {
        this.customers = []
    }
    register(name, email, shippingAddress){
        this.customers.push(new Customer(name, email, shippingAddress));
    }
    login(email){
        for(const customer of this.customers){
            if ( customer.email == email) return customer;
        }
        return null;
    }
}

module.exports = Auth;