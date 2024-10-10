"use client"; // This makes the component a Client Component

import { useEffect } from "react";
import Script from "next/script";

export default function AOSInitializer() {
  useEffect(() => {
    // Initialize AOS when the page loads
    if (typeof window !== "undefined") {
      const AOS = require("aos"); // Ensure it's loaded in the client-side
      AOS.init();
    }
  }, []);

  return (
    <>
      {/* AOS Script */}
      <Script
        src="https://unpkg.com/aos@2.3.1/dist/aos.js"
        strategy="afterInteractive" // Ensure the script is loaded after interaction
      />
    </>
  );
}
