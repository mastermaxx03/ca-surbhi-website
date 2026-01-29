"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export function HeroModern() {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Hero Container */}
      <div className="relative w-full min-h-[90vh]">

        {/* Background Image — Full-width landscape, preserves subject on right */}
        <Image
          src="/images/hero-illustration.jpg"
          alt="Growth and education illustration"
          fill
          className="object-cover object-right"
          sizes="100vw"
          priority
        />

        {/* Subtle gradient overlay for text readability on left side */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/40 to-transparent" />

        {/* Content Container — Left-aligned */}
        <div className="absolute inset-0 flex flex-col justify-between py-16 sm:py-20 lg:py-24">

          {/* Quote Overlay — Upper-left, visually dominant */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="px-8 sm:px-12 lg:px-20 max-w-xl"
          >
            <blockquote>
              <p className="font-serif text-2xl sm:text-3xl lg:text-4xl leading-relaxed text-stone-800">
                "The best time to plant a tree was 20 years ago.
              </p>
              <p className="font-serif text-2xl sm:text-3xl lg:text-4xl leading-relaxed text-stone-700 mt-4">
                The second best time is now."
              </p>
            </blockquote>
          </motion.div>

          {/* Buttons — Lower-left, soft container for contrast */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="px-8 sm:px-12 lg:px-20"
          >
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 inline-block shadow-sm">
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/about"
                  className="px-8 py-3 bg-stone-900 text-white text-sm font-medium tracking-wide rounded hover:bg-stone-800 transition-colors duration-200 text-center"
                >
                  Learn More
                </Link>
                <Link
                  href="/community"
                  className="px-8 py-3 border border-stone-300 text-stone-700 text-sm font-medium tracking-wide rounded hover:bg-stone-50 transition-colors duration-200 text-center"
                >
                  Join Community
                </Link>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* ROW 2 — Identity + Media */}
      <div className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column — Portrait + Identity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col items-center lg:items-start text-center lg:text-left"
            >
              {/* Circular Portrait */}
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <Image
                  src="/images/IMG_6486.jpg"
                  alt="CA Surbhi Srivastava Bhartiya"
                  fill
                  className="object-cover object-[70%_1%]"
                  sizes="192px"
                  priority
                />
              </div>

              {/* Eyebrow Text */}
              <p className="mt-8 text-xs tracking-[0.2em] uppercase text-stone-500">
                Finance Education & Social Impact
              </p>

              {/* Name */}
              <h1 className="mt-4 font-serif text-3xl sm:text-4xl font-medium text-stone-900 leading-tight">
                CA Surbhi Srivastava Bhartiya
              </h1>
            </motion.div>

            {/* Right Column — YouTube Video */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {/* 16:9 Aspect Ratio Container */}
              <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg bg-stone-100">
                <iframe
                  src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                  title="Introduction Video"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
