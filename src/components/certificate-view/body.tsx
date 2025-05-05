interface Conclusion {
  date: string;
  hour: string;
}

interface Props {
  name: string;
  title: string;
  conclusion: Conclusion;
}

export default function Body({ name, title, conclusion }: Props) {
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
