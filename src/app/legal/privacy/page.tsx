"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ShieldCheckIcon,
  LockClosedIcon,
  DocumentTextIcon,
  GlobeAltIcon,
  UserGroupIcon
} from "@heroicons/react/24/outline";

export default function PrivacyPolicy() {
  const sections = [
    {
      icon: ShieldCheckIcon,
      title: "Data Security",
      content: "We employ bank-grade security measures including 256-bit encryption, multi-signature wallets, and regular third-party audits to protect your information."
    },
    {
      icon: LockClosedIcon,
      title: "Information Collection",
      content: "We collect minimal necessary data: wallet addresses, transaction history, and KYC information required for regulatory compliance."
    },
    {
      icon: GlobeAltIcon,
      title: "Global Standards",
      content: "Our practices comply with GDPR, CCPA, and FATF travel rule requirements for cryptocurrency transactions."
    },
    {
      icon: UserGroupIcon,
      title: "Third Parties",
      content: "We never sell your data. Limited sharing only occurs with regulated custodians and verification partners."
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
          <DocumentTextIcon className="h-16 w-16 text-purple-400 mx-auto mb-6" />
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Privacy First
            </span>
          </h1>
          <p className="text-xl text-zinc-300">
            Protecting your digital sovereignty while enabling financial freedom
          </p>
        </motion.div>

        {/* Content Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-1 rounded-2xl"
            >
              <div className="h-full bg-gray-900 rounded-2xl p-8">
                <section.icon className="h-12 w-12 text-purple-400 mb-6" />
                <h2 className="text-2xl font-bold text-white mb-4">
                  {section.title}
                </h2>
                <p className="text-zinc-300">{section.content}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Legal Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 text-zinc-300 space-y-6"
        >
          <p>Last Updated: {new Date().toLocaleDateString()}</p>
          
          <h3 className="text-xl font-bold text-white">Key Commitments</h3>
          <ul className="list-disc pl-6 space-y-4">
            <li>Zero off-chain data storage for crypto transactions</li>
            <li>Bi-annual penetration testing by independent auditors</li>
            <li>Right-to-be-forgotten guarantees for non-essential data</li>
          </ul>

          <div className="border-t border-gray-800 pt-8 mt-8">
            <Link href="/legal/terms" className="text-purple-400 hover:text-purple-300">
              View Terms of Service →
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}