"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ScaleIcon,
  CurrencyDollarIcon,
  ClockIcon,
  ExclamationTriangleIcon
} from "@heroicons/react/24/outline";

export default function TermsOfService() {
  const clauses = [
    {
      icon: ScaleIcon,
      title: "Loan Agreements",
      content: "All crypto-backed loans follow smart contract protocols with transparent liquidation thresholds."
    },
    {
      icon: CurrencyDollarIcon,
      title: "Interest Rates",
      content: "APR ranges from 8.9% to 19.9% based on collateral type and market volatility."
    },
    {
      icon: ClockIcon,
      title: "Liquidation Process",
      content: "48-hour grace period with automated margin calls before collateral liquidation."
    },
    {
      icon: ExclamationTriangleIcon,
      title: "Risk Disclosure",
      content: "Cryptocurrency values fluctuate - we recommend maintaining 150% collateralization."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <div className="bg-gradient-to-r from-purple-400 to-blue-400 text-white w-fit mx-auto p-4 rounded-2xl mb-6">
            <ScaleIcon className="h-16 w-16" />
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Transparent Terms
            </span>
          </h1>
          <p className="text-xl text-zinc-300">
            Clear protocols for decentralized financial operations
          </p>
        </motion.div>

        {/* Key Clauses */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {clauses.map((clause, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-1 rounded-2xl"
            >
              <div className="h-full bg-gray-900 rounded-2xl p-8">
                <clause.icon className="h-12 w-12 text-purple-400 mb-6" />
                <h2 className="text-2xl font-bold text-white mb-4">
                  {clause.title}
                </h2>
                <p className="text-zinc-300">{clause.content}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Full Terms */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 text-zinc-300 space-y-6"
        >
          <h3 className="text-xl font-bold text-white">Key Provisions</h3>
          <div className="space-y-4">
            <p>• Collateral must be held in non-custodial wallets until loan maturity</p>
            <p>• Force majeure clauses for blockchain network disruptions</p>
            <p>• Dispute resolution through decentralized arbitration protocols</p>
          </div>

          <div className="border-t border-gray-800 pt-8 mt-8">
            <Link href="/legal/privacy" className="text-purple-400 hover:text-purple-300">
              Review Privacy Policy →
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}