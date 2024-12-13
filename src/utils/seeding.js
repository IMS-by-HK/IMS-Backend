const { createProduct } = require("./crud/ProductCrud");
const { dbConnect, dbDisconnect } = require("./database");

// Seeds the database with example data
async function seed () {

    await createProduct(
        "Example product",      // item
        "2.00",                 // price
        "100",                  // qty
        "Example category",     // category
        "Example description"  // desc
    );

    console.log("Seeding is done, disconnecting from the database!");
    await dbDisconnect();
}

dbConnect().then(() => {
    console.log("Connected to DB, seeding now!");
    seed();
})
