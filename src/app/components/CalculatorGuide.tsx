"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { 
  QuestionMarkCircleIcon,
  ChartBarIcon,
  HandRaisedIcon,
  CpuChipIcon,
  XMarkIcon,
  ArrowPathIcon
} from "@heroicons/react/24/outline";

export function CalculatorGuide() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: "Select Collateral",
      content: "Choose which crypto asset you want to use as collateral from the top buttons.",
      icon: ChartBarIcon
    },
    {
      title: "Adjust Amount",
      content: "Use the slider to set how much collateral you want to lock.",
      icon: ArrowPathIcon
    },
    {
      title: "View Loan Terms",
      content: "See instant loan offer with recommended APR and duration.",
      icon: HandRaisedIcon
    }
  ];

  return (
    <>
      <button 
        onClick={() => {
          setIsOpen(true);
          setCurrentStep(0);
        }}
        className="border border-purple-500 text-purple-400 hover:bg-purple-500/10 font-semibold py-4 px-8 rounded-lg transition-all"
      >
        How It Works
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-lg z-50 flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-1 rounded-2xl max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-gray-900 rounded-2xl p-6">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <QuestionMarkCircleIcon className="h-6 w-6 text-purple-400" />
                    Calculator Guide
                  </h3>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-zinc-400 hover:text-white"
                  >
                    <XMarkIcon className="h-6 w-6" />
                  </button>
                </div>

                {/* Content */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    {steps.map((_, index) => (
                      <div
                        key={index}
                        className={`h-1 flex-1 rounded-full ${
                          currentStep >= index 
                            ? "bg-purple-400" 
                            : "bg-gray-700"
                        }`}
                      />
                    ))}
                  </div>

                  <div className="text-center">
  {(() => {
    const CurrentIcon = steps[currentStep].icon;
    return <CurrentIcon className="h-12 w-12 text-purple-400 mx-auto mb-4" />;
  })()}
  <h4 className="text-lg font-bold text-white mb-2">
    {steps[currentStep].title}
  </h4>
  <p className="text-zinc-300">
    {steps[currentStep].content}
  </p>
</div>

                  <div className="flex justify-between gap-4">
                    <button
                      onClick={() => currentStep > 0 && setCurrentStep(p => p - 1)}
                      className={`flex-1 py-2 rounded-lg ${
                        currentStep > 0 
                          ? "bg-gray-800 hover:bg-gray-700 text-white" 
                          : "bg-gray-900 text-zinc-500 cursor-not-allowed"
                      }`}
                    >
                      Back
                    </button>
                    
                    <button
                      onClick={() => {
                        if(currentStep < steps.length - 1) {
                          setCurrentStep(p => p + 1);
                        } else {
                          setIsOpen(false);
                        }
                      }}
                      className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg"
                    >
                      {currentStep < steps.length - 1 ? "Next" : "Got It!"}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}