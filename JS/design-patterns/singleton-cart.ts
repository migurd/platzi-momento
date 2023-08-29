class Product {
    private id: number;
    private name: string;
    private price: number;

    constructor(id: number, name: string, price: number) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    setId(id: number) {
        this.id = id;
    }

    setName(name: string) {
        this.name = name;
    }

    setPrice(price: number) {
        this.price = price;
    }

    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    getPrice() {
        return this.price;
    }
}

/* 
    We create our singleton class, the idea behind having one, is that therere never 2 of these.
    Just one per app or client
*/
class ShoppingCart {
    private static instance: ShoppingCart;
    private products: Product[] = [];

    private constructor() {}

    static getInstance() {
        if(!ShoppingCart.instance) {
            ShoppingCart.instance = new ShoppingCart();
        }
        return ShoppingCart.instance;
    }

    setCart(products: Product[]) {
        this.products = products;
    }

    getCart() {
        return this.products;
    }

    add(product: Product) {
        this.products.push(product);
    }

    addGroup(products: Product[]) {
        // pushes each element of the array 
        products.forEach(prod => this.products.push(prod));
    }

    remove(id: number) {
        this.products = this.products.filter((product) => product.getId() !== id);
    }
}

function app() {
    const cart1 = ShoppingCart.getInstance();
    const cart2 = ShoppingCart.getInstance();

    const products: Product[] = [
        new Product(1, "Dónde", 100),
        new Product(2, "está", 200),
        new Product(3, "Dios", 300)
    ];

    cart1.addGroup(products);
    cart1.remove(1);

    // We never added anything to cart2, but it has the same instance as cart1,
    // so both are equals
    console.log(cart1 === cart2); // true
}

app();