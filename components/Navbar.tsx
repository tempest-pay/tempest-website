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
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#1a1340]/40 to-transparent backdrop-blur-md" />
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
                className="text-sm text-white hover:text-white/80 transition"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#get-started"
              className="relative inline-flex items-center justify-center p-[1px] rounded-md overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#8B80F9] to-[#5338FF]" />
              <div className="relative bg-[#6051DC] px-3 py-1.5 rounded-[5px] text-sm font-semibold text-white hover:bg-[#6051DC]/90 transition">
                Get Started
              </div>
            </a>
          </div>
        </Container>
      </div>
    </header>
  );
}
