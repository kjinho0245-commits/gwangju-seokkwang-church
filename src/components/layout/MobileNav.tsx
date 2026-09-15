"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
  links: ReadonlyArray<{ label: string; href: string }>;
}

export default function MobileNav({ open, onClose, links }: MobileNavProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] flex flex-col bg-dark lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          role="dialog"
          aria-modal="true"
          aria-label="모바일 내비게이션"
        >
          {/* Close button */}
          <div className="flex justify-end px-5 py-5">
            <button
              type="button"
              className="rounded-sm p-2 text-cream/70 hover:text-cream transition-colors"
              onClick={onClose}
              aria-label="메뉴 닫기"
            >
              <X className="h-7 w-7" aria-hidden="true" />
            </button>
          </div>

          {/* Navigation links */}
          <nav className="flex flex-1 flex-col items-center justify-center gap-2">
            <Link
              href="/"
              onClick={onClose}
              className="mb-8 font-serif text-3xl font-bold text-cream"
            >
              새서광교회
            </Link>
            {links.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i, duration: 0.3 }}
              >
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="block rounded-sm px-6 py-3 text-lg font-medium text-cream/70 transition-colors hover:text-cream"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
