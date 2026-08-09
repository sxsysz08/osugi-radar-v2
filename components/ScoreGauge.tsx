type Props = {
  score: number;
};

export default function ScoreGauge({
  score,
}: Props) {
  let color = "bg-red-500";
  let label = "Low";

  if (score >= 80) {
    color = "bg-green-500";
    label = "Very High";
  } else if (score >= 60) {
    color = "bg-blue-500";
    label = "High";
  } else if (score >= 40) {
    color = "bg-yellow-500";
    label = "Medium";
  }

  return (
    <div className="rounded-3xl bg-white p-8 shadow-sm">

      <h2 className="text-2xl font-bold">
        AI IPO Score
      </h2>

      <div className="mt-8 flex items-center gap-8">

        <div className="relative flex h-36 w-36 items-center justify-center rounded-full border-[12px] border-neutral-200">

          <div
            className={`absolute inset-0 rounded-full ${color} opacity-15`}
          />

          <span className="text-5xl font-bold">
            {score}
          </span>

        </div>

        <div>

          <p className="text-sm text-neutral-500">
            IPO Probability
          </p>

          <p className="mt-2 text-3xl font-bold">
            {label}
          </p>

          <p className="mt-4 text-neutral-500">
            AIによるIPO期待度を表示します。
          </p>

        </div>

      </div>

    </div>
  );
}