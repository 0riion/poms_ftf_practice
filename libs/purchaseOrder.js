const Order = require("./order");

class PurchaseOrder {
  constructor() {
    this.orders = [];
  }

  addOrder(client, products) {
    const newOrder = new Order(client, products);
    this.orders.push(newOrder);
    return newOrder.id;
  }

  getOrders() {
    return this.orders;
  }
}

module.exports = PurchaseOrder;
