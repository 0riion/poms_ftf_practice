/**
 * Manages purchase orders for clients.
 */
class PurchaseOrder {
  /**
   * Creates a new PurchaseOrder instance.
   */
  constructor() {
    this.orders = [];
  }

  /**
   * Adds a new order to the system.
   *
   * @param {Client} client - The client who placed the order.
   * @param {Array<Product>} products - An array of products for the order.
   * @returns {number} - The ID of the newly created order.
   */
  addOrder(client, products) {
    const newOrder = new Order(client, products);
    this.orders.push(newOrder);
    return newOrder.id;
  }

  /**
   * Gets all orders stored in the system.
   *
   * @returns {Array<Order>} - An array of all purchase orders.
   */
  getOrders() {
    return this.orders;
  }
}

module.exports = PurchaseOrder;
