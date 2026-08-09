import Link from "next/link";

type Props = {
  id: number;
  name: string;
  status: string;
  color: string;
  favorite: boolean;
  score: number;
  valuation: string;
  industry: string;
  ipo: string;
  logo: string;
  onFavorite: (id: number) => void;
};

export default function CompanyCard({
  id,
  name,
  status,
  color,
  favorite,
  score,
  valuation,
  industry,
  ipo,
  logo,
  onFavorite,
}: Props) {
  return (
    <Link href={`/company/${id}`}>
      <article className="group rounded-[32px] border border-neutral-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

        <div className="flex items-start justify-between">

          <div className="flex gap-5">

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-neutral-100 text-3xl">
              {logo}
            </div>

            <div>

              <h2 className="text-3xl font-bold">
                {name}
              </h2>

              <p className="mt-2 text-neutral-500">
                {color === "green" ? "🟢" : "🟡"} {status}
              </p>

            </div>

          </div>

          <button
            onClick={(e) => {
              e.preventDefault();
              onFavorite(id);
            }}
            className="text-3xl transition hover:scale-125"
          >
            {favorite ? "⭐" : "☆"}
          </button>

        </div>

        <div className="mt-8 grid grid-cols-3 gap-4">

          <div className="rounded-2xl bg-neutral-100 p-4">
            <p className="text-xs text-neutral-500">
              Valuation
            </p>

            <p className="mt-2 font-bold">
              {valuation}
            </p>
          </div>

          <div className="rounded-2xl bg-neutral-100 p-4">
            <p className="text-xs text-neutral-500">
              Industry
            </p>

            <p className="mt-2 font-bold">
              {industry}
            </p>
          </div>

          <div className="rounded-2xl bg-neutral-100 p-4">
            <p className="text-xs text-neutral-500">
              IPO
            </p>

            <p className="mt-2 font-bold">
              {ipo}
            </p>
          </div>

        </div>

        <div className="mt-8">

          <div className="flex justify-between">

            <span className="text-sm text-neutral-500">
              IPO SCORE
            </span>

            <span className="font-bold">
              {score}
            </span>

          </div>

          <div className="mt-3 h-3 rounded-full bg-neutral-200">

            <div
              className="h-full rounded-full bg-gradient-to-r from-green-500 to-blue-500"
              style={{
                width: `${score}%`,
              }}
            />

          </div>

        </div>

      </article>
    </Link>
  );
}