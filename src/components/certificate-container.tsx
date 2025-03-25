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
    <div className="relative">
      <div ref={contentRef}>
        <style type="text/css" media="print">
          {
            "\
          @page { size: landscape; margin: 3rem; }\
        "
          }
        </style>
        {children}
      </div>
      <button
        onClick={() => reactToPrint()}
        className="uppercase p-3 hover:text-current/100 active:opacity-50 px-6 text-current/60 text-sm border absolute top-4 right-4 cursor-pointer border-current/20 rounded-xl"
      >
        Imprimir
      </button>
    </div>
  );
}
