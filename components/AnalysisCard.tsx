type Props = {
  score: number;
  company: string;
  analysis: string[];
  comment: string;
};

export default function AnalysisCard({
  score,
  company,
  analysis,
  comment,
}: Props) {
  const stars =
    score >= 90
      ? "★★★★★"
      : score >= 80
      ? "★★★★☆"
      : score >= 70
      ? "★★★☆☆"
      : "★★☆☆☆";

  return (
    <div className="rounded-3xl bg-white p-8 shadow-sm">
      <h2 className="text-2xl font-bold">
        🧠 AI Analysis
      </h2>

      <p className="mt-6 text-xl font-semibold">
        IPO期待度 {stars}
      </p>

      <ul className="mt-6 space-y-3 text-neutral-600">
        {analysis.map((item) => (
          <li key={item}>✅ {item}</li>
        ))}
      </ul>

      <div className="mt-8 rounded-2xl bg-neutral-100 p-5">
        <p className="font-semibold">
          AIコメント
        </p>

        <p className="mt-3 leading-7 text-neutral-600">
          {comment}
        </p>
      </div>
    </div>
  );
}