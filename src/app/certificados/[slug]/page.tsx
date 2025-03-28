import { loadChapters } from "@/chapters";
import CertificateContainer from "@/components/certificate-container";
import { auth, clerkClient, currentUser } from "@clerk/nextjs/server";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CertificatePage({ params }: Props) {
  const { slug } = await params;

  const { chapters, metadata } = await loadChapters(slug);
  const user = await currentUser();

  async function setName(formData: FormData) {
    "use server";

    const userDetails = {
      firstName: formData.get("firstName")?.toString(),
      lastName: formData.get("lastName")?.toString(),
    };

    console.log(userDetails);

    const { userId } = await auth();
    if (!userId) return;

    const client = await clerkClient();
    await client.users.updateUser(userId, userDetails);
  }

  if (!user?.firstName || !user?.lastName) {
    // Require first name and last name
    return (
      <div className="max-w-md mx-auto pt-16">
        <h1 className="text-xl text-balance ml-6">
          Para emitir certificados, precisamos do seu nome.
        </h1>

        <form
          action={setName}
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
          <button className="border border-neutral-800 dark:bg-black cursor-pointer hover:border-white p-2">
            Enviar
          </button>
        </form>
      </div>
    );
  }

  const username = `${user.firstName} ${user.lastName}`;

  const dateFormatter = Intl.DateTimeFormat("pt-br", {
    dateStyle: "short",
  });
  const timeFormatter = Intl.DateTimeFormat("pt-br", {
    timeStyle: "short",
  });
  const emissionDate = new Date();
  const data = dateFormatter.format(emissionDate);
  const hora = timeFormatter.format(emissionDate);

  return (
    <CertificateContainer>
      <div className="border flex aspect-video">
        <div className="p-20 text-center flex flex-2 flex-col justify-between gap-20 tracking-wide">
          <h1 className="text-2xl font-medium">Certificado de Conclusão</h1>
          {/*  */}
          <p className="text-xl">
            Certificamos que{" "}
            <span className="block text-5xl my-6 font-semibold">
              {username}
            </span>{" "}
            concluiu o minicurso{" "}
            <span className="font-bold px-2">{metadata.title}</span> do{" "}
            <span className="text-blue-700 dark:text-blue-400">
              Technicursos
            </span>
          </p>
          <p>
            Emitido em {data} às {hora}
          </p>
          {/*  */}
        </div>
        <div className="p-8 bg-neutral-100 dark:bg-neutral-950 flex-1">
          <h2 className="font-bold mb-4 text-lg">Conteúdo</h2>
          <ol className="space-y-4 list-decimal list-inside">
            {chapters.map((chapter) => (
              <li key={chapter}>{chapter}</li>
            ))}
          </ol>
        </div>
      </div>
    </CertificateContainer>
  );
}
