## Overview

This JavaScript system facilitates managing purchase orders for clients.

Key functionalities include:

- Creating new purchase orders with client details and a list of products.
- Adding products to existing orders by specifying their name, quantity, and unit price.
- Displaying all existing purchase orders with complete details.
- Searching for a specific order using its ID and displaying its details.

## How to Run

```bash
npm install
npm run dev
```

## Code Structure

The project consists of the following core classes:

- `Client.js`: Represents a client who places an order.
- `Product.js`: Represents a product included in a purchase order.
- `Order.js`: Represents a purchase order for a client with specified products.
- `PurchaseOrder.js`: Manages purchase orders, allowing adding new orders, retrieving existing orders, and searching by ID.

## Getting Started

Feel free to explore the codebase and experiment with the functionalities provided. You can modify and extend the functionalities based on your specific requirements and test different scenarios.
