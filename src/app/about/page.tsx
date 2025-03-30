"use client";

import { motion, AnimatePresence } from "framer-motion";
import { 
  SparklesIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
  CpuChipIcon,
  LockClosedIcon,
  ServerIcon,
  FingerPrintIcon
} from "@heroicons/react/24/outline";
import { useState } from "react";
import Link from "next/link";

export default function About() {
  const [showSecurityModal, setShowSecurityModal] = useState(false);

  const securityFeatures = [
    { icon: LockClosedIcon, title: "256-bit Encryption", value: "Active", status: "secure" },
    { icon: ServerIcon, title: "Cold Storage", value: "98% Assets", status: "protected" },
    { icon: FingerPrintIcon, title: "Biometric Auth", value: "Enabled", status: "active" },
    { icon: CpuChipIcon, title: "AI Surveillance", value: "24/7 Monitoring", status: "recording" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center relative z-10"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="inline-block mb-8"
            >
              <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                SINCE 2018 • TRUSTED BY 1.2M+
              </div>
            </motion.div>
            
            <h1 className="text-5xl sm:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Redefining
              </span>
              <br />
              Financial Freedom
            </h1>
            <p className="text-xl text-zinc-300 max-w-2xl mx-auto mb-8">
              We're not just building products - we're creating an economic paradigm shift. 
              Join the revolution that's liberated $4.8B in frozen crypto assets.
            </p>
          </motion.div>
        </div>

        {/* Particle Animation */}
        <motion.div 
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-full"
              style={{
                width: Math.random() * 10 + 5 + 'px',
                height: Math.random() * 10 + 5 + 'px',
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
                duration: Math.random() * 4 + 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Value Canvas Section */}
      <div className="relative z-10 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="relative h-96 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-3xl p-1"
            >
              <div className="h-full bg-gray-900 rounded-3xl p-8">
                <div className="flex flex-col gap-6 h-full justify-center">
                  {[
                    { icon: SparklesIcon, text: "Zero Collateral Liquidations" },
                    { icon: CpuChipIcon, text: "AI-Powered Risk Management" },
                    { icon: ShieldCheckIcon, text: "256-bit Quantum-Resistant Encryption" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <item.icon className="h-8 w-8 text-purple-400 flex-shrink-0" />
                      <span className="text-xl text-zinc-300">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-3xl p-1"
            >
              <div className="bg-gray-900 rounded-3xl p-8">
                <h3 className="text-3xl font-bold text-white mb-6">
                  Real-Time Market Leadership
                </h3>
                <div className="space-y-8">
                  {[
                    { value: "$4.8B+", label: "Assets Liberated" },
                    { value: "150+", label: "Countries Supported" },
                    { value: "0.001s", label: "Avg Transaction Finality" }
                  ].map((stat, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex items-center gap-4">
                        <div className="h-1 bg-gradient-to-r from-purple-400 to-blue-400 w-full rounded-full" />
                        <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                          {stat.value}
                        </div>
                      </div>
                      <p className="text-zinc-300 text-lg">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Security Showcase */}
      <div className="relative py-24 bg-gradient-to-r from-purple-500/10 to-blue-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              className="text-center lg:text-left"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Military-Grade Security
              </h2>
              <p className="text-zinc-300 mb-8 max-w-xl">
                Real-time protection powered by quantum-resistant cryptography
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowSecurityModal(true)}
                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all transform flex items-center gap-2 mx-auto lg:mx-0"
              >
                <ShieldCheckIcon className="h-5 w-5" />
                Explore Live Security
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ rotate: -5, opacity: 0 }}
              whileInView={{ rotate: 0, opacity: 1 }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { icon: ShieldCheckIcon, title: "Cold Storage", desc: "98% assets offline" },
                { icon: GlobeAltIcon, title: "Global Nodes", desc: "42 regions worldwide" },
                { icon: CpuChipIcon, title: "AI Monitoring", desc: "24/7 threat detection" },
                { icon: ChartBarIcon, title: "Audits", desc: "100+ completed" }
              ].map((item, i) => (
                <div key={i} className="bg-gray-900 p-6 rounded-xl hover:bg-gray-800/50 transition-all">
                  <item.icon className="h-8 w-8 text-purple-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-zinc-300">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Security Modal */}
      <AnimatePresence>
        {showSecurityModal && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => setShowSecurityModal(false)}
          >
            <motion.div
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-1 rounded-2xl max-w-2xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-gray-900 rounded-2xl p-8 relative">
                <button
                  onClick={() => setShowSecurityModal(false)}
                  className="absolute top-4 right-4 text-zinc-400 hover:text-white"
                >
                  ✕
                </button>
                
                <h3 className="text-3xl font-bold text-white mb-8">
                  Live Security Dashboard
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {securityFeatures.map((feature, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ y: -5 }}
                      className="bg-gray-800/50 p-6 rounded-xl"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <feature.icon className="h-8 w-8 text-purple-400" />
                        <div>
                          <h4 className="text-lg font-semibold text-white">
                            {feature.title}
                          </h4>
                          <p className={`text-sm ${
                            feature.status === 'secure' 
                              ? 'text-green-400' 
                              : 'text-purple-400'
                          }`}>
                            {feature.status}
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-zinc-300 text-sm">
                          {feature.value}
                        </span>
                        <div className="relative">
                          <div className="h-2 bg-gray-700 rounded-full w-24">
                            <div className="h-full bg-gradient-to-r from-purple-400 to-blue-400 rounded-full w-full animate-pulse" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-gray-800/50 rounded-xl">
                  <div className="flex items-center gap-4">
                    <GlobeAltIcon className="h-6 w-6 text-green-400" />
                    <div className="flex-1">
                      <div className="flex justify-between mb-2">
                        <span className="text-white">Global Nodes</span>
                        <span className="text-purple-400">42 Online</span>
                      </div>
                      <div className="h-1 bg-gray-700 rounded-full">
                        <div 
                          className="h-full bg-gradient-to-r from-green-400 to-blue-400 rounded-full" 
                          style={{ width: '100%' }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <p className="text-zinc-300 text-sm">
                    Audited by: <span className="text-white">CertiK</span>, 
                    <span className="text-white"> Hacken</span>, 
                    <span className="text-white"> Quantstamp</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Blockchain Ecosystem */}
      <div className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Universal Blockchain Support
            </h2>
            <p className="text-zinc-300 max-w-xl mx-auto">
              Interoperability across 50+ chains and growing
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-5 gap-8 opacity-90"
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
          >
            {['BTC', 'ETH', 'SOL', 'DOT', 'AVAX'].map((chain, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-gray-900 p-6 rounded-xl text-center group"
              >
                <div className="h-16 w-16 bg-purple-500/10 rounded-lg mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-purple-400">
                  {chain}
                </div>
                <span className="text-zinc-300 group-hover:text-purple-400 transition-colors">
                  {chain === 'BTC' ? 'Bitcoin' : 
                   chain === 'ETH' ? 'Ethereum' :
                   chain === 'SOL' ? 'Solana' :
                   chain === 'DOT' ? 'Polkadot' : 'Avalanche'}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

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
                Ready for Financial Revolution?
              </h2>
              <p className="text-zinc-300 mb-8 max-w-xl mx-auto">
                Join millions unlocking their crypto potential
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/get-started"
                  className="inline-block bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold py-4 px-12 rounded-lg transition-all"
                >
                  Start in 60 Seconds
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}