// Let's assume I have an array of products and I need to create an array with discounted prices

const products = [
    {id: 1, name: "Laptop", price: 1000},
    {id: 2, name: "Mobile", price: 500},
    {id: 3, name: "Tablet", price: 800},
    {id: 4, name: "Headphones", price: 300},
    {id: 5, name: "Keyboard", price: 150},
    {id: 6, name: "Mouse", price: 100},
    {id: 7, name: "Monitor", price: 600}
];

const discountedProducts = products.map((product) =>{
    return {
        id: product.id,
        name: product.name,
        price: product.price * 0.9 // apply 10% discount.
    }
});
console.log(discountedProducts);