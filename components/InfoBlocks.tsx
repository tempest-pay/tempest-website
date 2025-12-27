import { Container } from "./Container";

export function InfoBlocks() {
  return (
    <section className="pt-8 pb-12 md:pt-10 md:pb-16">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-gradient text-sm font-semibold">Built for Programmability</div>
          <p className="mt-2 text-sm text-white/70">
            Tempest lays the foundation for programmable and composable stablecoin workflows—enabling conditional
            payments, automated settlement, and deeper integration with financial and operational systems.
          </p>
        </div>
      </Container>
    </section>
  );
}

