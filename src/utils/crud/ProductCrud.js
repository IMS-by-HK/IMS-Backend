// Provide CRUD functions for the ProductModel 
const { ProductModel } = require("../../models/ProductModel");

// Create new product
async function createProduct (item, price, quantity, category, description = null) {
    let result = await ProductModel.create({
        item: item,
        price: price,
        quantity: quantity,
        category: category,
        description: description
});

    return result;
}

// Find one product
async function findOneProduct() {
}


// Find many products
async function findManyProducts() {
}


// Update one product
async function updateOneProduct() {
}

// Update many products
async function updateManyProducts() {

}
async function deleteOneProduct () {

}

async function deleteManyProducts () {

}

module.exports = {
    createProduct,
    findOneProduct, findManyProducts,
    updateOneProduct, updateManyProducts,
    deleteOneProduct, deleteManyProducts
}