type Props = {
  country: string;
  setCountry: (value: string) => void;
  favoritesOnly: boolean;
  setFavoritesOnly: (value: boolean) => void;
};

export default function FilterTabs({
  country,
  setCountry,
  favoritesOnly,
  setFavoritesOnly,
}: Props) {
  return (
    <div className="mb-8 flex flex-wrap gap-3">

      <button
        onClick={() => setCountry("All")}
        className={`rounded-full px-6 py-3 ${
          country === "All"
            ? "bg-black text-white"
            : "bg-white"
        }`}
      >
        🌍 All
      </button>

      <button
        onClick={() => setCountry("Japan")}
        className={`rounded-full px-6 py-3 ${
          country === "Japan"
            ? "bg-black text-white"
            : "bg-white"
        }`}
      >
        🇯🇵 Japan
      </button>

      <button
        onClick={() => setCountry("USA")}
        className={`rounded-full px-6 py-3 ${
          country === "USA"
            ? "bg-black text-white"
            : "bg-white"
        }`}
      >
        🇺🇸 USA
      </button>

      <button
        onClick={() =>
          setFavoritesOnly(!favoritesOnly)
        }
        className={`rounded-full px-6 py-3 ${
          favoritesOnly
            ? "bg-yellow-400"
            : "bg-white"
        }`}
      >
        ⭐ Favorites
      </button>

    </div>
  );
}