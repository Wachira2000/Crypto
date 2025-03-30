"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  CalendarIcon,
  ChartBarIcon,
  UserCircleIcon,
  TagIcon,
  ArrowRightIcon
} from "@heroicons/react/24/outline";

const blogs = [
  {
    id: 1,
    title: "The Future of Decentralized Finance",
    excerpt: "Exploring how DeFi is reshaping traditional financial systems through blockchain technology...",
    date: "Mar 15, 2024",
    tags: ["DeFi", "Blockchain"],
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "NFTs Beyond Digital Art",
    excerpt: "Discover innovative use cases for NFTs in supply chain, identity management, and more...",
    date: "Mar 12, 2024",
    tags: ["NFTs", "Innovation"],
    readTime: "4 min read"
  },
  // Add 4 more blog objects
];

export default function Blog() {
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
              Crypto Insights
            </span>
          </h1>
          <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
            Deep dives into blockchain technology, market trends, and the future of decentralized systems
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={`/blog/${blog.id}`}
                className="group block h-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-1 rounded-2xl hover:from-purple-500/30 hover:to-blue-500/30 transition-all"
              >
                <div className="h-full bg-gray-900 rounded-2xl p-6 flex flex-col">
                  {/* Image Placeholder */}
                  <div className="aspect-video bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl mb-6" />
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {blog.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm flex items-center gap-1"
                      >
                        <TagIcon className="h-4 w-4" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Content */}
                  <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {blog.title}
                  </h2>
                  <p className="text-zinc-300 mb-6 flex-1">{blog.excerpt}</p>

                  {/* Meta */}
                  <div className="flex justify-between items-center text-zinc-400 text-sm">
                    <div className="flex items-center gap-2">
                      <CalendarIcon className="h-5 w-5" />
                      {blog.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <UserCircleIcon className="h-5 w-5" />
                      {blog.readTime}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-6 flex items-center gap-2 text-purple-400 group-hover:text-purple-300 transition-colors">
                    <span>Read More</span>
                    <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mt-20"
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            Want More Insights?
          </h2>
          <p className="text-zinc-300 mb-8 max-w-xl mx-auto">
            Explore our archive of 150+ articles covering every aspect of blockchain and cryptocurrency
          </p>
          <Link
            href="/blog/archive"
            className="inline-block bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold py-4 px-12 rounded-lg transition-all transform hover:scale-105"
          >
            View All Articles
          </Link>
        </motion.div>
      </div>
    </div>
  );
}