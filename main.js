const Client = require("./libs/client");
const Product = require("./libs/product");
const PurchaseOrder = require("./libs/purchaseOrder");

(() => {
  const orders = new PurchaseOrder();

  orders.addOrder(new Client("John Doe"), [
    new Product("Product 1", 2, 10),
    new Product("Product 2", 1, 20),
  ]);

  orders.addOrder(new Client("Jane Doe"), [
    new Product("Product 3", 3, 30),
    new Product("Product 4", 4, 40),
  ]);

  orders.getOrders().forEach((order) => {
    console.log("\nAll Orders: ");
    console.log(`\nClient: ${order.client.name}`);
    console.log("Products: ");
    order.products.forEach((product) => {
      console.log(
        `- ${product.name}: ${product.quantity} x $${product.unitPrice}`
      );
    });
    console.log(`\nTotal: $${order.getTotalPrice()}`);
    console.log("==================================");
  });
})();
