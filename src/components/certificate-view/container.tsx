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
          className="-order-1 justify-self-end button"
        >
          Imprimir
        </button>
      </div>
    </div>
  );
}
