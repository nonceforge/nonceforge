"use client";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <button
        onClick={() => alert("Berhasil")}
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