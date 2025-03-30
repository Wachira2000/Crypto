
"use client";
import { ethereum } from "thirdweb/chains";
import { ConnectButton, useActiveAccount, useWalletBalance } from "thirdweb/react";
import { client } from "@/app/client";
import { ArrowPathIcon, WalletIcon, CurrencyDollarIcon, DocumentCheckIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function GetStartedPage() {
  const account = useActiveAccount();
  const { data: balance, isLoading: balanceLoading } = useWalletBalance({
    client,                  // Add the Thirdweb client
    chain: ethereum,         // Specify the Ethereum chain
    address: account?.address }); // Keep the wallet address
  const [step, setStep] = useState(1);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 pt-24 pb-2">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Progress Steps */}
        <div className="flex justify-center mb-16">
          {[1, 2, 3, 4].map((num) => (
            <div key={num} className="flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step >= num ? "bg-purple-500 text-white" : "bg-gray-800 text-zinc-400"
                }`}
              >
                {num}
              </div>
              {num !== 4 && (
                <div className={`w-16 h-1 ${step > num ? "bg-purple-500" : "bg-gray-800"}`} />
              )}
            </div>
          ))}
        </div>

        {/* Step 1: Connect Wallet */}
        {step === 1 && (
          <div className="text-center">
            <WalletIcon className="h-16 w-16 text-purple-400 mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-white mb-4">Connect Your Wallet</h1>
            <p className="text-zinc-300 mb-8 max-w-xl mx-auto">
              Securely connect your cryptocurrency wallet to get started with your loan application.
            </p>
            <ConnectButton
    client={client}
    appMetadata={{
      name: "CryptoLend",
      url: "https://crypto-lend.com",
    }}
    theme="dark"
    connectButton={{
      className: "bg-purple-600 hover:bg-purple-700 transition-colors px-8 py-4 text-base",
      style: {
        borderRadius: "12px",
        padding: "1rem 2rem"
      },
      label: "Connect Wallet"
    }}
  />
            {account && (
              <button
                onClick={() => setStep(2)}
                className="mt-8 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                Continue to Collateral Selection
              </button>
            )}
          </div>
        )}

        {/* Step 2: Select Collateral */}
        {step === 2 && (
          <div className="text-center">
            <CurrencyDollarIcon className="h-16 w-16 text-purple-400 mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-white mb-4">Select Collateral</h1>
            
            <div className="bg-gray-900 rounded-xl p-6 max-w-md mx-auto mb-8">
              <h3 className="text-lg font-semibold text-white mb-4">Your Balances</h3>
              {balanceLoading ? (
                <ArrowPathIcon className="h-8 w-8 text-purple-400 animate-spin mx-auto" />
              ) : (
                <div className="space-y-2">
                  <div className="flex justify-between text-zinc-300">
                    <span>ETH Balance:</span>
                    <span>{balance?.displayValue.slice(0, 6)} ETH</span>
                  </div>
                </div>
              )}
            </div>

            <div className="flex justify-center gap-4">
              <button
                onClick={() => setStep(1)}
                className="text-zinc-300 hover:text-purple-400"
              >
                Back
              </button>
              <button
                onClick={() => setStep(3)}
                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                Continue to Loan Terms
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Loan Terms */}
        {step === 3 && (
          <div className="text-center">
            <DocumentCheckIcon className="h-16 w-16 text-purple-400 mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-white mb-4">Set Loan Terms</h1>
            
            <div className="bg-gray-900 rounded-xl p-6 max-w-md mx-auto mb-8 space-y-6">
              <div>
                <label className="text-zinc-300 block mb-2">Loan Amount (USD)</label>
                <input
                  type="number"
                  className="w-full bg-gray-800 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-purple-500"
                  placeholder="0.00"
                />
              </div>
              
              <div>
                <label className="text-zinc-300 block mb-2">Loan Term</label>
                <select className="w-full bg-gray-800 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-purple-500">
                  <option>3 Months</option>
                  <option>6 Months</option>
                  <option>12 Months</option>
                </select>
              </div>
            </div>

            <div className="flex justify-center gap-4">
              <button
                onClick={() => setStep(2)}
                className="text-zinc-300 hover:text-purple-400"
              >
                Back
              </button>
              <button
                onClick={() => setStep(4)}
                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                Review & Confirm
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Confirmation */}
        {step === 4 && (
          <div className="text-center">
            <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-0.5 rounded-xl mx-auto max-w-md">
              <div className="bg-gray-900 rounded-xl p-8">
                <h1 className="text-4xl font-bold text-white mb-4">Confirm Loan</h1>
                <div className="space-y-4 text-left mb-8">
                  <div className="flex justify-between text-zinc-300">
                    <span>Loan Amount:</span>
                    <span>$5,000.00</span>
                  </div>
                  <div className="flex justify-between text-zinc-300">
                    <span>Collateral:</span>
                    <span>2.5 ETH</span>
                  </div>
                  <div className="flex justify-between text-zinc-300">
                    <span>Duration:</span>
                    <span>6 Months</span>
                  </div>
                  <div className="flex justify-between text-purple-400 font-semibold">
                    <span>APR:</span>
                    <span>12.5%</span>
                  </div>
                </div>
                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
                  Confirm Loan Agreement
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}