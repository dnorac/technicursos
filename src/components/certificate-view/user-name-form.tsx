import { setUserName } from "@/services/user";

export default function UserNameForm() {
  // TODO: Require first name and last name
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
            className="border border-neutral-800"
            type="text"
            placeholder="Primeiro nome"
            name="firstName"
          />
          <input
            className="border border-neutral-800"
            type="text"
            placeholder="Último nome"
            name="lastName"
          />
        </div>
        <button className="button">Enviar</button>
      </form>
    </div>
  );
}
