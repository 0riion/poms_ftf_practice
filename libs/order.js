const { v4: uuidv4 } = require("uuid");

const Client = require("./client");
const Product = require("./product");

/**
 * Represents a purchase order for a client with specified products.
 */
class Order {
  /**
   * Creates a new Order instance.
   *
   * @param {Client} client - The client who placed the order.
   * @param {Array<Product>} products - An array of `Product` instances representing the items in the order.
   */
  constructor(client, products) {
    if (!(client instanceof Client)) {
      throw new TypeError("The client must be a Client instance.");
    }

    if (
      !Array.isArray(products) ||
      products.some((product) => !(product instanceof Product))
    ) {
      throw new TypeError(
        "The products must be an array of Product instances."
      );
    }

    this.id = uuidv4();
    this.client = client;
    this.products = products;
  }

  /**
   * Calculates the total price of the order by summing the total price of each product included.
   *
   * @returns {number} - The total price of the order.
   */
  getTotalPrice() {
    return this.products.reduce(
      (total, product) => total + product.quantity * product.unitPrice,
      0
    );
  }

  /**
   * Gets the order's unique identifier.
   *
   * @returns {string} - The unique identifier of the order.
   */
  getOrderId() {
    return this.id;
  }
}

module.exports = Order;
