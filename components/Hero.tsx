import { Container } from "./Container";
import { OrchestrationGraphic } from "./OrchestrationGraphic";

export function Hero() {
  return (
    <section className="relative overflow-visible">
      <Container className="relative pb-16 pt-16 md:pb-24 md:pt-32">
        <div className="flex flex-col lg:flex-row lg:items-start gap-0">
          <div className="relative z-10 flex-shrink-0 lg:w-1/2 lg:pr-12 pt-4">
            <h1 className="text-gradient text-4xl font-regular leading-[1.1] md:text-6xl lg:text-7xl">
              Stablecoin Payments, Orchestrated
            </h1>

            <p className="mt-6 max-w-lg text-sm text-white md:text-lg">
              Tempest is the non‑custodial orchestration layer that makes
              stablecoin payments simple, trusted, and enterprise‑ready.
            </p>

            <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row">
              <a
                href="#product"
                className="relative inline-flex items-center justify-center p-[1px] rounded-md overflow-hidden group shadow-lg shadow-blue-500/20"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#489EFF] to-[#0050FF]" />
                <div className="relative bg-[#0078FF]/80 px-3 py-1.5 rounded-[5px] text-sm font-semibold text-white hover:bg-[#0078FF]/90 transition">
                  Learn More
                </div>
              </a>
            </div>
          </div>

          <div className="relative hidden lg:block flex-grow -ml-24 xl:-ml-32 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)] min-w-[600px] overflow-visible">
            <OrchestrationGraphic />
          </div>
        </div>
      </Container>
    </section>
  );
}
