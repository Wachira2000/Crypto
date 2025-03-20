import { ShieldCheckIcon, BoltIcon, DocumentTextIcon } from "@heroicons/react/24/outline";

export function AboutSection() {
  return (
    <div className="w-full py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            About CryptoLend
          </h2>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
            We're revolutionizing the lending industry by bridging the gap between traditional finance and cryptocurrency assets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: ShieldCheckIcon,
              title: "Secure Platform",
              description: "Bank-grade security measures to protect your assets and personal information."
            },
            {
              icon: BoltIcon,
              title: "Instant Processing",
              description: "Get your loan approved and disbursed within minutes, not days."
            },
            {
              icon: DocumentTextIcon,
              title: "Smart Contracts",
              description: "Automated and transparent loan terms enforced by blockchain technology."
            }
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-0.5 rounded-xl"
            >
              <div className="h-full bg-gray-900 rounded-xl p-8 hover:bg-gray-800/50 transition-all">
                <feature.icon className="h-12 w-12 text-purple-400 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}