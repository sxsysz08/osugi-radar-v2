export type News = {
  title: string;
  url: string;
  source: string;
};

export async function getNews(company: string): Promise<News[]> {
  return [
    {
      title: `${company} に関する最新ニュース`,
      url: "#",
      source: "OSUGI Radar",
    },
    {
      title: `${company} のIPO動向`,
      url: "#",
      source: "OSUGI Radar",
    },
    {
      title: `${company} の資金調達情報`,
      url: "#",
      source: "OSUGI Radar",
    },
  ];
}