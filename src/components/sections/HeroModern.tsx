"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Container } from "@/components/ui";
import Image from "next/image";
const highlights = [
  { icon: "certificate", text: "Chartered Accountant" },
  { icon: "users", text: "1M+ Followers" },
  { icon: "building", text: "Finance Head, Karza Mukti Abhiyan" },
  { icon: "trust", text: "Finance Head, Dharmik Ekta Trust" },
];

export function HeroModern() {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary-50 to-transparent" />

      <Container>
        <div className="relative py-16 sm:py-20 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            {/* Eyebrow */}
            <p className="text-accent-600 font-semibold text-sm tracking-wide uppercase mb-4">
              Finance Education & Social Impact
            </p>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-primary-900 leading-tight">
              CA Surbhi Srivastava
              <span className="block text-primary-600">Bhartiya</span>
            </h1>

            {/* Subtext */}
            <p className="mt-6 text-lg sm:text-xl text-primary-600 max-w-2xl leading-relaxed">
              Empowering millions with financial literacy. Trusted voice in RBI
              guidelines, debt management, and financial rights.
            </p>

            {/* Highlight Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              {highlights.map((item, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium"
                >
                  <HighlightIcon type={item.icon} />
                  {item.text}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent-600 text-white font-medium rounded-lg hover:bg-accent-700 transition-colors duration-200"
              >
                Learn More
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
              <Link
                href="/community"
                className="inline-flex items-center gap-2 px-6 py-3 border border-primary-300 text-primary-700 font-medium rounded-lg hover:bg-primary-50 transition-colors duration-200"
              >
                Join Community
              </Link>
            </motion.div>
          </motion.div>

          {/* Decorative element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative w-96 h-96 rounded-full bg-accent-100 flex items-center justify-center">
              <div className="w-[22rem] h-[22rem] rounded-full overflow-hidden shadow-xl relative">
                <Image
                  src="/images/IMG_6486.jpg"
                  alt="CA Surbhi Srivastava Bhartiya"
                  fill
                  className="object-cover object-[70%_1%]"
                  sizes="(min-width: 1024px) 352px, 0px"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Bottom border accent */}
      <div className="h-1 bg-gradient-to-r from-accent-600 via-accent-500 to-accent-400" />
    </section>
  );
}

function HighlightIcon({ type }: { type: string }) {
  const iconClass = "w-4 h-4";

  switch (type) {
    case "certificate":
      return (
        <svg
          className={iconClass}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          />
        </svg>
      );
    case "users":
      return (
        <svg
          className={iconClass}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      );
    case "building":
      return (
        <svg
          className={iconClass}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      );
    case "trust":
      return (
        <svg
          className={iconClass}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      );
    default:
      return null;
  }
}
