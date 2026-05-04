// components/SummerSlider.js
"use client";
import { useState, useEffect } from "react";

const slides = [
  {
    text: (
      <>
        🌞 Summer Sale{" "}
        <span className="text-yellow-300 bg-black px-2 py-1 rounded-lg">
          50% OFF
        </span>
      </>
    )
  },
  {
    text: (
      <>
        🔥 <span className="text-red-400 bg-black px-2 py-1 rounded-lg">Hot Deals</span> Just for You!
      </>
    )
  },
];

export default function SummerSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="bg-black/40 h-50 w-full flex items-center justify-center text-white text-4xl font-extrabold transition-all duration-700 bg-cover bg-center relative"
      style={{ backgroundImage: slides[index].bg }}
    >
      <div className=" p-4 rounded-lg">
        {slides[index].text}
      </div>
    </div>
  );
}
