const Sale = require("../models/Sale");

/* =====================================================
   REUSABLE FILTER BUILDER
===================================================== */
const buildFilter = (query) => {
  const { startDate, endDate, category, status } = query;
  let filter = {};

  if (startDate && endDate) {
    filter.createdAt = {
      $gte: new Date(startDate),
      $lte: new Date(endDate),
    };
  }

  if (category) filter.category = category;
  if (status) filter.status = status;

  return filter;
};

/* =====================================================
   GET ALL SALES (TABLE / LIST)
===================================================== */
exports.getSales = async (req, res) => {
  try {
    const filter = buildFilter(req.query);
    const sales = await Sale.find(filter).sort({ createdAt: -1 });
    res.json(sales);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

/* =====================================================
   SUMMARY CARDS
===================================================== */
exports.getSummary = async (req, res) => {
  try {
    const filter = buildFilter(req.query);
    const sales = await Sale.find(filter);

    const totalRevenue = sales.reduce(
      (sum, s) => sum + s.totalAmount,
      0
    );

    res.json({
      totalRevenue,
      totalOrders: sales.length,
      completed: sales.filter(s => s.status === "Completed").length,
      pending: sales.filter(s => s.status === "Pending").length,
      cancelled: sales.filter(s => s.status === "Cancelled").length,
    });
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

/* =====================================================
   CATEGORY WISE REVENUE (BAR / PIE / DOUGHNUT)
===================================================== */
exports.categoryStats = async (req, res) => {
  try {
    const filter = buildFilter(req.query);

    const data = await Sale.aggregate([
      { $match: filter }, // 🔥 FILTER APPLIED
      {
        $group: {
          _id: "$category",
          revenue: { $sum: "$totalAmount" },
        },
      },
      { $sort: { revenue: -1 } },
    ]);

    res.json(data);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

/* =====================================================
   MONTHLY REVENUE (LINE CHART)
===================================================== */
exports.monthlyRevenue = async (req, res) => {
  try {
    const filter = buildFilter(req.query);

    const data = await Sale.aggregate([
      { $match: filter }, // 🔥 FILTER APPLIED
      {
        $group: {
          _id: { $month: "$createdAt" },
          revenue: { $sum: "$totalAmount" },
        },
      },
      { $sort: { _id: 1 } },
    ]);

    res.json(data);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

/* =====================================================
   ADD SALE
===================================================== */
exports.addSale = async (req, res) => {
  try {
    const { productName, category, quantity, price, status } = req.body;

    const sale = new Sale({
      productName,
      category,
      quantity,
      price,
      totalAmount: quantity * price,
      status,
    });

    await sale.save();
    res.status(201).json({ message: "Sale added successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};