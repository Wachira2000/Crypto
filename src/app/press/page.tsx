"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  NewspaperIcon,
  MicrophoneIcon,
  VideoCameraIcon,
  CalendarIcon,
  DocumentArrowDownIcon,
  ArrowRightIcon
} from "@heroicons/react/24/outline";

export default function PressPage() {
  const pressReleases = [
    {
      date: "2024-03-15",
      title: "CryptoLend Reaches $5B in Processed Loans",
      excerpt: "Milestone achieved through institutional adoption and new product offerings...",
      category: "Company News"
    },
    {
      date: "2024-02-28",
      title: "Partnership with Chainlink for Enhanced Oracle Services",
      excerpt: "New integration brings real-time pricing data to lending platform...",
      category: "Partnerships"
    },
    // Add 4 more releases
  ];

  const mediaFeatures = [
    {
      outlet: "CoinDesk",
      title: "The Rise of Institutional Crypto Lending",
      logo: "/media/coindesk-logo.svg"
    },
    {
      outlet: "Bloomberg Crypto",
      title: "CryptoLend's Risk Management Innovation",
      logo: "/media/bloomberg-logo.svg"
    },
    // Add more media features
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full"
            style={{
              width: Math.random() * 40 + 10 + 'px',
              height: Math.random() * 40 + 10 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
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
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl sm:text-7xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              CryptoLend in the News
            </span>
          </h1>
          <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
            Official media resources, press releases, and company milestones
          </p>
        </motion.div>

        {/* Press Resources */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {/* Press Kit Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-1 rounded-2xl"
          >
            <div className="h-full bg-gray-900 rounded-2xl p-8 flex flex-col">
              <div className="mb-6 p-4 bg-purple-500/10 rounded-xl w-fit">
                <DocumentArrowDownIcon className="h-12 w-12 text-purple-400" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Press Kit</h2>
              <p className="text-zinc-300 mb-6">Download official assets and brand guidelines</p>
              <div className="space-y-4 mt-auto">
                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg flex items-center justify-center gap-2">
                  <DocumentArrowDownIcon className="h-5 w-5" />
                  Download Press Kit
                </button>
                <button className="w-full border border-purple-500 text-purple-400 hover:bg-purple-500/10 py-3 rounded-lg flex items-center justify-center gap-2">
                  <VideoCameraIcon className="h-5 w-5" />
                  Media Library
                </button>
              </div>
            </div>
          </motion.div>

          {/* Media Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-1 rounded-2xl"
          >
            <div className="h-full bg-gray-900 rounded-2xl p-8">
              <div className="mb-6 p-4 bg-blue-500/10 rounded-xl w-fit">
                <MicrophoneIcon className="h-12 w-12 text-blue-400" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Media Contacts</h2>
              <div className="space-y-4 text-zinc-300">
                <p>Press Inquiries:<br/>
                  <span className="text-purple-400">press@cryptolend.com</span>
                </p>
                <p>EMEA Communications:<br/>
                  <span className="text-purple-400">+41 79 123 45 67</span>
                </p>
                <p>US Communications:<br/>
                  <span className="text-purple-400">+1 (555) 123-4567</span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Media Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-1 rounded-2xl"
          >
            <div className="h-full bg-gray-900 rounded-2xl p-8">
              <div className="mb-6 p-4 bg-green-500/10 rounded-xl w-fit">
                <NewspaperIcon className="h-12 w-12 text-green-400" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-6">Featured In</h2>
              <div className="space-y-6">
                {mediaFeatures.map((media, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 hover:bg-gray-800/50 rounded-xl transition-colors">
                    <div className="h-12 w-12 bg-purple-500/10 rounded-lg flex items-center justify-center">
                      {/* Add actual logo image */}
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">{media.outlet}</h3>
                      <p className="text-zinc-300 text-sm">{media.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Press Releases */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="space-y-12"
        >
          <h2 className="text-3xl font-bold text-white mb-8">Recent Press Releases</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pressReleases.map((release, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-1 rounded-2xl"
              >
                <div className="h-full bg-gray-900 rounded-2xl p-8 hover:bg-gray-800/50 transition-colors">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-purple-400 text-sm">{release.category}</span>
                    <span className="text-zinc-500 text-sm">
                      <CalendarIcon className="h-4 w-4 inline-block mr-2" />
                      {new Date(release.date).toLocaleDateString()}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{release.title}</h3>
                  <p className="text-zinc-300 mb-6">{release.excerpt}</p>
                  <div className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
                    <span>Read Full Release</span>
                    <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mt-20"
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            Stay Updated
          </h2>
          <p className="text-zinc-300 mb-8 max-w-xl mx-auto">
            Subscribe to our press mailing list for real-time updates
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-gray-800 rounded-xl px-6 py-4 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl transition-all">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}