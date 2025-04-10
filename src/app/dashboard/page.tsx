import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

type LoanStatus = "pending" | "reviewing" | "approved";

const statusStyles: Record<LoanStatus, string> = {
  pending: "bg-yellow-500/20 text-yellow-400 border-yellow-500",
  reviewing: "bg-blue-500/20 text-blue-400 border-blue-500",
  approved: "bg-green-500/20 text-green-400 border-green-500"
};

export function DashboardPage() {
  const [loanStatus, setLoanStatus] = useState<LoanStatus>("pending");
  const router = useRouter();

  useEffect(() => {
    const savedApplication = localStorage.getItem("loanApplication");
    if (!savedApplication) {
      router.push("/");
      return;
    }

    const statuses: LoanStatus[] = ["pending", "reviewing", "approved"];
    let currentIndex = 0;

    const interval = setInterval(() => {
      currentIndex = Math.min(currentIndex + 1, statuses.length - 1);
      const newStatus = statuses[currentIndex];
      setLoanStatus(newStatus);

      // Update localStorage
      const application = JSON.parse(savedApplication);
      application.status = newStatus;
      localStorage.setItem("loanApplication", JSON.stringify(application));

      if (currentIndex === statuses.length - 1) {
        clearInterval(interval);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [router]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 pt-24 pb-2">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-white mb-8">Loan Status</h1>
          
          <motion.div
            className={`mx-auto w-64 p-6 rounded-xl border ${statusStyles[loanStatus]} transition-all`}
            animate={{ scale: [0.95, 1.05, 1] }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-2xl font-semibold mb-2">
              {loanStatus.toUpperCase()}
            </div>
            <div className="text-zinc-300 text-sm">
              {loanStatus === "pending" && "Your application is being processed"}
              {loanStatus === "reviewing" && "Under final review"}
              {loanStatus === "approved" && "Loan approved!"}
            </div>
          </motion.div>

          <motion.div
            className="mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <button
              onClick={() => router.push("/")}
              className="text-zinc-300 hover:text-purple-400"
            >
              Back to Application
            </button>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}