import config from "@/config";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { ComponentProps } from "react";
import HeaderAvatar from "./header-avatar";
import HeaderLink from "./header-link";

function NavItem({ children, ...props }: ComponentProps<typeof HeaderLink>) {
  return (
    <li className="flex">
      <HeaderLink {...props}>{children}</HeaderLink>
    </li>
  );
}

export default function Header() {
  return (
    <header className="grid-breakout border-b border-border sticky top-0 bg-white dark:bg-black z-10">
      <div className="flex justify-between">
        <HeaderLink href="/" className="font-semibold">
          {config.APP_NAME}
        </HeaderLink>
        <nav className="max-sm:hidden">
          <ul className="flex">
            <NavItem href="/">Cursos</NavItem>
            <NavItem href="/certificados">Certificados</NavItem>
            <li className="flex items-center">
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="p-4 px-6 hover:text-blue-400 cursor-pointer">
                    Entrar
                  </button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <HeaderAvatar />
              </SignedIn>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
