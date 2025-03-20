
"use client";

import { BoltIcon, ScaleIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";

export function FeaturesSection() {
  return (
    <>
      {/* Why Choose CryptoLend Section */}
      <div className="w-full py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose CryptoLend?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Instant Approval",
                content: "Get your loan approved and disbursed within minutes after connecting your wallet",
                icon: BoltIcon
              },
              {
                title: "Competitive Rates",
                content: "Enjoy low interest rates starting from 12% APR with flexible repayment options",
                icon: ScaleIcon
              },
              {
                title: "Secure & Transparent",
                content: "Your assets are secured by smart contracts with full transparency on the blockchain",
                icon: ShieldCheckIcon
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-0.5 rounded-xl">
                <div className="h-full bg-gray-900 rounded-xl p-8 hover:bg-gray-800/50 transition-all">
                  <feature.icon className="h-12 w-12 text-purple-400 mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-zinc-300">{feature.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="w-full py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Trusted by Crypto Investors Worldwide
            </h2>
            <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
              Here's what our customers have to say about their experience with CryptoLend
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Chen",
                role: "Crypto Trader",
                text: "CryptoLend made it incredibly easy to access funds without selling my ETH during the market dip. The process was smooth and transparent.",
                img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
              },
              {
                name: "Mark Thompson",
                role: "Business Owner",
                text: "The flexible repayment options and competitive rates made CryptoLend the perfect solution for my business needs.",
                img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
              },
              {
                name: "Emily Rodriguez",
                role: "Long-term Investor",
                text: "I was impressed by how quickly I received my loan. The smart contract system gives me peace of mind about the security of my assets.",
                img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-0.5 rounded-xl">
                <div className="h-full bg-gray-900 rounded-xl p-8 hover:bg-gray-800/50 transition-all">
                  <img
                    className="h-20 w-20 rounded-full mx-auto border-2 border-purple-500 object-cover"
                    src={testimonial.img}
                    alt={testimonial.name}
                  />
                  <div className="mt-6 text-center">
                    <h3 className="text-xl font-semibold text-white">{testimonial.name}</h3>
                    <p className="text-zinc-400 text-sm mt-1">{testimonial.role}</p>
                    <p className="text-zinc-300 mt-4 italic">"{testimonial.text}"</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}