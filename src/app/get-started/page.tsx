"use client";
import { ethereum } from "thirdweb/chains";
import { ConnectButton, useActiveAccount, useWalletBalance } from "thirdweb/react";
import { client } from "@/app/client";
import { ArrowPathIcon, WalletIcon, CurrencyDollarIcon, DocumentCheckIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function GetStartedPage() {
  const router = useRouter();
  const account = useActiveAccount();
  const { data: balance, isLoading: balanceLoading } = useWalletBalance({
    client,
    chain: ethereum,
    address: account?.address
  });
  const [step, setStep] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);
  const [loanDetails, setLoanDetails] = useState({
    amount: 5000,
    collateral: 2.5,
    duration: '6 Months',
    apr: 12.5
  });

  const handleConfirmLoan = () => {
    // Show success message
    setShowSuccess(true);
    
    // Save loan application to localStorage
    const application = {
      id: Date.now(),
      status: "pending",
      ...loanDetails,
      timestamp: new Date().toISOString()
    };
    
    localStorage.setItem("loanApplication", JSON.stringify(application));
    
    // Redirect to dashboard after 2 seconds
    setTimeout(() => {
      router.push("/dashboard");
    }, 2000);
  };

  // ... rest of your existing code

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 pt-24 pb-2">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ... existing progress steps and other steps */}

        {/* Step 4: Confirmation */}
        {step === 4 && (
          <div className="text-center">
            <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-0.5 rounded-xl mx-auto max-w-md">
              <div className="bg-gray-900 rounded-xl p-8">
                <h1 className="text-4xl font-bold text-white mb-4">Confirm Loan</h1>
                {/* ... existing confirmation details */}
                
                <button 
                  onClick={handleConfirmLoan}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
                >
                  Confirm Loan Agreement
                </button>

                <AnimatePresence>
                  {showSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="text-green-400 mt-4"
                    >
                      Application submitted successfully! Redirecting...
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

