"use client";

import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "black",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      <h1>Click Test: {count}</h1>

      <button
        onClick={() => setCount(count + 1)}
        style={{
          padding: "20px 40px",
          fontSize: "20px",
          background: "lime",
          color: "black",
          borderRadius: "20px",
        }}
      >
        TEST CLICK
      </button>
    </main>
  );
}