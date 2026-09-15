import Link from "next/link";
import Container from "./Container";
import { churchInfo } from "@/content/data/church-info";
import { worshipServices } from "@/content/data/worship";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark text-cream/70" role="contentinfo">
      <Container className="py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-3 md:gap-8">
          {/* Column 1: Church Info */}
          <div>
            <Link href="/" className="font-serif text-xl font-bold text-cream">
              {churchInfo.shortName}
            </Link>
            <ul className="mt-6 space-y-3 text-sm" role="list">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-terracotta/70" aria-hidden="true" />
                <span>{churchInfo.address}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-terracotta/70" aria-hidden="true" />
                <a href={`tel:${churchInfo.phone}`} className="hover:text-cream transition-colors">
                  {churchInfo.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-terracotta/70" aria-hidden="true" />
                <a href={`mailto:${churchInfo.email}`} className="hover:text-cream transition-colors">
                  {churchInfo.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Worship Times */}
          <div>
            <h3 className="font-serif text-base font-semibold text-cream">
              예배 시간
            </h3>
            <ul className="mt-6 space-y-3 text-sm" role="list">
              {worshipServices.map((service) => (
                <li key={service.id} className="flex justify-between gap-4">
                  <span className="font-medium text-cream/90">{service.name}</span>
                  <span className="text-cream/50">
                    {service.day} {service.time}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: SNS */}
          <div>
            <h3 className="font-serif text-base font-semibold text-cream">
              소통
            </h3>
            <div className="mt-6 flex gap-4">
              <a
                href={churchInfo.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 text-cream/70 transition-colors hover:bg-cream/20 hover:text-cream"
                aria-label="YouTube 채널"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0C.488 3.45.029 5.804 0 12c.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0C23.512 20.55 23.971 18.196 24 12c-.029-6.185-.484-8.549-4.385-8.816zM9 16V8l8 4-8 4z" />
                </svg>
              </a>
              <a
                href={churchInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 text-cream/70 transition-colors hover:bg-cream/20 hover:text-cream"
                aria-label="인스타그램"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href={churchInfo.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 text-cream/70 transition-colors hover:bg-cream/20 hover:text-cream"
                aria-label="페이스북"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
            <p className="mt-8 text-sm text-cream/40">
              {churchInfo.slogan}
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 border-t border-cream/10 pt-6 text-center text-xs text-cream/30">
          <p>&copy; {new Date().getFullYear()} {churchInfo.name}. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
