"use client";

import dynamic from "next/dynamic";

const ClockClient = dynamic(() => import("./components/clockclient"), {
  ssr: false,
});

export default function HomePage() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center transition-colors duration-300">
      <h1 className="text-5xl font-extrabold mb-8">
        Welcome to My Next.js Blog
      </h1>
      <ClockClient />
    </section>
  );
}
