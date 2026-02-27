import React, { useState } from "react";
import Filters from "./Filters";
import { Bar, Pie, Line, Doughnut } from "react-chartjs-2";
import { motion } from "framer-motion";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler,
  Title,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler,
  Title
);

const Charts = ({ category = [], monthly =[] }) => {
  // ================= FILTER STATE =================
const [filters, setFilters] = React.useState({
  startDate: "",
  endDate: "",
  category: "",
  status: "",
});

const handleFilter = (data) => {
  setFilters(data);
};
// ===============================================
  // Ultra-Premium Cyber/Neon Palette
  
  const colors =[
    "#06B6D4", // Electric Cyan
    "#8B5CF6", // Deep Purple
    "#EC4899", // Neon Pink
    "#10B981", // Emerald
    "#F59E0B", // Amber
    "#3B82F6", // Royal Blue
  ];

  // 1. Chart.js Staggered Drawing Animation
  const staggeredAnimation = {
    duration: 2000,
    easing: "easeOutQuart",
    delay: (context) => {
      let delay = 0;
      if (context.type === "data" && context.mode === "default") {
        delay = context.dataIndex * 150;
      }
      return delay;
    },
  };

  // Glassmorphism Tooltip
  const tooltipOptions = {
    backgroundColor: "rgba(9, 9, 11, 0.85)", 
    titleColor: "#f4f4f5", 
    bodyColor: "#a1a1aa", 
    borderColor: "rgba(255, 255, 255, 0.1)",
    borderWidth: 1,
    padding: 16,
    boxPadding: 8,
    usePointStyle: true,
    titleFont: { size: 14, family: "'Inter', sans-serif", weight: "600" },
    bodyFont: { size: 13, family: "'Inter', sans-serif" },
    cornerRadius: 12,
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    animation: staggeredAnimation,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          padding: 24,
          usePointStyle: true,
          pointStyle: "circle",
          font: { family: "'Inter', sans-serif", size: 12, weight: "500" },
          color: "#71717a",
        },
      },
      tooltip: tooltipOptions,
    },
  };

  const gridOptions = {
    scales: {
      x: {
        grid: { display: false, drawBorder: false },
        ticks: { font: { family: "'Inter', sans-serif" }, color: "#52525b" },
      },
      y: {
        grid: {
          color: "rgba(255, 255, 255, 0.03)", 
          drawBorder: false,
        },
        ticks: {
          font: { family: "'Inter', sans-serif" },
          color: "#52525b",
          padding: 12,
        },
      },
    },
  };
// ================= FILTER LOGIC =================
const filteredCategory = category.filter((item) => {
  if (filters.category && item._id !== filters.category) return false;
  return true;
});

const filteredMonthly = monthly;
// ===============================================
  // 2. Framer Motion Variants for Staggered Mounting
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Delay between each card popping in
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 70, damping: 15 } 
    },
  };

  return (
    <>
      <style>{`
        /* Continuous Ambient Background Animations */
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 10s infinite alternate cubic-bezier(0.4, 0, 0.2, 1);
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>

      {/* Deep Space / OLED Dark Background with Ambient Glows */}
      <div className="min-h-screen bg-[#030712] relative overflow-hidden p-6 md:p-12 font-sans text-zinc-100 z-0">
        
        {/* Animated Ambient Glowing Orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-blob"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-blob animation-delay-2000"></div>
        
        {/* Subtle dot grid overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none -z-10"></div>

        {/* Header Section (Animated via Framer Motion) */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12 relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.05] text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-4 shadow-[0_0_20px_rgba(6,182,212,0.1)]">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
            Live Analytics
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-3 bg-gradient-to-r from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
            Financial Intelligence
          </h1>
          <p className="text-zinc-400 font-medium text-lg max-w-2xl">
            Real-time monitoring of your revenue streams and market distribution.
          </p>
        </motion.div>
       {/* Filters */}
<Filters onFilter={handleFilter} />
        {/* Dashboard Grid Container */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative z-10"
        >
          
          {/* Main Hero Line Chart */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="lg:col-span-3 bg-[#09090b]/80 backdrop-blur-2xl p-6 md:p-8 rounded-[28px] border border-white/[0.05] shadow-[0_8px_32px_rgba(0,0,0,0.4)] group hover:border-cyan-500/30 transition-colors duration-500"
          >
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-semibold text-zinc-100 tracking-tight flex items-center gap-3">
                Revenue Trajectory
              </h2>
            </div>
            <div className="h-[380px] w-full">
              <Line
                data={{
                  labels: monthly?.map((m) => `Month ${m._id}`),
                  datasets:[
                    {
                      label: "Monthly Revenue",
                      data: monthly?.map((m) => m.revenue),
                      borderColor: "#06B6D4", 
                      borderWidth: 3,
                      tension: 0.4, 
                      pointRadius: 0, 
                      pointHoverRadius: 6,
                      pointHoverBackgroundColor: "#030712",
                      pointHoverBorderColor: "#06B6D4",
                      pointHoverBorderWidth: 3,
                      fill: true,
                      backgroundColor: (context) => {
                        const ctx = context.chart.ctx;
                        const gradient = ctx.createLinearGradient(0, 0, 0, 400);
                        gradient.addColorStop(0, "rgba(6, 182, 212, 0.25)"); 
                        gradient.addColorStop(1, "rgba(6, 182, 212, 0)"); 
                        return gradient;
                      },
                    },
                  ],
                }}
                options={{ ...chartOptions, ...gridOptions }}
              />
            </div>
          </motion.div>

          {/* Bar Chart Card */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="bg-[#09090b]/80 backdrop-blur-2xl p-6 rounded-[28px] border border-white/[0.05] shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:border-purple-500/30 transition-colors duration-500"
          >
            <h2 className="text-lg font-semibold text-zinc-100 tracking-tight mb-6">Revenue by Category</h2>
            <div className="h-[260px]">
              <Bar
                data={{
                  labels: filteredCategory?.map((c) => c._id),
                  datasets:[
                    {
                      label: "Revenue",
                      data: filteredCategory?.map((c) => c.revenue),
                      backgroundColor: colors.map(color => `${color}99`), 
                      borderColor: colors,
                      borderWidth: 1,
                      borderRadius: 6, 
                      barPercentage: 0.5, 
                      hoverBackgroundColor: colors, 
                    },
                  ],
                }}
                options={{ ...chartOptions, ...gridOptions }}
              />
            </div>
          </motion.div>

          {/* Doughnut Chart Card */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="bg-[#09090b]/80 backdrop-blur-2xl p-6 rounded-[28px] border border-white/[0.05] shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:border-pink-500/30 transition-colors duration-500"
          >
            <h2 className="text-lg font-semibold text-zinc-100 tracking-tight mb-6">Distribution</h2>
            <div className="h-[260px] flex items-center justify-center">
              <Doughnut
                data={{
                  labels: filteredCategory?.map((c) => c._id),
                  datasets:[
                    {
                      data: filteredCategory?.map((c) => c.revenue),
                      backgroundColor: colors,
                      borderWidth: 0, 
                      hoverOffset: 12, 
                      cutout: "82%", 
                    },
                  ],
                }}
                options={chartOptions}
              />
            </div>
          </motion.div>

          {/* Pie Chart Card */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="bg-[#09090b]/80 backdrop-blur-2xl p-6 rounded-[28px] border border-white/[0.05] shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:border-emerald-500/30 transition-colors duration-500"
          >
            <h2 className="text-lg font-semibold text-zinc-100 tracking-tight mb-6">Market Share</h2>
            <div className="h-[260px] flex items-center justify-center">
              <Pie
                data={{
                  labels: filteredCategory?.map((c) => c._id),
                  datasets:[
                    {
                      data: filteredCategory?.map((c) => c.revenue),
                      backgroundColor: colors,
                      borderWidth: 2,
                      borderColor: "#09090b", 
                      hoverOffset: 12,
                    },
                  ],
                }}
                options={chartOptions}
              />
            </div>
          </motion.div>

        </motion.div>
      </div>
    </>
  );
};

export default Charts;