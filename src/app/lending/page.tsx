"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { 
  CurrencyDollarIcon,
  ChartBarIcon,
  LockClosedIcon,
  ArrowPathIcon,
  ShieldCheckIcon,
  SparklesIcon,
  GlobeAltIcon,
  CpuChipIcon
} from "@heroicons/react/24/outline";
import Link from "next/link";

export default function LendPage() {
  const [loanAmount, setLoanAmount] = useState(25000);
  const [selectedCrypto, setSelectedCrypto] = useState('ETH');
  const [apr, setApr] = useState(8.9);
  const [term, setTerm] = useState(90);

  const cryptoOptions = [
    { symbol: 'ETH', name: 'Ethereum', ltv: 75 },
    { symbol: 'BTC', name: 'Bitcoin', ltv: 70 },
    { symbol: 'SOL', name: 'Solana', ltv: 65 },
    { symbol: 'DOT', name: 'Polkadot', ltv: 60 }
  ];

  useEffect(() => {
    const baseAPR = 8.9;
    const termModifier = term <= 30 ? -2 : term <= 90 ? 0 : 1.5;
    const ltvModifier = cryptoOptions.find(c => c.symbol === selectedCrypto)?.ltv || 70;
    const calculatedAPR = baseAPR + (70 - ltvModifier) * 0.1 + termModifier;
    setApr(Math.min(calculatedAPR, 15.9));
  }, [selectedCrypto, term]);

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
                  Instant Crypto
                </span>
                <br />
                Liquidity Portal
              </h1>
              <p className="text-xl text-zinc-300 mb-8">
                Get cash or stablecoins against your crypto assets in minutes.
                Keep your long-term position, access liquidity now.
              </p>
              
              <div className="flex gap-4">
                <Link
                  href="/get-started"
                  className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all transform hover:scale-105 flex items-center gap-2"
                >
                  <SparklesIcon className="h-5 w-5" />
                  Start Borrowing
                </Link>
                <Link
                  href="/learn-more"
                 className="border border-purple-500 text-purple-400 hover:bg-purple-500/10 font-semibold py-4 px-8 rounded-lg transition-all">
                  How It Works
                </Link>
              </div>
            </motion.div>

            {/* Loan Calculator */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-1 rounded-2xl"
            >
              <div className="bg-gray-900 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-8">
                  Your Loan Terms
                </h2>
                
                <div className="space-y-8">
                  {/* Crypto Selector */}
                  <div>
                    <label className="text-zinc-300 mb-2 block">Collateral Asset</label>
                    <div className="grid grid-cols-4 gap-4">
                      {cryptoOptions.map((crypto) => (
                        <button
                          key={crypto.symbol}
                          onClick={() => setSelectedCrypto(crypto.symbol)}
                          className={`p-4 rounded-xl transition-all ${
                            selectedCrypto === crypto.symbol
                              ? 'bg-purple-500/20 border border-purple-400'
                              : 'bg-gray-800 hover:bg-gray-700/50'
                          }`}
                        >
                          <span className="text-white font-semibold">{crypto.symbol}</span>
                          <p className="text-sm text-zinc-300">LTV {crypto.ltv}%</p>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Loan Amount */}
                  <div>
                    <label className="text-zinc-300 mb-2 block">Loan Amount</label>
                    <div className="relative bg-gray-800 rounded-xl p-4">
                      <input
                        type="range"
                        min="5000"
                        max="250000"
                        step="5000"
                        value={loanAmount}
                        onChange={(e) => setLoanAmount(Number(e.target.value))}
                        className="w-full range-purple"
                      />
                      <div className="flex justify-between mt-4">
                        <span className="text-zinc-300">$5K</span>
                        <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                          ${(loanAmount / 1000).toFixed(0)}K
                        </div>
                        <span className="text-zinc-300">$250K</span>
                      </div>
                    </div>
                  </div>

                  {/* Term Selector */}
                  <div>
                    <label className="text-zinc-300 mb-2 block">Loan Term</label>
                    <div className="grid grid-cols-3 gap-4">
                      {[30, 90, 180].map((days) => (
                        <button
                          key={days}
                          onClick={() => setTerm(days)}
                          className={`p-4 rounded-xl transition-all ${
                            term === days
                              ? 'bg-blue-500/20 border border-blue-400'
                              : 'bg-gray-800 hover:bg-gray-700/50'
                          }`}
                        >
                          <span className="text-white font-semibold">{days} Days</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* APR Display */}
                  <div className="bg-gray-800/50 p-6 rounded-xl">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-zinc-300">Estimated APR</p>
                        <h3 className="text-3xl font-bold text-white">
                          {apr.toFixed(1)}%
                        </h3>
                      </div>
                      <div className="text-right">
                        <p className="text-zinc-300">Total Repayment</p>
                        <h3 className="text-2xl font-bold text-white">
                          ${(loanAmount * (1 + apr/100)).toLocaleString()}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating Particles */}
        <motion.div 
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {[...Array(40)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full"
              style={{
                width: Math.random() * 20 + 10 + 'px',
                height: Math.random() * 20 + 10 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
              }}
              animate={{
                y: [0, -100, 0],
                x: [0, Math.random() * 50 - 25, 0],
                scale: [1, 0.5, 1],
                opacity: [0.8, 0, 0.8],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Features Grid */}
      <div className="relative py-24 bg-gradient-to-r from-purple-500/10 to-blue-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose CryptoLend?
            </h2>
            <p className="text-zinc-300 max-w-xl mx-auto">
              Institutional-grade services with decentralized efficiency
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: CurrencyDollarIcon,
                title: "Instant Liquidity",
                description: "Funds available in minutes after approval"
              },
              {
                icon: LockClosedIcon,
                title: "Zero Liquidations",
                description: "Automated margin call protection"
              },
              {
                icon: ChartBarIcon,
                title: "Best Rates",
                description: "APR starting at 8.9% - beat traditional finance"
              },
              {
                icon: GlobeAltIcon,
                title: "Global Access",
                description: "Available in 150+ countries, 20+ fiat currencies"
              },
              {
                icon: CpuChipIcon,
                title: "AI Optimization",
                description: "Smart contract-powered risk management"
              },
              {
                icon: ShieldCheckIcon,
                title: "Military Security",
                description: "256-bit encryption + multi-sig cold storage"
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-1 rounded-2xl"
              >
                <div className="h-full bg-gray-900 rounded-2xl p-8 hover:bg-gray-800/50 transition-all">
                  <feature.icon className="h-12 w-12 text-purple-400 mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-zinc-300">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Comparison */}
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
                  Traditional vs Crypto Loans
                </h2>
                <div className="space-y-8">
                  {[
                    { label: "Approval Time", traditional: "2-4 Weeks", crypto: "5 Minutes" },
                    { label: "APR Range", traditional: "15-25%", crypto: "8.9-14.9%" },
                    { label: "Credit Check", traditional: "Required", crypto: "None" },
                    { label: "Global Access", traditional: "Limited", crypto: "150+ Countries" }
                  ].map((item, i) => (
                    <div key={i} className="space-y-4">
                      <h4 className="text-zinc-300">{item.label}</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gray-800/50 p-4 rounded-xl">
                          <p className="text-red-400 font-semibold">{item.traditional}</p>
                          <span className="text-zinc-300 text-sm">Traditional</span>
                        </div>
                        <div className="bg-gray-800/50 p-4 rounded-xl border border-green-400/30">
                          <p className="text-green-400 font-semibold">{item.crypto}</p>
                          <span className="text-zinc-300 text-sm">CryptoLend</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-1 rounded-2xl">
                <div className="bg-gray-900 rounded-2xl p-8">
                  <h3 className="text-4xl font-bold text-white mb-4">
                    $4.8B+
                  </h3>
                  <p className="text-zinc-300 mb-8">Assets Securely Lent</p>
                  <div className="h-48 bg-purple-500/10 rounded-xl mb-6" />
                  <p className="text-zinc-300">
                    Join 1.2M+ users leveraging their crypto assets
                  </p>
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
                Ready to Unlock Your Crypto's Potential?
              </h2>
              <p className="text-zinc-300 mb-8 max-w-xl mx-auto">
                Get instant liquidity while maintaining your long-term position
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