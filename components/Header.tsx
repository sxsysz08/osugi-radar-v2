export default function Header() {
  return (
    <header className="mb-10">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm font-medium uppercase tracking-[0.3em] text-neutral-500">
            IPO Intelligence
          </p>

          <h1 className="mt-2 text-5xl font-bold tracking-tight">
            OSUGI Radar
          </h1>

          <p className="mt-3 text-lg text-neutral-500">
            IPO・未上場企業を毎日追跡
          </p>

        </div>

        <div className="flex gap-3">

          <button className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm transition hover:scale-105">
            🔔
          </button>

          <button className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white shadow-sm transition hover:scale-105">
            ⚙️
          </button>

        </div>

      </div>

    </header>
  );
}