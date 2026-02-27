const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Sale = require("./models/Sale");

dotenv.config();

const categories = ["Electronics", "Fashion", "Groceries", "Furniture"];
const statuses = ["Completed", "Pending"];

const products = {
  Electronics: ["Mobile", "Laptop", "Headphones", "Smart Watch", "Tablet"],
  Fashion: ["T-Shirt", "Jeans", "Dress", "Shoes", "Jacket"],
  Groceries: ["Rice", "Oil", "Sugar", "Wheat", "Milk"],
  Furniture: ["Chair", "Table", "Sofa", "Bed", "Cupboard"]
};

const randomItem = arr => arr[Math.floor(Math.random() * arr.length)];
const randomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");

    await Sale.deleteMany(); // clear old data

    const sales = [];

    for (let i = 0; i < 100; i++) {
      const category = randomItem(categories);
      const quantity = randomNumber(1, 10);
      const price = randomNumber(500, 80000);

      sales.push({
        productName: randomItem(products[category]),
        category,
        quantity,
        price,
        totalAmount: quantity * price,
        status: randomItem(statuses),
        createdAt: new Date(
          2024,
          randomNumber(0, 11),
          randomNumber(1, 28)
        )
      });
    }

    await Sale.insertMany(sales);
    console.log("✅ 100 Sales Records Inserted!");

    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedData();