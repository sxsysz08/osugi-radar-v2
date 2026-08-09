"use client";

import { useEffect, useMemo, useState } from "react";

import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import FilterTabs from "@/components/FilterTabs";
import CompanyCard from "@/components/CompanyCard";

import { companies as initialCompanies } from "@/data/companies";

type Company = (typeof initialCompanies)[number];

export default function Home() {
  const [companies, setCompanies] =
    useState<Company[]>(initialCompanies);

  const [search, setSearch] = useState("");
  const [country, setCountry] = useState("All");
  const [favoritesOnly, setFavoritesOnly] =
    useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("companies");

    if (saved) {
      setCompanies(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "companies",
      JSON.stringify(companies)
    );
  }, [companies]);

  function toggleFavorite(id: number) {
    setCompanies((prev) =>
      prev.map((company) =>
        company.id === id
          ? {
              ...company,
              favorite: !company.favorite,
            }
          : company
      )
    );
  }

  const filteredCompanies = useMemo(() => {
    return companies.filter((company) => {
      const matchSearch = company.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchCountry =
        country === "All" ||
        company.country === country;

      const matchFavorite =
        !favoritesOnly || company.favorite;

      return (
        matchSearch &&
        matchCountry &&
        matchFavorite
      );
    });
  }, [
    companies,
    search,
    country,
    favoritesOnly,
  ]);

  const favoriteCount = companies.filter(
    (company) => company.favorite
  ).length;

  const averageScore =
    companies.length === 0
      ? 0
      : Math.round(
          companies.reduce(
            (sum, company) =>
              sum + company.score,
            0
          ) / companies.length
        );

  return (
    <main className="min-h-screen bg-neutral-100">
      <div className="mx-auto max-w-5xl px-6 py-10">

        <Header />

        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        <div className="mb-8 grid gap-5 md:grid-cols-3">

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <p className="text-sm text-neutral-500">
              Total Companies
            </p>

            <h2 className="mt-3 text-4xl font-bold">
              {companies.length}
            </h2>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <p className="text-sm text-neutral-500">
              Favorites
            </p>

            <h2 className="mt-3 text-4xl font-bold">
              ⭐ {favoriteCount}
            </h2>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <p className="text-sm text-neutral-500">
              Average Score
            </p>

            <h2 className="mt-3 text-4xl font-bold">
              {averageScore}
            </h2>
          </div>

        </div>

        <FilterTabs
          country={country}
          setCountry={setCountry}
          favoritesOnly={favoritesOnly}
          setFavoritesOnly={setFavoritesOnly}
        />

        <div className="space-y-5">

          {filteredCompanies.map((company) => (
            <CompanyCard
              key={company.id}
              {...company}
              onFavorite={toggleFavorite}
            />
          ))}

        </div>

      </div>
    </main>
  );
}