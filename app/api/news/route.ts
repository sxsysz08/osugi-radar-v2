import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const company = searchParams.get("company");

  return NextResponse.json({
    company,
    news: [
      {
        title: `${company} に関するニュース（ダミー）`,
        source: "OSUGI Radar",
        url: "#",
      },
      {
        title: `${company} のIPO関連ニュース`,
        source: "OSUGI Radar",
        url: "#",
      },
    ],
  });
}