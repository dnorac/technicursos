export default function Chapters({ chapters }: { chapters: string[] }) {
  return (
    <div className="p-8 bg-neutral-100 dark:bg-neutral-950">
      <h2 className="font-bold mb-4 text-lg">Conteúdo</h2>
      <ol className="space-y-4 list-decimal list-inside">
        {chapters.map((chapter) => (
          <li key={chapter}>{chapter}</li>
        ))}
      </ol>
    </div>
  );
}
