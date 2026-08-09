type Props = {
  title: string;
  source: string;
  url: string;
};

export default function NewsCard({
  title,
  source,
  url,
}: Props) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      <h3 className="text-lg font-semibold">
        {title}
      </h3>

      <p className="mt-2 text-sm text-neutral-500">
        {source}
      </p>
    </a>
  );
}