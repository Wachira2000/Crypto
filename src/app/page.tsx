"use client";

import Image from "next/image";
import thirdwebIcon from "@public/thirdweb.svg";
import Link from "next/link";
import { AboutSection } from "./components/AboutSection";
import { LoanSection } from "./components/LoanSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { FAQSection } from "./components/FAQSection";
import { Footer } from "./components/Footer";



export default function Home() {
  return (
    <main className="min-h-[100vh] bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Hero Section */}
      <div className="w-full relative pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Header />
        </div>
        
        {/* Background Grid */}
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
        </div>
      </div>

      {/* Features Section */}
      <div className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <PlatformFeatures />

          {/* Partners Section */}
      <PartnersSection />
      <AboutSection/>
      <LoanSection/>
      <FeaturesSection/>
      <FAQSection/>
      <Footer/>
      </div>
    </main>
  );
}

function Header() {
  return (
    <header className="relative z-10 text-center">
      <div className="mb-12 animate-fade-in">
        <Image
          src={thirdwebIcon}
          alt="CryptoLend Logo"
          width={120}
          height={120}
          className="mx-auto mb-8 hover:scale-105 transition-transform"
          style={{
            filter: "drop-shadow(0px 0px 24px #4f46e5a8)",
          }}
        />
      </div>

      <div className="text-center">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Decentralized
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mx-4">
            Crypto Lending
          </span>
          <br />
          Across Chains
        </h1>
        
        <p className="text-xl text-zinc-300 mt-8 max-w-4xl mx-auto mb-16">
          Earn competitive yields on your digital assets or access liquidity 
          through secure, cross-chain collateralized loans
        </p>

        {/* Buttons with proper spacing */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8">
          <Link
            href="/get-started"
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors text-lg shadow-lg hover:shadow-purple-500/20"
          >
            Get Started
          </Link>
          <Link
            href="/learn-more"
            className="border-2 border-purple-600 text-purple-400 hover:bg-purple-600/10 font-semibold py-4 px-8 rounded-lg transition-colors text-lg"
          >
            Learn More
          </Link>
        </div>
      </div>
    </header>
  );
}

function PlatformFeatures() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
      {[
        {
          title: "Multi-Chain Support",
          description: "Ethereum, Polygon, Solana & more",
          color: "from-purple-500 to-blue-500",
        },
        {
          title: "High Yield Rates",
          description: "Up to 12% APY on stablecoins",
          color: "from-green-500 to-teal-500",
        },
        {
          title: "Instant Liquidity",
          description: "Borrow against crypto in minutes",
          color: "from-orange-500 to-red-500",
        },
        {
          title: "Secure Vaults",
          description: "Insurance-backed cold storage",
          color: "from-pink-500 to-purple-500",
        },
      ].map((feature, index) => (
        <div
          key={index}
          className={`bg-gradient-to-br ${feature.color} p-0.5 rounded-xl`}
        >
          <div className="h-full bg-gray-900 rounded-xl p-6 hover:bg-gray-800/50 transition-all">
            <h3 className="text-2xl font-bold text-white mb-3">
              {feature.title}
            </h3>
            <p className="text-zinc-300">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function PartnersSection() {
  return (
    <div className="w-full py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl font-bold text-center text-zinc-300 mb-12">
          Trusted by Leading Institutions
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 items-center justify-center">
          {[
            { name: "Coinbase", logo: "/logos/coinbase.svg" },
            { name: "Thirdweb", logo: "/logos/thirdweb.svg" },
            { name: "Metamask", logo: "/logos/metamask.png" },
            { name: "Chase", logo: "/logos/chase.svg" },
            { name: "Bank of America", logo: "/logos/boa.svg" },
            { name: "Bitfinex", logo: "/logos/bitfinex.svg" },
            { name: "JPMorgan", logo: "/logos/jpmorgan.svg" },
            { name: "Blackrock", logo: "/logos/blackrock.svg" },
          ].map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 bg-white rounded-xl hover:bg-gray-100 transition-colors"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={120}
                height={40}
                className="h-8 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}