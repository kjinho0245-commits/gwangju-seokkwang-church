"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Container from "./Container";
import MobileNav from "./MobileNav";
import { Menu } from "lucide-react";

const navLinks = [
  { label: "교회 소개", href: "/about" },
  { label: "예배 안내", href: "/worship" },
  { label: "설교", href: "/sermons" },
  { label: "소식", href: "/news" },
  { label: "새가족 안내", href: "/newcomer" },
  { label: "오시는 길", href: "/contact" },
] as const;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-cream/95 shadow-sm backdrop-blur-sm py-3"
            : "bg-transparent py-5"
        }`}
      >
        <Container>
          <nav className="flex items-center justify-between" aria-label="메인 내비게이션">
            <Link
              href="/"
              className={`font-serif text-xl font-bold tracking-tight transition-colors duration-300 md:text-2xl ${
                scrolled ? "text-dark" : "text-cream"
              }`}
              aria-label="새서광교회 홈"
            >
              새서광교회
            </Link>

            {/* Desktop nav */}
            <ul className="hidden items-center gap-1 lg:flex" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`rounded-sm px-3.5 py-2 text-sm font-medium transition-colors duration-200 hover:bg-dark/5 ${
                      scrolled ? "text-dark/80 hover:text-dark" : "text-cream/80 hover:text-cream"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile hamburger */}
            <button
              type="button"
              className={`rounded-sm p-2 transition-colors lg:hidden ${
                scrolled ? "text-dark hover:bg-dark/5" : "text-cream hover:bg-cream/10"
              }`}
              onClick={() => setMobileOpen(true)}
              aria-label="메뉴 열기"
              aria-expanded={mobileOpen}
            >
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </nav>
        </Container>
      </header>

      <MobileNav
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        links={navLinks}
      />
    </>
  );
}
