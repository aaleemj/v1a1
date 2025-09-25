import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/hero.png"
          alt="Abstract violet waves"
          fill
          priority
          className="object-cover object-center opacity-80"
        />
        <div className="relative z-10 text-center max-w-3xl px-4">
          <motion.h1
            className="text-4xl md:text-5xl font-display font-semibold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Bespoke Non‑Dilutive Capital
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-200 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            We provide strategic debt solutions for high‑growth companies seeking $5–100m to fuel expansion without dilution.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-md shadow hover:bg-primary/80 transition"
            >
              Book a call
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Credibility Section */}
      <section className="py-16 bg-dark">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display text-white mb-8">Why work with v1a1?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-700 rounded-lg hover:border-primary transition">
              <h3 className="text-xl font-semibold text-primary mb-2">Speed to Close</h3>
              <p className="text-sm text-gray-400">Our streamlined process aims to secure capital within 30–60 days from first meeting to close.</p>
            </div>
            <div className="p-6 border border-gray-700 rounded-lg hover:border-primary transition">
              <h3 className="text-xl font-semibold text-primary mb-2">Flexible Structures</h3>
              <p className="text-sm text-gray-400">From venture debt to revenue‑based financing, we tailor instruments to your specific needs.</p>
            </div>
            <div className="p-6 border border-gray-700 rounded-lg hover:border-primary transition">
              <h3 className="text-xl font-semibold text-primary mb-2">Trusted Advisors</h3>
              <p className="text-sm text-gray-400">Beyond capital, we provide strategic insight and market intelligence to accelerate growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-16 bg-dark/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display text-white text-center mb-12">How We Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-center">
            <div className="flex flex-col items-center">
              <span className="text-primary text-3xl font-bold mb-2">1</span>
              <h4 className="text-lg font-semibold text-white mb-1">Intake</h4>
              <p className="text-sm text-gray-400">We analyse your company’s metrics and funding objectives.</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-primary text-3xl font-bold mb-2">2</span>
              <h4 className="text-lg font-semibold text-white mb-1">Diligence</h4>
              <p className="text-sm text-gray-400">Our team conducts in‑depth due diligence to structure optimal terms.</p>
            </div>
            <div className="flex flex-col items-center">
              <span class="text-primary text-3xl font-bold mb-2">3</span>
              <h4 className="text-lg font-semibold text-white mb-1">Market Test</h4>
              <p className="text-sm text-gray-400">We benchmark your deal across global lenders and investors.</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-primary text-3xl font-bold mb-2">4</span>
              <h4 className="text-lg font-semibold text-white mb-1">Term Sheet</h4>
              <p className="text-sm text-gray-400">Receive a curated selection of indicative terms aligned with your goals.</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-primary text-3xl font-bold mb-2">5</span>
              <h4 className="text-lg font-semibold text-white mb-1">Close</h4>
              <p className="text-sm text-gray-400">We guide you through final negotiations and closing documentation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Mandates Placeholder */}
      <section className="py-16 bg-dark">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display text-white text-center mb-12">Selected Mandates</h2>
          <p className="text-center text-gray-400 mb-8">
            We will showcase anonymised case studies highlighting the problem, solution and outcome of past engagements.
          </p>
          <div className="flex justify-center">
            <Link
              href="/case-studies"
              className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-md shadow hover:bg-primary/80 transition"
            >
              View case studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
