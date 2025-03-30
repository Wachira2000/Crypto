"use client";

import { motion, AnimatePresence } from "framer-motion";
import { 
  BookOpenIcon,
  AcademicCapIcon,
  ChartBarIcon,
  GlobeAltIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  SparklesIcon
} from "@heroicons/react/24/outline";
import { useState } from "react";
import Link from "next/link";

export default function Resources() {
  const [selectedResource, setSelectedResource] = useState(null);
  const [activeGlobeRegion, setActiveGlobeRegion] = useState(null);

  const resourceCategories = [
    {
      title: "Crypto Essentials",
      icon: BookOpenIcon,
      color: "purple",
      items: [
        "Beginner's Guide to DeFi",
        "Wallet Security Masterclass",
        "NFT Fundamentals Course"
      ]
    },
    {
      title: "Market Analysis",
      icon: ChartBarIcon,
      color: "blue",
      items: [
        "Live Market Dashboard",
        "Institutional Research Portal",
        "Algorithmic Trading Blueprint"
      ]
    },
    {
      title: "Security Vault",
      icon: ShieldCheckIcon,
      color: "green",
      items: [
        "Cold Storage Guide",
        "Smart Contract Audit Toolkit",
        "Quantum Resistance Whitepaper"
      ]
    }
  ];

  const globeRegions = [
    { id: "na", name: "North America", volume: "$2.4B", users: "540K+" },
    { id: "eu", name: "Europe", volume: "$1.8B", users: "420K+" },
    { id: "as", name: "Asia", volume: "$3.1B", users: "680K+" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center relative z-10"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="inline-block mb-8"
            >
              <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                UPDATED HOURLY • TRUSTED BY INSTITUTIONS
              </div>
            </motion.div>
            
            <h1 className="text-5xl sm:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Ultimate Crypto
              </span>
              <br />
              Knowledge Nexus
            </h1>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto mb-8">
              Access institutional-grade research, interactive learning modules, 
              and real-time market intelligence powered by blockchain AI.
            </p>
          </motion.div>
        </div>

        {/* Floating Crypto Particles */}
        <motion.div 
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {[...Array(80)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-full"
              style={{
                width: Math.random() * 12 + 3 + 'px',
                height: Math.random() * 12 + 3 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
              }}
              animate={{
                y: [0, -200, 0],
                x: [0, Math.random() * 100 - 50, 0],
                scale: [1, 0.3, 1],
                opacity: [0.8, 0, 0.8],
              }}
              transition={{
                duration: Math.random() * 6 + 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Interactive Globe Section */}
      <div className="relative py-24 bg-gradient-to-r from-purple-500/10 to-blue-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <div className="relative h-[500px] bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-3xl p-1">
              <div className="h-full bg-gray-900 rounded-3xl p-8 flex items-center justify-center">
                <div className="relative w-full h-full">
                  {/* Globe Visualization */}
                  <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,white_30%,transparent_70%)]">
                    <div className="absolute inset-0 bg-[url('/world-map.svg')] bg-contain bg-no-repeat bg-center opacity-20" />
                  </div>
                  
                  {/* Interactive Regions */}
                  {globeRegions.map((region, i) => (
                    <motion.div
                      key={region.id}
                      className={`absolute cursor-pointer p-4 backdrop-blur-sm transition-all
                        ${activeGlobeRegion === region.id 
                          ? "bg-purple-500/20 border border-purple-400/30 rounded-xl"
                          : "opacity-50 hover:opacity-75"}`}
                      style={{
                        left: `${30 + i*30}%`,
                        top: `${20 + i*15}%`
                      }}
                      onHoverStart={() => setActiveGlobeRegion(region.id)}
                      onHoverEnd={() => setActiveGlobeRegion(null)}
                    >
                      <h3 className="text-lg font-semibold text-white">
                        {region.name}
                      </h3>
                      <div className="text-sm text-zinc-300 space-y-1">
                        <p>Volume: {region.volume}</p>
                        <p>Users: {region.users}</p>
                      </div>
                    </motion.div>
                  ))}

                  {/* Connection Lines */}
                  <svg className="absolute inset-0 w-full h-full">
                    {[...Array(18)].map((_, i) => (
                      <motion.path
                        key={i}
                        d={`M ${Math.random() * 100}% ${Math.random() * 100}% L ${Math.random() * 100}% ${Math.random() * 100}%`}
                        stroke="url(#globeGradient)"
                        strokeWidth="0.5"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatType: 'reverse'
                        }}
                      />
                    ))}
                    <defs>
                      <linearGradient id="globeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#8B5CF6" />
                        <stop offset="100%" stopColor="#3B82F6" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>

            <div className="space-y-12">
              <h2 className="text-4xl font-bold text-white">
                Global Crypto Intelligence
              </h2>
              <p className="text-zinc-300 text-lg">
                Real-time insights from our worldwide network of nodes, traders, 
                and institutional partners
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "42M+", label: "Data Points Analyzed" },
                  { value: "0.2s", label: "Avg Update Latency" },
                  { value: "150+", label: "Countries Tracked" },
                  { value: "24/7", label: "Market Coverage" }
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -5 }}
                    className="bg-gray-900 p-6 rounded-xl"
                  >
                    <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <p className="text-zinc-300 text-sm mt-2">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Resource Matrix */}
      <div className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Institutional-Grade Resources
            </h2>
            <p className="text-zinc-300 max-w-xl mx-auto">
              Everything from beginner guides to advanced trading frameworks
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resourceCategories.map((category, i) => (
              <motion.div
                key={i}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-1 rounded-2xl"
              >
                <div className="h-full bg-gray-900 rounded-2xl p-8">
                  <category.icon className={`h-12 w-12 mb-6 ${
                    category.color === 'purple' ? 'text-purple-400' :
                    category.color === 'blue' ? 'text-blue-400' : 'text-green-400'
                  }`} />
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {category.title}
                  </h3>
                  <ul className="space-y-4">
                    {category.items.map((item, j) => (
                      <li
                        key={j}
                        className="flex items-center gap-3 text-zinc-300 hover:text-white cursor-pointer transition-colors"
                        onClick={() => setSelectedResource(item)}
                      >
                        <div className="h-2 w-2 bg-purple-400 rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Learning Path */}
      <div className="relative py-24 bg-gradient-to-r from-purple-500/10 to-blue-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div
              className="flex-1"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Personalized Learning Journey
              </h2>
              <div className="space-y-6">
                {[
                  { level: "1. Foundation", title: "Crypto Literacy Certification" },
                  { level: "2. Strategy", title: "Portfolio Optimization Lab" },
                  { level: "3. Mastery", title: "Institutional Trading Simulation" }
                ].map((step, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 10 }}
                    className="p-6 bg-gray-900 rounded-xl border border-purple-500/20 cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 bg-purple-500/10 rounded-lg flex items-center justify-center text-purple-400">
                        0{i+1}
                      </div>
                      <div>
                        <p className="text-zinc-400 text-sm">{step.level}</p>
                        <p className="text-white text-lg font-semibold">{step.title}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="flex-1"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
            >
              <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-1 rounded-2xl">
                <div className="bg-gray-900 rounded-2xl p-8 aspect-video flex items-center justify-center">
                  <div className="text-center">
                    <CpuChipIcon className="h-16 w-16 text-purple-400 mx-auto mb-6" />
                    <h3 className="text-2xl font-bold text-white mb-4">
                      AI-Powered Learning Engine
                    </h3>
                    <p className="text-zinc-300 mb-6">
                      Adaptive content that evolves with your skill level
                    </p>
                    <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-all">
                      Start Assessment
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Resource Modal */}
      <AnimatePresence>
        {selectedResource && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-lg z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedResource(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-1 rounded-2xl max-w-2xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-gray-900 rounded-2xl p-8 relative">
                <button
                  onClick={() => setSelectedResource(null)}
                  className="absolute top-4 right-4 text-zinc-400 hover:text-white"
                >
                  ✕
                </button>
                <h3 className="text-3xl font-bold text-white mb-6">
                  {selectedResource}
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl">
                    <SparklesIcon className="h-6 w-6 text-purple-400" />
                    <p className="text-zinc-300">Interactive 3D Modules</p>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl">
                    <CurrencyDollarIcon className="h-6 w-6 text-blue-400" />
                    <p className="text-zinc-300">Live Market Integration</p>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl">
                    <ShieldCheckIcon className="h-6 w-6 text-green-400" />
                    <p className="text-zinc-300">Security Sandbox Environment</p>
                  </div>
                </div>
                <button className="mt-8 w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 rounded-lg transition-all">
                  Launch Resource
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <div className="relative py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            className="relative overflow-hidden rounded-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-20" />
            <div className="relative bg-gray-900/80 backdrop-blur-xl p-12">
              <h2 className="text-4xl font-bold text-white mb-6">
                Start Your Mastery Journey
              </h2>
              <p className="text-zinc-300 mb-8 max-w-xl mx-auto">
                Join 1.2M+ professionals already accelerating their crypto expertise
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/get-started"
                  className="inline-block bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold py-4 px-12 rounded-lg transition-all"
                >
                  Begin Learning Now
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}