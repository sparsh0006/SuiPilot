// Path: app/page.tsx
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  LucideIcon,
  Wallet,
  ArrowUp,
  Droplet,
  ChartBar,
  ChartLine,
  Network,
  Building,
  Zap,
  MessageSquare,
  Github,
  Twitter,
  Menu,
  Users, // Icon for Socials
  X as CloseIcon
} from 'lucide-react';

// --- START: FeatureCard Component Definition ---
interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description, index }) => {
  return (
    <motion.div
      className="group relative p-6 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-blue-500/20 backdrop-blur-sm hover:border-blue-400/40 transition-all duration-300 h-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: "circOut" }}
      whileHover={{ scale: 1.03, y: -5, transition: {duration: 0.2} }}
      viewport={{ once: true }}
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative z-10 flex flex-col h-full">
        <div className="mb-4 inline-flex p-3 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-600/20 group-hover:from-blue-400/30 group-hover:to-blue-500/30 transition-all duration-300 self-start">
          <Icon className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors" />
        </div>
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors flex-grow">
          {description}
        </p>
      </div>
      <div className="absolute inset-0 rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
    </motion.div>
  );
};
// --- END: FeatureCard Component Definition ---

// --- START: Navigation Component Definition ---
const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: (i:number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1 + 0.3,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  const navLinks = [
    { href: "#features", label: "Features", customIndex: 1 },
    { href: "#integrations", label: "Integrations", customIndex: 2 },
    { href: "#socials", label: "Socials", customIndex: 3 }
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 py-3 px-4 sm:px-6 md:px-8 bg-slate-900/80 backdrop-blur-md shadow-lg"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "circOut" }}
    >
      <div className="max-w-screen-xl mx-auto flex items-center justify-between h-12">
        {/* Logo */}
        <motion.div custom={0} variants={navItemVariants} initial="hidden" animate="visible">
          <Link href="/" className="text-2xl font-bold text-white hover:text-blue-400 transition-colors flex-shrink-0"> {/* Added flex-shrink-0 */}
            SuiPilot
          </Link>
        </motion.div>

        {/* Desktop Navigation Links - Centered */}
        <div className="hidden md:flex flex-grow justify-center items-center"> {/* ADDED flex-grow and justify-center */}
          <div className="flex items-center space-x-1"> {/* Container for actual links */}
            {navLinks.map(link => (
              <motion.div key={link.label} custom={link.customIndex} variants={navItemVariants} initial="hidden" animate="visible">
                <a href={link.href} className="text-gray-300 hover:text-blue-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">
                  {link.label}
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Desktop Launch Chat Button */}
        <div className="hidden md:flex items-center flex-shrink-0"> {/* Added flex-shrink-0, removed ml-auto */}
          <motion.div custom={navLinks.length + 1} variants={navItemVariants} initial="hidden" animate="visible">
            <Link href="/chat">
              <motion.button
                className="px-5 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg text-white font-semibold text-sm flex items-center gap-2 hover:shadow-blue-400/40 hover:shadow-lg"
                whileHover={{ scale: 1.05, y: -1, transition: {duration: 0.2} }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageSquare size={18} />
                Launch Chat
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-300 hover:text-white focus:outline-none p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <CloseIcon size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden absolute top-full left-0 right-0 bg-slate-800/95 backdrop-blur-sm shadow-xl pb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "circOut" }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-slate-700"
              >
                {link.label}
              </a>
            ))}
            <Link href="/chat" onClick={() => setIsMobileMenuOpen(false)} className="block mt-2">
              <motion.button
                className="w-full px-5 py-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg text-white font-semibold text-sm flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <MessageSquare size={18} />
                Launch Chat
              </motion.button>
            </Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};
// --- END: Navigation Component Definition ---

// --- START: HeroSection Component Definition ---
const HeroSection = () => {
  const router = useRouter();

  return (
    <section id="hero" className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 relative overflow-hidden flex flex-col justify-center pt-[calc(3rem+48px)] md:pt-[calc(3.5rem+48px)]">
      <div className="absolute inset-0 opacity-30 -z-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      <div className="relative z-10 max-w-screen-xl w-full mx-auto px-4 sm:px-6 md:px-8 py-10 md:py-16 flex-grow flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16 items-center w-full">
          <motion.div
            className="space-y-8 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "circOut", delay: 0.3 }}
          >
            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "circOut", delay: 0.5 }}
            >
              AI-Powered
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Sui Blockchain
              </span>
              <br />
              Toolkit
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-lg mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "circOut", delay: 0.7 }}
            >
              Interact with DeFi protocols through natural language. Experience the power of Sui blockchain with our AI-driven interface that flows like water.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "circOut", delay: 0.9 }}
            >
              <motion.button
                onClick={() => router.push('/chat')}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg text-white font-semibold text-lg relative overflow-hidden group hover:shadow-blue-500/50 hover:shadow-lg"
                whileHover={{ scale: 1.05, y:-2, transition: {duration: 0.2} }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Launch SuiPilot</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>
              <Link href="#features" passHref legacyBehavior>
                <motion.a
                  className="px-8 py-4 border border-blue-400/50 rounded-lg text-blue-400 font-semibold text-lg hover:bg-blue-400/10 transition-colors flex items-center justify-center"
                  whileHover={{ scale: 1.05, y:-2, transition: {duration: 0.2} }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Features
                </motion.a>
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            className="h-80 sm:h-96 lg:h-[500px] w-full flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "circOut", delay: 0.4 }}
          >
            <Zap size={200} className="text-blue-500 opacity-70 animate-[pulse_3s_cubic-bezier(0.4,0,0.6,1)_infinite]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
// --- END: HeroSection Component Definition ---

// --- START: FeaturesSection Component Definition ---
const FeaturesSection = () => {
  const featuresData = [
    { icon: Wallet, title: "Core Wallet & Token Operations", description: "Manage tokens and execute transactions seamlessly across the Sui ecosystem" },
    { icon: ArrowUp, title: "DeFi Swaps (Cetus & Navi)", description: "Trade tokens across multiple DEX protocols with optimal routing" },
    { icon: Building, title: "Suilend Lending & Borrowing", description: "Lend and borrow assets with competitive rates and secure protocols" },
    { icon: Droplet, title: "SpringSui Liquid Staking", description: "Stake SUI tokens while maintaining liquidity for DeFi activities" },
    { icon: ChartBar, title: "DexScreener Market Data", description: "Real-time market data and analytics for informed trading decisions" },
    { icon: ChartLine, title: "Pyth Network Price Feeds", description: "Accurate and reliable price feeds from Pyth oracle network" },
    { icon: Network, title: "LangChain & Vercel AI SDK Integration", description: "Natural language processing for intuitive blockchain interactions" },
    { icon: Network, title: "Multi-Agent System Support", description: "Advanced AI agent coordination with LangGraph for complex workflows" },
    { icon: Wallet, title: "Flexible Wallet Support", description: "Connect your wallet or use private keys for maximum flexibility" }
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 -z-10">
        <div className="absolute top-40 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
      </div>
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "circOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Core <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent ml-2">Features</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Experience the full power of Sui blockchain through our comprehensive AI-driven toolkit
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
// --- END: FeaturesSection Component Definition ---

// --- START: IntegrationsSection Component Definition ---
const IntegrationsSection = () => {
  const integrationsData = [
    { name: "Navi Protocol", description: "Leading DeFi lending platform on Sui", color: "from-purple-500 to-purple-600" },
    { name: "Suilend Protocol", description: "Secure lending and borrowing infrastructure", color: "from-green-500 to-green-600" },
    { name: "SpringSui", description: "Native liquid staking solution for SUI", color: "from-blue-500 to-blue-600" },
    { name: "DexScreener", description: "Real-time market data aggregator", color: "from-orange-500 to-orange-600" },
    { name: "Pyth Network", description: "High-fidelity price oracle network", color: "from-red-500 to-red-600" },
    { name: "Cetus Protocol", description: "Concentrated liquidity DEX protocol", color: "from-cyan-500 to-cyan-600" }
  ];

  return (
    <section id="integrations" className="py-16 md:py-24 bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 -z-10">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-blue-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "circOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Built on <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent ml-2">Trusted Protocols</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Seamlessly integrated with the most innovative protocols in the Sui ecosystem
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {integrationsData.map((integration, index) => (
            <motion.div
              key={index}
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-blue-500/20 backdrop-blur-sm hover:border-blue-400/40 transition-all duration-300 h-full"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: "circOut" }}
              whileHover={{ scale: 1.03, y: -8, transition: {duration: 0.2} }}
              viewport={{ once: true }}
            >
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${integration.color} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
              <div className="relative z-10 flex flex-col h-full">
                <div className={`mb-6 w-16 h-16 rounded-xl bg-gradient-to-br ${integration.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 self-start`}>
                  <Droplet className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {integration.name}
                </h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors flex-grow">
                  {integration.description}
                </p>
              </div>
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-r ${integration.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
// --- END: IntegrationsSection Component Definition ---

// --- START: Footer / Socials Section Definition ---
const Footer = () => {
  const socialLinks = [
    {
      href: "https://x.com/sparshtwt",
      label: "SuiPilot on X (Twitter)",
      icon: Twitter,
      hoverColor: "hover:text-blue-400",
      bgHoverColor: "hover:bg-blue-500/10"
    },
    {
      href: "https://github.com/sparsh0006/",
      label: "SuiPilot on GitHub",
      icon: Github,
      hoverColor: "hover:text-slate-200",
      bgHoverColor: "hover:bg-slate-700/20"
    }
  ];

  return (
    <footer id="socials" className="py-10 md:py-16 bg-slate-900/70 border-t border-slate-700/50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 text-center">
        <motion.h3
            className="text-2xl font-semibold text-white mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
        >
            Connect With Us
        </motion.h3>
        <div className="flex justify-center items-center space-x-4 md:space-x-6 mb-8">
          {socialLinks.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full text-gray-400 ${social.hoverColor} ${social.bgHoverColor} transition-all duration-300 ease-in-out transform`}
              whileHover={{ y: -3, scale: 1.1, boxShadow: "0 4px 15px rgba(0,0,0,0.2)" }}
              aria-label={social.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 + (socialLinks.indexOf(social) * 0.1) }}
              viewport={{ once: true }}
            >
              <social.icon size={28} />
            </motion.a>
          ))}
        </div>
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} SuiPilot. All rights reserved.
        </p>
        <p className="text-xs text-gray-600 mt-2">
          Powered by Pelagos SuiAgentKit & LangChain.js
        </p>
      </div>
    </footer>
  );
};
// --- END: Footer / Socials Section Definition ---

// --- START: Main LandingPage Export ---
export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <IntegrationsSection />
      </main>
      <Footer />
    </div>
  );
}
// --- END: Main LandingPage Export ---