
"use client";

import { motion } from "framer-motion";
import { GlobeAltIcon, RocketLaunchIcon, LockClosedIcon, ChartBarIcon, CurrencyDollarIcon, ArrowPathIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function LearnMore() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl sm:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Future
              </span>
              <br />
              of Crypto Finance
            </h1>
            <p className="text-xl text-zinc-300 max-w-2xl mx-auto mb-8">
              Unleash your crypto's potential without selling your assets. Get instant liquidity with rates that traditional banks can't match.
            </p>
            
            <div className="flex justify-center gap-4">
              <Link
                href="/get-started"
                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all transform hover:scale-105 flex items-center gap-2"
              >
                <RocketLaunchIcon className="h-5 w-5" />
                Start Now
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Floating Crypto Elements */}
        <motion.div 
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full"
              style={{
                width: Math.random() * 40 + 20 + 'px',
                height: Math.random() * 40 + 20 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
              }}
              animate={{
                y: [0, -100, 0],
                x: [0, Math.random() * 100 - 50, 0],
                scale: [1, 0.8, 1],
                opacity: [0.8, 0.2, 0.8],
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

      {/* Value Proposition Grid */}
      <div className="relative z-10 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                icon: CurrencyDollarIcon,
                title: "Instant Liquidity",
                description: "Access funds within minutes of approval, 24/7/365"
              },
              {
                icon: LockClosedIcon,
                title: "Military-Grade Security",
                description: "256-bit encryption + multi-sig cold storage"
              },
              {
                icon: ChartBarIcon,
                title: "Lowest Rates",
                description: "Starting at 9.9% APR - up to 60% lower than competitors"
              },
              {
                icon: GlobeAltIcon,
                title: "Global Access",
                description: "Available in 150+ countries with 20+ fiat currencies"
              },
              {
                icon: ArrowPathIcon,
                title: "Auto-Renewal",
                description: "Flexible loan terms with automatic rollover options"
              },
              {
                icon: RocketLaunchIcon,
                title: "Future-Proof",
                description: "Supports 50+ blockchains and growing"
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-0.5 rounded-2xl"
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

      {/* Interactive Comparison Section */}
      <div className="relative py-24 bg-gradient-to-r from-purple-500/10 to-blue-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why CryptoLend Wins
            </h2>
            <p className="text-zinc-300 max-w-xl mx-auto">
              Traditional finance vs. decentralized future
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              {[
                "3-minute approval vs. 3-week wait",
                "12% avg APR vs. 19% credit cards",
                "No credit checks vs. Hard inquiries",
                "24/7 access vs. Banking hours",
                "Global access vs. Regional restrictions"
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  className="flex items-center gap-4 p-6 bg-gray-900 rounded-xl"
                >
                  <div className="bg-purple-500/10 p-3 rounded-lg">
                    <CheckIcon className="h-6 w-6 text-purple-400" />
                  </div>
                  <span className="text-zinc-300">{item}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-0.5 rounded-2xl"
            >
              <div className="h-full bg-gray-900 rounded-2xl p-8">
                <div className="aspect-video bg-purple-500/10 rounded-xl mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">
                  Live Market Demo
                </h3>
                <p className="text-zinc-300">
                  Watch real-time loan processing powered by blockchain technology
                </p>
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
            className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-0.5 rounded-2xl"
          >
            <div className="bg-gray-900 rounded-2xl p-12">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Join the Financial Revolution?
              </h2>
              <p className="text-zinc-300 mb-8 max-w-xl mx-auto">
                Be part of the 1.2M+ users who've unlocked over $4.8B in crypto assets
              </p>
              <Link
                href="/get-started"
                className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-12 rounded-lg transition-all transform hover:scale-105"
              >
                Get Instant Access
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function CheckIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      {...props}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}