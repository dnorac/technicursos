import config from "@/config";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="grid-breakout border-t border-border grid-container">
      <div className="grid-popout py-4">
        <p>
          Copyright &copy; 2025{" "}
          <Link href="/" className="font-medium">
            {config.APP_NAME}
          </Link>
          . Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
