("use client");
import React, { useState } from "react";
import quotes from "../quotes.json";

import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { BackgroundGradient } from "../components/ui/background-gradient";
import { Boxes } from "../components/ui/background-boxes";
import { cn } from "../lib/utils";

import Footer from "./Footer";

export default function Quotes() {
  const [randomQuote, setRandomQuote] = useState(null);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setRandomQuote(quotes[randomIndex]);
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-slate-900 flex flex-col items-center ">
      <div className="absolute inset-0 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <header className="text-center p-4 text-white sm:mt-[6em] mt-[3em]">
        <h1
          className={cn(
            "md:text-5xl text-3xl text-white relative z-20 sm:mb-2 font-bold"
          )}
        >
          Random Quotes{" "}
        </h1>
        <strong className={cn("md:text-lg text-xs text-white relative z-20")}>
          {" "}
          A quote a day keeps bad thoughts away
          <br />
        </strong>

        <div className={cn("md:text-xs text-xs text-white relative z-20 my-6")}>
          <motion.div
            initial="visible"
            variants={container}
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.1 },
            }}
            whileTap={{ scale: 0.7, 
              transition: { duration: 0.1 }
             }}
          >
            <Button
              onClick={getRandomQuote}
              className="text-md sm:text-lg border-1 p-4 sm:p-6 rounded-xl border-gray-100  text-white hover:bg-white hover:text-black transition-colors duration-300"
            >
              Click me!
            </Button>
          </motion.div>
        </div>
      </header>

      <div className="flex flex-col items-center justify-center my-10">
        {randomQuote && (
          <div className="relative z-20 ">
            <BackgroundGradient className="rounded-[22px] max-w-lg p-7 sm:p-9 bg-white text-center min-w-[200px]">
              <p className="sm:text-4xl text-2xl font-semibold sm:pb-4 pb-2  ">
                "{randomQuote.quote}"
              </p>
              <p className="text-xs text-gray-500">- {randomQuote.author}</p>
            </BackgroundGradient>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
