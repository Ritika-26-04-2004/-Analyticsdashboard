const express = require("express");
const router = express.Router();
const controller = require("../controllers/salesController");

router.get("/", controller.getSales);
router.post("/", controller.addSale);
router.get("/summary", controller.getSummary);
router.get("/category", controller.categoryStats);
router.get("/monthly", controller.monthlyRevenue);

module.exports = router;