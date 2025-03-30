"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { 
  CurrencyDollarIcon,
  LockClosedIcon,
  ShieldCheckIcon,
  SparklesIcon,
  GlobeAltIcon,
  CpuChipIcon,
  ArrowsRightLeftIcon,
  BanknotesIcon
} from "@heroicons/react/24/outline";
import { CalculatorGuide } from "../components/CalculatorGuide";
import Link from "next/link";

export default function BorrowPage() {
  const [collateralAmount, setCollateralAmount] = useState(10);
  const [selectedCrypto, setSelectedCrypto] = useState('ETH');
  const [loanAmount, setLoanAmount] = useState(7500);
  const [term, setTerm] = useState(90);
  const [ltv, setLtv] = useState(75);

  const cryptoOptions = [
    { symbol: 'ETH', name: 'Ethereum', price: 3000, ltv: 75 },
    { symbol: 'BTC', name: 'Bitcoin', price: 60000, ltv: 70 },
    { symbol: 'SOL', name: 'Solana', price: 150, ltv: 65 },
    { symbol: 'DOT', name: 'Polkadot', price: 7, ltv: 60 }
  ];

  useEffect(() => {
    const selected = cryptoOptions.find(c => c.symbol === selectedCrypto);
    if (selected) {
      const maxLoan = (selected.price * collateralAmount) * (selected.ltv / 100);
      setLoanAmount(maxLoan);
      setLtv(selected.ltv);
    }
  }, [collateralAmount, selectedCrypto]);

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
                  Smart Crypto
                </span>
                <br />
                Leverage Engine
              </h1>
              <p className="text-xl text-zinc-300 mb-8">
                Multiply your crypto's potential without selling. Get instant liquidity at rates banks can't match.
              </p>
              
              <div className="flex gap-4">
              <Link
                  href="/learn-more"className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all transform hover:scale-105 flex items-center gap-2">
                  <SparklesIcon className="h-5 w-5" />
                  Get Instant Offer
                </Link>     
                
                 <CalculatorGuide />
                
              </div>
            </motion.div>

            {/* Interactive Calculator */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-1 rounded-2xl"
            >
              <div className="bg-gray-900 rounded-2xl p-8">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-3xl font-bold text-white">Borrow Power</h2>
                  <div className="flex items-center gap-2 text-green-400">
                    <div className="h-2 w-2 bg-green-400 rounded-full animate-pulse" />
                    Live Rates
                  </div>
                </div>

                {/* Crypto Selector */}
                <div className="space-y-8">
                  <div>
                    <label className="text-zinc-300 mb-4 block">Collateral Asset</label>
                    <div className="grid grid-cols-4 gap-4">
                      {cryptoOptions.map((crypto) => (
                        <motion.button
                          key={crypto.symbol}
                          whileHover={{ scale: 1.05 }}
                          onClick={() => setSelectedCrypto(crypto.symbol)}
                          className={`p-3 rounded-xl transition-all ${
                            selectedCrypto === crypto.symbol
                              ? 'bg-purple-500/20 border border-purple-400'
                              : 'bg-gray-800 hover:bg-gray-700/50'
                          }`}
                        >
                          <span className="text-white font-semibold">{crypto.symbol}</span>
                          <p className="text-xs text-zinc-300">LTV {crypto.ltv}%</p>
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Collateral Input */}
                  <div>
                    <label className="text-zinc-300 mb-4 block">Collateral Amount</label>
                    <div className="bg-gray-800 rounded-xl p-4">
                      <input
                        type="range"
                        min="1"
                        max="100"
                        value={collateralAmount}
                        onChange={(e) => setCollateralAmount(Number(e.target.value))}
                        className="w-full range-purple"
                      />
                      <div className="flex justify-between mt-4">
                        <span className="text-zinc-300">1 {selectedCrypto}</span>
                        <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                          {collateralAmount} {selectedCrypto}
                        </div>
                        <span className="text-zinc-300">100 {selectedCrypto}</span>
                      </div>
                    </div>
                  </div>

                  {/* Loan Preview */}
                  <motion.div 
                    className="bg-gray-800/50 p-6 rounded-xl"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="text-zinc-300">You Receive</p>
                        <h3 className="text-3xl font-bold text-white">
                          ${loanAmount.toLocaleString()}
                        </h3>
                      </div>
                      <ArrowsRightLeftIcon className="h-8 w-8 text-purple-400" />
                    </div>
                    <div className="flex justify-between text-zinc-300 text-sm">
                      <span>LTV Ratio</span>
                      <span>{ltv}%</span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Animated Grid Background */}
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {[
              {
                icon: BanknotesIcon,
                title: "Instant Funding",
                description: "Receive funds in minutes after approval",
                color: "purple"
              },
              {
                icon: LockClosedIcon,
                title: "No Liquidations",
                description: "Automated risk management protects your collateral",
                color: "blue"
              },
              {
                icon: CpuChipIcon,
                title: "AI Optimized",
                description: "Smart contracts ensure best rates",
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

      {/* Live Market Section */}
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
                  Real-Time Market Health
                </h2>
                <div className="space-y-6">
                  {[
                    { label: "Total Borrowed", value: "$4.8B", change: "+12.4%" },
                    { label: "Available Liquidity", value: "$2.1B", change: "+5.2%" },
                    { label: "Avg Interest Rate", value: "9.2%", change: "-0.8%" },
                    { label: "Active Loans", value: "1.2M", change: "+24K" }
                  ].map((metric, i) => (
                    <div key={i} className="flex justify-between items-center p-4 bg-gray-800/50 rounded-xl">
                      <div>
                        <p className="text-zinc-300">{metric.label}</p>
                        <p className="text-2xl font-bold text-white">{metric.value}</p>
                      </div>
                      <span className={`text-sm ${
                        metric.change.startsWith('+') 
                          ? 'text-green-400' 
                          : 'text-red-400'
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
                Global Borrowing Power
              </h2>
              <p className="text-zinc-300 text-lg">
                Join thousands already leveraging their crypto assets
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "0.001s", label: "Avg Transaction Speed" },
                  { value: "150+", label: "Supported Countries" },
                  { value: "24/7", label: "Global Support" },
                  { value: "50+", label: "Crypto Assets" }
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
                Ready to Unlock Your Crypto's Value?
              </h2>
              <p className="text-zinc-300 mb-8 max-w-xl mx-auto">
                Get instant liquidity while maintaining full ownership of your assets
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/get-started"
                  className="inline-block bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold py-4 px-12 rounded-lg transition-all"
                >
                  Start Borrowing Now
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}