"use client";

import dynamic from "next/dynamic";

const ClockClient = dynamic(() => import("./clockclient"), { ssr: false });

export default function ClockWrapper() {
  return <ClockClient />;
}
