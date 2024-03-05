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

The output example is as follows:

```bash
julio@julio-desktop:~/code/open-source/poms_ftf$ npm run dev

> poms_ftf@1.0.0 dev
> node main.js


All Orders: 

Client: undefined
Products: 
- Product 1: 2 x $10
- Product 2: 1 x $20

Total: $40
==================================

All Orders: 

Client: undefined
Products: 
- Product 3: 3 x $30
- Product 4: 4 x $40

Total: $250
==================================
```

## Code Structure

The project consists of the following core classes:

- `Client.js`: Represents a client who places an order.
- `Product.js`: Represents a product included in a purchase order.
- `Order.js`: Represents a purchase order for a client with specified products.
- `PurchaseOrder.js`: Manages purchase orders, allowing adding new orders, retrieving existing orders, and searching by ID.

## Getting Started

Feel free to explore the codebase and experiment with the functionalities provided. You can modify and extend the functionalities based on your specific requirements and test different scenarios.
