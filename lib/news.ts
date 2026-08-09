export type News = {
  title: string;
  url: string;
  source: string;
};

type NewsApiArticle = {
  title: string;
  url: string;
  source: {
    name: string;
  };
};

type NewsApiResponse = {
  articles: NewsApiArticle[];
};

export async function getNews(
  company: string
): Promise<News[]> {
  const apiKey = process.env.NEWS_API_KEY;

  if (!apiKey) {
    return [];
  }

  const url =
    `https://newsapi.org/v2/everything?` +
    `q=${encodeURIComponent(company)}` +
    `&language=en` +
    `&sortBy=publishedAt` +
    `&pageSize=5` +
    `&apiKey=${apiKey}`;

  try {
    const res = await fetch(url, {
      next: {
        revalidate: 1800,
      },
    });

    if (!res.ok) {
      return [];
    }

    const data =
      (await res.json()) as NewsApiResponse;

    return data.articles.map((article) => ({
      title: article.title,
      url: article.url,
      source: article.source.name,
    }));
  } catch {
    return [];
  }
}