// Hero.tsx
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative w-full h-screen-80 flex flex-col justify-center items-center text-center bg-[color:#FAFAFA] overflow-hidden">
      {/* Floating elements/background illustrations */}
      <div className='mt-40 flex flex-col justify-center items-center'>
      <motion.div
        className="absolute top-10 left-10 w-40 h-40 bg-white rounded-lg shadow-xl"
        initial={{ opacity: 0, x: -100, y: -50 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Insert image or illustration */}
        <Image src="/chat2.jpg" alt="Map icon" width={160} height={160} />
      </motion.div>
      
     
      <h1 className='m-2 px-6 py-2 text-white  font-medium text-sm rounded-full bg-orange-100 '>
        AI TRAVEL PLANNER
      </h1>
       <motion.div
        className="absolute bottom-20 right-10 w-48 h-48 bg-white rounded-lg shadow-xl"
        initial={{ opacity: 0, x: 100, y: 100 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Image className='rounded-2xl object-fit' src="/chat1.jpg" alt="Chat icon" width={234} height={192} />
      </motion.div>

      {/* Hero Text */}
       <div className='mt-8 mb-4'>
         <motion.h1
        className="text-5xl lg:text-6xl font-extrabold text-#333 mb-4 px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Unlock Uttarakhand’s Secrets with <br /> Your AI Guide
      </motion.h1>
       </div>
     <motion.div
        className="absolute bottom-20 right-10 w-48 h-48 bg-white rounded-lg shadow-xl"
        initial={{ opacity: 0, x: 0, y: 100 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Image className='rounded-2xl object-fit' src="/chat1.jpg" alt="Chat icon" width={234} height={192} />
      </motion.div>
      <motion.p
        className="text-xl lg:text-2xl text-#555 max-w-2xl px-4 mb-8"
        initial={{ opacity: 0, y: 70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        Get personalised itineraries, live chat support and real-time alerts — all built for your Himalayan adventure.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        className="flex gap-4"
        initial={{ opacity: 0, y: 90 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
         <Link href="/dashboard">
         <button className="px-8 py-4 bg-orange-600 text-white rounded-md text-lg hover:bg-orange-700 transition">
              Start Planning Now
         </button>
        </Link>
        <button className="px-8 py-4 border border-orange-600 text-orange-600 rounded-md text-lg hover:bg-orange-50 transition">
          See Demo
        </button>
      </motion.div>
     </div>
    </section>
  );
}
