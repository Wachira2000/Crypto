
"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How does crypto-backed lending work?",
      answer: "You deposit cryptocurrency as collateral and receive a loan in stablecoins or fiat currency. The loan amount is a percentage of your collateral's value, and you maintain ownership of your crypto assets."
    },
    {
      question: "What cryptocurrencies can I use as collateral?",
      answer: "We accept ETH, BTC, USDC, and other major cryptocurrencies. The full list of supported assets is available in our loan calculator."
    },
    {
      question: "What happens if the value of my collateral drops?",
      answer: "We monitor collateral values in real-time. If your collateral ratio falls below the maintenance level, you'll have 48 hours to add more collateral or repay part of the loan."
    },
    {
      question: "How quickly can I get my loan approved?",
      answer: "Approval is instant once you connect your wallet and deposit collateral. Funds are typically available within minutes of loan agreement signing."
    },
    {
      question: "Are there any prepayment penalties?",
      answer: "No, you can repay your loan early at any time without additional fees. We actually encourage early repayments with rate discounts."
    }
  ];

  return (
    <div className="w-full py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-zinc-300">
            Everything you need to know about crypto-backed loans
          </p>
        </div>

        <div className="space-y-6 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-0.5 rounded-xl"
            >
              <div className="bg-gray-900 rounded-xl p-6">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex justify-between items-center gap-4"
                >
                  <h3 className="text-lg font-semibold text-white text-left">
                    {faq.question}
                  </h3>
                  <ChevronDownIcon 
                    className={`h-6 w-6 text-purple-400 transition-transform duration-200 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? "max-h-96 mt-4" : "max-h-0"
                  }`}
                >
                  <p className="text-zinc-300 border-t border-zinc-800 pt-4">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}