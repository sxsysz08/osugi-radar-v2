type Props = {
  date: string;
  company: string;
  country: string;
  status: string;
};

export default function CalendarCard({
  date,
  company,
  country,
  status,
}: Props) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm border border-neutral-200">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm text-neutral-500">
            {date}
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            {company}
          </h2>

          <p className="mt-2">
            🌍 {country}
          </p>

        </div>

        <div className="rounded-full bg-green-100 px-4 py-2">
          {status}
        </div>

      </div>

    </div>
  );
}