import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/icons/WhatsAppIcon";
import { whatsappLink } from "@/content/site";
import {
  deepCleanIncludes,
  deepCleanNote,
  deepCleanPackages,
  generalClean,
} from "@/content/cleaning";

const CLEANING_ENQUIRY =
  "Hello Distinct Solutions, I'd like a quote for a cleaning service.";

/** Checklist row, shared by both include lists. */
function Included({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2.5">
      <Check
        className="mt-0.5 size-4 shrink-0 text-accent"
        strokeWidth={2.5}
        aria-hidden="true"
      />
      <span className="text-[0.9375rem] leading-relaxed text-body">
        {children}
      </span>
    </li>
  );
}

export function CleaningPricing() {
  return (
    <section id="cleaning" className="scroll-mt-24 py-16 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="Cleaning prices"
          title={
            <>
              Deep cleaning, <span className="text-accent">priced up front.</span>
            </>
          }
          description="Professional cleaning for homes, offices and commercial spaces — with the starting price on the table before we visit, not after."
        />

        {/* Deep clean prices */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {deepCleanPackages.map((pkg, index) => (
            <Reveal key={pkg.name} delay={index * 40}>
              <article className="glow-accent h-full rounded-2xl bg-ink px-6 py-10 text-center">
                <h3 className="font-heading text-xl font-semibold text-heading sm:text-2xl">
                  {pkg.name}
                </h3>
                <p className="mt-1 text-sm font-medium tracking-[0.16em] text-muted uppercase">
                  {pkg.detail}
                </p>

                <p className="mt-6 text-xs font-semibold tracking-[0.22em] text-body uppercase">
                  Starting from
                </p>
                <p className="mt-3 flex items-baseline justify-center gap-2">
                  <span className="font-heading text-xl font-semibold text-muted">
                    AED
                  </span>
                  <span className="font-heading text-5xl leading-none font-bold text-accent sm:text-6xl">
                    {pkg.price}
                  </span>
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mx-auto mt-5 max-w-2xl text-center text-sm text-muted">
          {deepCleanNote}
        </p>

        {/* What each clean covers — deep clean beside the promotional general
            clean, mirroring the brochure. */}
        <div className="mt-12 grid gap-5 lg:grid-cols-[1.45fr_1fr]">
          <Reveal>
            <div className="h-full rounded-2xl border border-line bg-surface-raised p-6 sm:p-8">
              <h3 className="font-heading text-lg font-semibold text-heading">
                Deep cleaning includes
              </h3>
              <span
                aria-hidden="true"
                className="gradient-brand-animated mt-4 block h-px w-12 rounded-full"
              />

              <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                {deepCleanIncludes.map((item) => (
                  <Included key={item}>{item}</Included>
                ))}
              </ul>

              <p className="mt-5 text-sm text-muted">
                …and a full freshen-up throughout. Anything specific to your
                property, tell us and we will include it in the quote.
              </p>
            </div>
          </Reveal>

          <Reveal delay={40}>
            <div className="glow-gold relative h-full overflow-hidden rounded-2xl bg-ink p-6 sm:p-8">
              <span className="gradient-gold-animated inline-block rounded-full px-3 py-1">
                <span className="font-heading text-[0.6875rem] font-bold tracking-[0.16em] text-ink uppercase">
                  {generalClean.badge}
                </span>
              </span>

              <h3 className="font-heading mt-5 text-lg font-semibold text-heading">
                {generalClean.name}
              </h3>

              <p className="mt-3 flex items-baseline gap-2">
                <span className="font-heading text-xl font-semibold text-muted">
                  {generalClean.currency}
                </span>
                <span className="text-gradient-gold-animated font-heading text-5xl leading-none font-bold">
                  {generalClean.price}
                </span>
                <span className="font-heading text-base font-semibold text-body">
                  {generalClean.suffix}
                </span>
              </p>

              <p className="mt-6 text-xs font-semibold tracking-[0.16em] text-gold uppercase">
                General clean includes
              </p>
              <ul className="mt-4 grid gap-3">
                {generalClean.includes.map((item) => (
                  <Included key={item}>{item}</Included>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href={whatsappLink(CLEANING_ENQUIRY)} size="lg">
            <WhatsAppIcon className="size-4" aria-hidden="true" />
            Book a clean
          </ButtonLink>
          <ButtonLink href="#contact" variant="secondary" size="lg">
            Request a cleaning quote
          </ButtonLink>
        </Reveal>
      </Container>
    </section>
  );
}
