"use client";

import { useState, useEffect } from "react";
import { CalculatorIcon, DocumentTextIcon, CurrencyDollarIcon } from "@heroicons/react/24/outline";
import { useActiveAccount, useWalletBalance } from "thirdweb/react";
import { client } from "@/app/client";
import { ethereum } from "thirdweb/chains"; // Add this import

export function LoanSection() {
    const account = useActiveAccount();
    const { data: balance } = useWalletBalance({
        client,                  // Add the client
        chain: ethereum,         // Specify the Ethereum chain
        address: account?.address // Existing address
    });
    const [collateralAmount, setCollateralAmount] = useState("");
    const [collateralError, setCollateralError] = useState("");
    const [loanTerm, setLoanTerm] = useState("6");
    const [repaymentSchedule, setRepaymentSchedule] = useState("monthly");
    const [loanPurpose, setLoanPurpose] = useState("");
    const [employmentStatus, setEmploymentStatus] = useState("");
    const [monthlyIncome, setMonthlyIncome] = useState("");
    const availableLoan = Number(collateralAmount) * 0.75 || 0;

    const handleSubmit = () => {
        if (!account) {
          setCollateralError("Please connect your wallet");
          return;
        }
    
        const collateralValue = parseFloat(collateralAmount);
        const userBalance = parseFloat(balance?.displayValue || "0");
    
        if (collateralValue > userBalance) {
          setCollateralError("Insufficient crypto balance");
        } else {
          setCollateralError("");
          // Proceed with loan application submission
          console.log("Submitting application...");
        }
      };

      useEffect(() => {
        if (account && balance) setCollateralError("");
      }, [account, balance]);
    
  
  return (
    <div className="w-full py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Crypto-Backed Loans
          </h2>
          <p className="text-xl text-zinc-300">
            Access liquidity without selling your crypto assets
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Loan Calculator */}
          <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-0.5 rounded-xl">
            <div className="h-full bg-gray-900 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-8">
                <CalculatorIcon className="h-8 w-8 text-purple-400" />
                <h3 className="text-2xl font-bold text-white">Loan Calculator</h3>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="text-zinc-300 block mb-2">Collateral Amount (ETH)</label>
                  <input
                    type="number"
                    className={`w-full bg-gray-800 rounded-lg px-4 py-3 text-white focus:ring-2 ${
                      collateralError ? "focus:ring-red-500 border border-red-500" : "focus:ring-purple-500"
                    }`}
                    value={collateralAmount}
                    onChange={(e) => {
                      setCollateralAmount(e.target.value);
                      setCollateralError("");
                    }}
                    placeholder="0.00"
                  />
                  {collateralError && (
                    <p className="text-red-400 text-sm mt-2 flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {collateralError}
                    </p>
                  )}
                </div>

                <div>
                  <label className="text-zinc-300 block mb-2">Loan Term</label>
                  <select
                    className="w-full bg-gray-800 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-purple-500"
                    value={loanTerm}
                    onChange={(e) => setLoanTerm(e.target.value)}
                  >
                    <option value="3">3 months</option>
                    <option value="6">6 months</option>
                    <option value="12">12 months</option>
                    <option value="36">36 months (3 years)</option>
                    <option value="48">48 months (4 years)</option>
                    <option value="60">60 months (5 years)</option>
                  </select>
                </div>

                <div>
                  <label className="text-zinc-300 block mb-2">Repayment Schedule</label>
                  <select
                    className="w-full bg-gray-800 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-purple-500"
                    value={repaymentSchedule}
                    onChange={(e) => setRepaymentSchedule(e.target.value)}
                  >
                    <option value="weekly">Weekly</option>
                    <option value="bi-weekly">Bi-weekly</option>
                    <option value="monthly">Monthly</option>
                  </select>
                </div>

                <div className="bg-gray-800/50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-white mb-4">Loan Summary</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-zinc-300 text-sm">Available Loan Amount</p>
                      <p className="text-white font-medium">${availableLoan.toFixed(2)}</p>
                    </div>
                    <div>
                      <p className="text-zinc-300 text-sm">APR</p>
                      <p className="text-white font-medium">12%</p>
                    </div>
                    <div>
                      <p className="text-zinc-300 text-sm">LTV Ratio</p>
                      <p className="text-white font-medium">75%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Loan Application */}
          <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-0.5 rounded-xl">
            <div className="h-full bg-gray-900 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-8">
                <DocumentTextIcon className="h-8 w-8 text-purple-400" />
                <h3 className="text-2xl font-bold text-white">Loan Application</h3>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="text-zinc-300 block mb-2">Loan Purpose</label>
                  <select
                    className="w-full bg-gray-800 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-purple-500"
                    value={loanPurpose}
                    onChange={(e) => setLoanPurpose(e.target.value)}
                  >
                    <option value="">Select Purpose</option>
                    <option value="trading">Trading</option>
                    <option value="investment">Investment</option>
                    <option value="business">Business</option>
                  </select>
                </div>

                <div>
                  <label className="text-zinc-300 block mb-2">Employment Status</label>
                  <select
                    className="w-full bg-gray-800 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-purple-500"
                    value={employmentStatus}
                    onChange={(e) => setEmploymentStatus(e.target.value)}
                  >
                    <option value="">Select Status</option>
                    <option value="employed">Employed</option>
                    <option value="self-employed">Self-Employed</option>
                    <option value="unemployed">Unemployed</option>
                  </select>
                </div>

                <div>
                  <label className="text-zinc-300 block mb-2">Monthly Income (USD)</label>
                  <input
                    type="number"
                    className="w-full bg-gray-800 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-purple-500"
                    value={monthlyIncome}
                    onChange={(e) => setMonthlyIncome(e.target.value)}
                    placeholder="0.00"
                  />
                </div>

                <button 
                onClick={handleSubmit}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <CurrencyDollarIcon className="h-5 w-5" />
                Submit Application
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}