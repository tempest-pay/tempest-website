import { Container } from "./Container";

export function HeadlineDivider() {
  return (
    <section className="pt-8 pb-16 md:pt-10 md:pb-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-gradient text-3xl font-regular md:text-4xl">
            Accept. Pay. Reconcile.
            <span className="text-white"> With confidence.</span>
          </h2>
        </div>
      </Container>
    </section>
  );
}

