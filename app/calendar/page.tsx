import Link from "next/link";

import CalendarCard from "@/components/CalendarCard";

const ipoList = [
  {
    date: "2026-10-03",
    company: "Stripe",
    country: "USA",
    status: "予想",
  },
  {
    date: "2026-10-10",
    company: "Databricks",
    country: "USA",
    status: "予想",
  },
  {
    date: "2026-10-15",
    company: "Rapidus",
    country: "Japan",
    status: "予想",
  },
  {
    date: "2026-11-02",
    company: "OpenAI",
    country: "USA",
    status: "未定",
  },
];

export default function CalendarPage() {
  return (
    <main className="min-h-screen bg-neutral-100">

      <div className="mx-auto max-w-5xl px-6 py-10">

        <Link
          href="/"
          className="text-neutral-500"
        >
          ← ダッシュボード
        </Link>

        <h1 className="mt-6 text-5xl font-bold">
          IPO Calendar
        </h1>

        <div className="mt-10 space-y-5">

          {ipoList.map((ipo) => (
            <CalendarCard
              key={ipo.company}
              {...ipo}
            />
          ))}

        </div>

      </div>

    </main>
  );
}