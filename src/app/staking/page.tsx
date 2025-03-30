"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { 
  LockClosedIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  GlobeAltIcon,
  CpuChipIcon,
  SparklesIcon,
  ArrowsRightLeftIcon
} from "@heroicons/react/24/outline";
import Link from "next/link";

export default function StakingPage() {
  const [amount, setAmount] = useState(1000);
  const [duration, setDuration] = useState(90);
  const [selectedCoin, setSelectedCoin] = useState('ETH');
  const [apy, setApy] = useState(12.5);
  const [rewards, setRewards] = useState(0);

  const coins = [
    { symbol: 'ETH', name: 'Ethereum', apy: 12.5 },
    { symbol: 'SOL', name: 'Solana', apy: 15.2 },
    { symbol: 'DOT', name: 'Polkadot', apy: 10.8 },
    { symbol: 'AVAX', name: 'Avalanche', apy: 14.3 }
  ];

  useEffect(() => {
    const selected = coins.find(c => c.symbol === selectedCoin);
    if (selected) {
      setApy(selected.apy);
      const dailyRate = selected.apy / 36500;
      const calculated = amount * dailyRate * duration;
      setRewards(calculated);
    }
  }, [amount, duration, selectedCoin]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative z-10"
            >
              <h1 className="text-5xl sm:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Grow Your Crypto
                </span>
                <br />
                Effortlessly
              </h1>
              <p className="text-xl text-zinc-300 mb-8">
                Earn up to 21.5% APY on your digital assets with institutional-grade security
                and instant redemptions.
              </p>
              <div className="flex gap-4">
                <Link
                  href="/get-started"
                  className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all transform hover:scale-105 flex items-center gap-2"
                >
                  <SparklesIcon className="h-5 w-5" />
                  Start Earning
                </Link>
              </div>
            </motion.div>

            {/* Staking Calculator */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-1 rounded-2xl"
            >
              <div className="bg-gray-900 rounded-2xl p-8">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-3xl font-bold text-white">Rewards Calculator</h2>
                  <div className="flex items-center gap-2 text-green-400">
                    <div className="h-2 w-2 bg-green-400 rounded-full animate-pulse" />
                    Live Rates
                  </div>
                </div>

                <div className="space-y-8">
                  {/* Coin Selector */}
                  <div>
                    <label className="text-zinc-300 mb-4 block">Select Asset</label>
                    <div className="grid grid-cols-4 gap-4">
                      {coins.map((coin) => (
                        <motion.button
                          key={coin.symbol}
                          whileHover={{ scale: 1.05 }}
                          onClick={() => setSelectedCoin(coin.symbol)}
                          className={`p-3 rounded-xl transition-all ${
                            selectedCoin === coin.symbol
                              ? 'bg-purple-500/20 border border-purple-400'
                              : 'bg-gray-800 hover:bg-gray-700/50'
                          }`}
                        >
                          <span className="text-white font-semibold">{coin.symbol}</span>
                          <p className="text-xs text-zinc-300">{coin.apy}% APY</p>
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Amount Input */}
                  <div>
                    <label className="text-zinc-300 mb-4 block">Staking Amount</label>
                    <div className="bg-gray-800 rounded-xl p-4">
                      <input
                        type="range"
                        min="100"
                        max="100000"
                        value={amount}
                        onChange={(e) => setAmount(Number(e.target.value))}
                        className="w-full range-purple"
                      />
                      <div className="flex justify-between mt-4">
                        <span className="text-zinc-300">$100</span>
                        <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                          ${amount.toLocaleString()}
                        </div>
                        <span className="text-zinc-300">$100K</span>
                      </div>
                    </div>
                  </div>

                  {/* Duration Selector */}
                  <div>
                    <label className="text-zinc-300 mb-4 block">Staking Duration</label>
                    <div className="grid grid-cols-3 gap-4">
                      {[30, 90, 180].map((days) => (
                        <button
                          key={days}
                          onClick={() => setDuration(days)}
                          className={`p-4 rounded-xl transition-all ${
                            duration === days
                              ? 'bg-blue-500/20 border border-blue-400'
                              : 'bg-gray-800 hover:bg-gray-700/50'
                          }`}
                        >
                          <span className="text-white font-semibold">{days} Days</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Rewards Preview */}
                  <motion.div 
                    className="bg-gray-800/50 p-6 rounded-xl"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-zinc-300">Estimated Rewards</p>
                        <h3 className="text-3xl font-bold text-white">
                          ${rewards.toFixed(2)}
                        </h3>
                      </div>
                      <ArrowsRightLeftIcon className="h-8 w-8 text-purple-400" />
                    </div>
                    <div className="flex justify-between text-zinc-300 text-sm mt-2">
                      <span>APY</span>
                      <span>{apy}%</span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Animated Grid */}
        <motion.div 
          className="absolute inset-0 opacity-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
        >
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />
        </motion.div>
      </div>

      {/* Value Proposition */}
      <div className="relative py-24 bg-gradient-to-r from-purple-500/10 to-blue-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Stake With Us?
            </h2>
            <p className="text-zinc-300 max-w-xl mx-auto">
              Institutional-grade staking with decentralized transparency
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: LockClosedIcon,
                title: "Secure Staking",
                description: "98% assets in cold storage with multi-sig protection",
                color: "purple"
              },
              {
                icon: ChartBarIcon,
                title: "Best Rates",
                description: "Up to 3x higher yields than traditional finance",
                color: "blue"
              },
              {
                icon: GlobeAltIcon,
                title: "Global Access",
                description: "Available in 150+ countries 24/7",
                color: "green"
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-1 rounded-2xl"
              >
                <div className="h-full bg-gray-900 rounded-2xl p-8 hover:bg-gray-800/50 transition-all">
                  <div className={`mb-6 p-4 rounded-lg bg-${feature.color}-500/10 w-fit`}>
                    <feature.icon className={`h-8 w-8 text-${feature.color}-400`} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-zinc-300">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Live Stats */}
      <div className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-1 rounded-2xl"
            >
              <div className="bg-gray-900 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-8">
                  Network Statistics
                </h2>
                <div className="space-y-6">
                  {[
                    { label: "Total Value Staked", value: "$4.8B", change: "+18.2%" },
                    { label: "Active Stakers", value: "1.2M", change: "+24K" },
                    { label: "Avg APY", value: "14.8%", change: "+1.2%" },
                    { label: "Instant Redemptions", value: "98%", change: "Under 5min" }
                  ].map((metric, i) => (
                    <div key={i} className="flex justify-between items-center p-4 bg-gray-800/50 rounded-xl">
                      <div>
                        <p className="text-zinc-300">{metric.label}</p>
                        <p className="text-2xl font-bold text-white">{metric.value}</p>
                      </div>
                      <span className={`text-sm ${
                        metric.change.startsWith('+') 
                          ? 'text-green-400' 
                          : 'text-purple-400'
                      }`}>
                        {metric.change}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="space-y-12"
            >
              <h2 className="text-4xl font-bold text-white">
                Compound Your Wealth
              </h2>
              <p className="text-zinc-300 text-lg">
                Watch your assets grow exponentially with our auto-compounding engine
              </p>
              <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-1 rounded-2xl">
                <div className="bg-gray-900 rounded-2xl p-8 aspect-video flex items-center justify-center">
                  <div className="text-center">
                    <CpuChipIcon className="h-16 w-16 text-purple-400 mx-auto mb-6" />
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Auto-Compounding
                    </h3>
                    <p className="text-zinc-300 mb-6">
                      Daily rewards automatically reinvested
                    </p>
                    <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                      +12.5% Boost
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-1 rounded-2xl"
          >
            <div className="bg-gray-900 rounded-2xl p-12">
              <h2 className="text-4xl font-bold text-white mb-6">
                Start Earning Today
              </h2>
              <p className="text-zinc-300 mb-8 max-w-xl mx-auto">
                Join 1.2M+ investors growing their crypto wealth securely
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/get-started"
                  className="inline-block bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold py-4 px-12 rounded-lg transition-all"
                >
                  Begin Staking Now
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}