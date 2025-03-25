import Link from "next/link";

export default function CertificatesPage() {
  return (
    <>
      <h1 className="font-semibold text-3xl">Certificados</h1>
      <ul className="mt-4 grid gap-2 grid-cols-4">
        <li className="grid">
          <Link
            href="/certificados/1-logica-de-programacao"
            className="bg-gray-100 dark:bg-neutral-900 p-4 hover:outline hover:bg-transparent transition-colors"
          >
            Lógica de Programação
          </Link>
        </li>
        <li className="grid">
          <Link
            href="/certificados/2-explorando-algoritmos"
            className="bg-gray-100 dark:bg-neutral-900 p-4 hover:outline hover:bg-transparent transition-colors"
          >
            Explorando algoritmos
          </Link>
        </li>
      </ul>
    </>
  );
}
