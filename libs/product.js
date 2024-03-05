/**
 * Represents a product included in a purchase order.
 */
class Product {
  /**
   * Creates a new Product instance.
   *
   * @param {string} name - The name of the product.
   * @param {number} quantity - The quantity of the product ordered.
   * @param {number} unitPrice - The price of a single unit of the product.
   */
  constructor(name, quantity, unitPrice) {
    this.name = name;
    this.quantity = quantity;
    this.unitPrice = unitPrice;
  }
}

module.exports = Product;
