import Link from "next/link";
import thirdwebIcon from "@public/thirdweb.svg";
import { GlobeAltIcon, ChatBubbleLeftIcon, UserGroupIcon, CodeBracketIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 py-16">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Link href="/" className="flex items-center gap-3">
            <Image
              src={thirdwebIcon}
              alt="CryptoLend Logo"
              width={50}
              height={50}
              className="hover:scale-105 transition-transform"
            />
            <span className="text-2xl font-bold text-white hidden md:block">
              CryptoLend
            </span>
          </Link>
            </div>
            <p className="text-zinc-300 text-sm leading-relaxed">
              Revolutionizing crypto-backed lending with secure, transparent, and efficient solutions.
            </p>
            <div className="flex items-center gap-4">
              {[
                { 
                  name: 'Facebook', 
                  icon: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z',
                  href: 'https://facebook.com/cryptolend' 
                },
                { 
                  name: 'X', 
                  icon: 'M18.901 1.566h-3.73L13.89.049 7.41 6.42l-5.15-4.9H0l6.84 6.505L0 16.434h3.73l1.28-1.516 6.48-6.375 5.15 4.9h3.341L12.06 9.95l6.84-6.505zm-3.28 12.963h-1.15L4.571 3.362h1.15l11.05 11.167z',
                  href: 'https://x.com/cryptolend' 
                },
                { 
                  name: 'TikTok', 
                  icon: 'M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z',
                  href: 'https://tiktok.com/@cryptolend' 
                },
                { 
                  name: 'Instagram', 
                  icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z',
                  href: 'https://instagram.com/cryptolend' 
                },
                { 
                  name: 'YouTube', 
                  icon: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .498 6.186C0 8.07 0 12 0 12s0 3.93.498 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.377.505 9.377.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
                  href: 'https://youtube.com/c/CryptoLend' 
                },
                { 
                  name: 'LinkedIn', 
                  icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
                  href: 'https://linkedin.com/company/cryptolend' 
                }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gray-800 hover:bg-purple-500/10 transition-colors group"
                >
                  <svg
                    className="h-5 w-5 text-zinc-300 group-hover:text-purple-400 transition-colors"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {[
            {
              title: "Products",
              links: [
                { text: "Crypto Loans", path: "/lending" },
                { text: "Borrowing", path: "/borrowing" },
                { text: "Loan Calculator", path: "/staking" },
                { text: "Staking", path: "/staking" }
              ]
            },
            {
              title: "Company",
              links: [
                { text: "About", path: "/about" },
                { text: "Press", path: "/press" },
                { text: "Blog", path: "/blog" }
              ]
            },
            {
              title: "Support",
              links: [
                { text: "Help Center", path: "/contact" },
                { text: "Contact Us", path: "/contact" },
                { text: "Privacy Policy", path: "/legal/privacy" },
                { text: "Terms of Service", path: "/legal/terms" }
              ]
            }
          ].map((section, idx) => (
            <div key={idx} className="space-y-4">
              <h3 className="text-sm font-semibold text-purple-400 uppercase tracking-wider">
                {section.title}
              </h3>
              <div className="space-y-2">
                {section.links.map((link, linkIdx) => (
                  <Link
                    key={linkIdx}
                    href={link.path}
                    className="text-zinc-300 hover:text-purple-400 text-sm transition-colors flex items-center gap-2 group"
                  >
                    <div className="h-[2px] w-4 bg-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.text}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="border-t border-zinc-800 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-zinc-400 text-sm text-center">
              © 2025 CryptoLend. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}