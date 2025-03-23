import config from "@/config";
import { cn } from "@/utils";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { ComponentProps } from "react";

function HeaderLink({
  children,
  className,
  ...props
}: ComponentProps<typeof Link>) {
  return (
    <Link className={cn("p-4 hover:text-blue-400", className)} {...props}>
      {children}
    </Link>
  );
}

function NavItem({ children, ...props }: ComponentProps<typeof HeaderLink>) {
  return (
    <li className="flex">
      <HeaderLink {...props}>{children}</HeaderLink>
    </li>
  );
}

export default function Header() {
  return (
    <header className="bg-gray-100 dark:bg-neutral-950">
      <div className="container mx-auto">
        <div className="flex justify-between -mx-4 max-sm:px-4">
          <HeaderLink href="/" className="font-semibold">
            {config.APP_NAME}
          </HeaderLink>
          <nav className="max-sm:hidden">
            <ul className="flex">
              <NavItem href="/">Cursos</NavItem>
              {/* <NavItem href="/certificados">Certificados</NavItem> */}
              <li className="flex items-center">
                <SignedOut>
                  <SignInButton mode="modal">
                    <button className="p-4 hover:text-blue-400 cursor-pointer">
                      Entrar
                    </button>
                  </SignInButton>
                </SignedOut>
                <SignedIn>
                  <div className="px-4 flex">
                    <UserButton />
                  </div>
                </SignedIn>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
