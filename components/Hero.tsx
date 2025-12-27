import { Container } from "./Container";

export function Hero() {
  return (
    <section className="relative">
      <Container className="relative pb-16 pt-16 md:pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-gradient text-balance text-4xl font-regular leading-tight md:text-6xl">
            Stablecoin Payments, Orchestrated
          </h1>

          <p className="mt-4 text-balance text-sm text-white/70 md:text-base">
            Tempest is the non‑custodial orchestration layer that makes
            stablecoin payments simple, trusted, and enterprise‑ready.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#product"
              className="inline-flex w-full justify-center rounded-md bg-white/10 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/15 transition border border-white/20 sm:w-auto"
            >
              Learn More
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
