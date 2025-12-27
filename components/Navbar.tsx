import { Container } from "./Container";
import { Logo } from "./Logo";

const nav = [
  { label: "Product", href: "#product" },
  { label: "Calculator", href: "#calculator" },
  { label: "Pricing", href: "#pricing" },
  { label: "Docs", href: "#docs" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50">
      <div className="relative">
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#1a1340]/90 to-transparent backdrop-blur" />
        <Container className="relative flex h-20 items-center justify-between">
          <a href="#" className="group inline-flex items-center gap-2">
            <Logo />
            <span className="sr-only">Tempest Home</span>
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-white/75 hover:text-white transition"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#get-started"
              className="inline-flex rounded-md bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur hover:bg-white/15 transition border border-white/20"
            >
              Get Started
            </a>
          </div>
        </Container>
      </div>
    </header>
  );
}
