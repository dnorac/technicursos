import { loadChapters } from "@/chapters";
import CertificateContainer from "@/components/certificate-container";
import { setUserName } from "@/services/user";
import { currentUser } from "@clerk/nextjs/server";
import { getConclusionDate } from "./functions";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CertificatePage({ params }: Props) {
  const { slug } = await params;

  const { chapters, metadata } = await loadChapters(slug);
  const user = await currentUser();

  if (!user?.firstName || !user?.lastName) {
    // Require first name and last name
    return (
      <div className="max-w-md mx-auto pt-16">
        <h1 className="text-xl text-balance ml-6">
          Para emitir certificados, precisamos do seu nome.
        </h1>

        <form
          action={setUserName}
          className="grid gap-4 p-8 mt-6 bg-neutral-100 dark:bg-neutral-950 rounded-lg"
        >
          <div className="grid grid-cols-2 gap-4">
            <input
              className="border border-neutral-800 p-2"
              type="text"
              placeholder="Primeiro nome"
              name="firstName"
            />
            <input
              className="border border-neutral-800 p-2"
              type="text"
              placeholder="Último nome"
              name="lastName"
            />
          </div>
          <button className="border border-neutral-800 cursor-pointer p-2">
            Enviar
          </button>
        </form>
      </div>
    );
  }

  const username = `${user.firstName} ${user.lastName}`;
  const conclusion = getConclusionDate();

  return (
    <CertificateContainer>
      <Body name={username} title={metadata.title} conclusion={conclusion} />
      <Chapters chapters={chapters} />
    </CertificateContainer>
  );
}

function Body({
  name,
  title,
  conclusion,
}: {
  name: string;
  title: string;
  conclusion: {
    date: string;
    hour: string;
  };
}) {
  return (
    <div className="p-20 text-center grid gap-20 tracking-wide">
      <h1 className="text-2xl font-medium">Certificado de Conclusão</h1>
      <p className="text-xl">
        Certificamos que{" "}
        <span className="block text-5xl my-6 font-semibold">{name}</span>{" "}
        concluiu o minicurso <span className="font-bold px-2">{title}</span> do{" "}
        <span className="text-primary">Technicursos</span>
      </p>
      <p>
        Emitido em {conclusion.date} às {conclusion.hour}
      </p>
    </div>
  );
}

function Chapters({ chapters }: { chapters: string[] }) {
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
