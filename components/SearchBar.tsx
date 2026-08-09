type Props = {
  search: string;
  setSearch: (value: string) => void;
};

export default function SearchBar({
  search,
  setSearch,
}: Props) {
  return (
    <div className="mb-8">
      <div className="flex items-center rounded-2xl border border-neutral-200 bg-white px-5 py-4 shadow-sm transition focus-within:border-neutral-400 focus-within:shadow-md">

        <span className="mr-3 text-xl">🔍</span>

        <input
          type="text"
          placeholder="企業名を検索..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-transparent text-lg outline-none placeholder:text-neutral-400"
        />

      </div>
    </div>
  );
}