export default function Stats() {
  const stats = [
    {
      title: "Total Miners",
      value: "12,842",
    },
    {
      title: "Blocks Mined",
      value: "482K",
    },
    {
      title: "Rewards Distributed",
      value: "2.4M NFG",
    },
    {
      title: "Network",
      value: "Base",
    },
  ];

  return (
    <section className="relative z-10 mx-auto grid max-w-6xl gap-6 px-6 pb-24 md:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="rounded-2xl border border-zinc-800 bg-zinc-950 p-8 text-center"
        >
          <p className="mb-3 text-sm uppercase tracking-widest text-zinc-500">
            {stat.title}
          </p>

          <h2 className="text-3xl font-black text-lime-400">
            {stat.value}
          </h2>
        </div>
      ))}
    </section>
  );
}