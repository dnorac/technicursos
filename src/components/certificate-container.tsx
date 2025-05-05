"use client";

import { ReactNode, useRef } from "react";
import { useReactToPrint } from "react-to-print";

interface Props {
  children: ReactNode;
}

export default function CertificateContainer({ children }: Props) {
  const contentRef = useRef<HTMLDivElement>(null);
  const reactToPrint = useReactToPrint({ contentRef });

  return (
    <div className="grid-popout py-8">
      <div className="grid gap-4">
        <div ref={contentRef}>
          <style type="text/css" media="print">
            {
              "\
          @page { size: landscape; margin: 3rem; }\
          "
            }
          </style>
          <div className="border border-neutral-400 dark:border-neutral-800 grid grid-cols-[1fr_300px]">
            {children}
          </div>
        </div>
        <button
          onClick={() => reactToPrint()}
          className="-order-1 font-medium justify-self-end uppercase p-2 hover:text-white hover:bg-blue-700 hover:shadow-lg shadow-blue-700/20 tracking-wider transition-all active:opacity-50 px-6 text-current/60 text-sm border cursor-pointer border-current/20 rounded-xl"
        >
          Imprimir
        </button>
      </div>
    </div>
  );
}
