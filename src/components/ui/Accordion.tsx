"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-[#C46E4E]/20">
      {items.map((item, index) => (
        <div key={index}>
          <button
            onClick={() =>
              setOpenIndex(openIndex === index ? null : index)
            }
            className="flex w-full items-center justify-between py-5 text-left"
            aria-expanded={openIndex === index}
          >
            <span className="text-lg font-medium text-[#2C2416] pr-4">
              {item.question}
            </span>
            <ChevronDown
              className={`h-5 w-5 shrink-0 text-[#C46E4E] transition-transform duration-300 ${
                openIndex === index ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index
                ? "max-h-96 pb-5 opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <p className="text-[#2C2416]/70 leading-relaxed break-keep">
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
