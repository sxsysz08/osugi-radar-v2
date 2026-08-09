import Link from "next/link";
import { notFound } from "next/navigation";
import { companies } from "@/data/companies";
import { getNews } from "@/lib/news";
import NewsCard from "@/components/NewsCard";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function CompanyPage({ params }: Props) {
  const { id } = await params;

  const company = companies.find((c) => c.id === Number(id));

  if (!company) return notFound();
  const news = await getNews(company.name);

  return (
    <main className="min-h-screen bg-neutral-100">
      <div className="mx-auto max-w-5xl px-6 py-10">

        <Link
          href="/"
          className="text-neutral-500 hover:text-black"
        >
          ← 戻る
        </Link>

        <div className="mt-6 rounded-[32px] bg-white p-10 shadow-sm">

          <div className="flex items-center gap-6">

            <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-neutral-100 text-5xl">
              {company.logo}
            </div>

            <div>
              <h1 className="text-5xl font-bold">
                {company.name}
              </h1>

              <p className="mt-2 text-xl text-neutral-500">
                {company.industry}
              </p>
            </div>

          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">

            <div className="rounded-3xl bg-neutral-100 p-6">
              <h2 className="text-xl font-bold">
                IPO情報
              </h2>

              <div className="mt-5 space-y-3">

                <p>
                  <strong>状態：</strong> {company.status}
                </p>

                <p>
                  <strong>IPO予定：</strong> {company.ipo}
                </p>

                <p>
                  <strong>評価額：</strong> {company.valuation}
                </p>

                <p>
                  <strong>国：</strong> {company.country}
                </p>

              </div>
            </div>

            <div className="rounded-3xl bg-neutral-100 p-6">

              <h2 className="text-xl font-bold">
                IPO SCORE
              </h2>

              <div className="mt-6 h-4 rounded-full bg-neutral-300">

                <div
                  className="h-4 rounded-full bg-gradient-to-r from-green-500 to-blue-600"
                  style={{
                    width: `${company.score}%`,
                  }}
                />

              </div>

              <p className="mt-4 text-5xl font-bold">
                {company.score}
              </p>

            </div>

          </div>

          <div className="mt-8 rounded-3xl bg-neutral-100 p-8">

            <h2 className="text-2xl font-bold">
              企業概要
            </h2>

            <p className="mt-5 leading-8 text-neutral-600">
              {company.description}
            </p>

          </div>

<div className="mt-8 rounded-3xl bg-neutral-100 p-8">

  <h2 className="text-2xl font-bold">
    最新ニュース
  </h2>

  <div className="mt-6 space-y-4">

{news.map((item) => (
  <NewsCard
    key={item.title}
    title={item.title}
    source={item.source}
    url={item.url}
  />
))}


  </div>

</div>
        </div>

      </div>
    </main>
  );
}