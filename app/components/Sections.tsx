import {
  ABOUT_PARAGRAPHS,
  AWARDS,
  DEMO_VILLAGE,
  MISSION,
  OUTCOMES,
  PARTNER_GROUPS,
  SDGS,
  SIDE_EVENTS,
  STARTUP_BENEFITS,
  STARTUP_CATEGORIES,
  STATS,
  SUMMIT,
  TRACKS,
  VISION,
} from "@/lib/content";

/* ------------------------------------------------------------------ */
/*  Shared editorial pieces                                            */
/* ------------------------------------------------------------------ */

function Marker({
  index,
  label,
  light = false,
}: {
  index: string;
  label: string;
  light?: boolean;
}) {
  return (
    <div
      className={`flex items-baseline gap-4 border-t pt-4 ${
        light ? "border-paper/25" : "border-line"
      }`}
    >
      <span className={`label ${light ? "text-ochre" : "text-clay"}`}>{index}</span>
      <span
        className={`label ${light ? "text-paper/70" : "text-ink-soft"}`}
      >
        {label}
      </span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Hero — editorial masthead                                          */
/* ------------------------------------------------------------------ */

export function Hero() {
  return (
    <section id="top" className="pt-[64px]">
      {/* masthead strip */}
      <div className="border-b border-line">
        <div className="container-x flex flex-wrap items-center justify-between gap-y-1 py-3">
          <span className="label text-ink-soft">{SUMMIT.organizer}</span>
          <span className="label text-ink-soft">{SUMMIT.location}</span>
          <span className="label text-clay">Est. {SUMMIT.year}</span>
        </div>
      </div>

      <div className="container-x pt-16 pb-20 sm:pt-24 sm:pb-28">
        <div className="animate-fade-up">
          <h1 className="font-display font-semibold leading-[0.92] tracking-[-0.02em] text-ink text-[clamp(2.7rem,9vw,7.5rem)]">
            Humanitarian
            <br />
            Technology{" "}
            <span className="italic font-normal text-clay">Summit</span>
          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-ink-soft sm:text-2xl">
            <span className="font-display italic text-ink">
              &ldquo;{SUMMIT.theme}.&rdquo;
            </span>{" "}
            {SUMMIT.tagline}.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-3">
            <a
              href={SUMMIT.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-ink px-7 py-3.5 text-base font-semibold text-paper transition hover:bg-clay"
            >
              Register your interest
            </a>
            <a
              href="#about"
              className="link-underline text-base font-semibold text-ink"
            >
              Read the programme ↓
            </a>
          </div>
        </div>

        {/* stat ledger */}
        <dl className="mt-16 grid grid-cols-3 gap-px overflow-hidden border border-line bg-line lg:grid-cols-6">
          {STATS.map((s) => (
            <div key={s.label} className="bg-paper px-5 py-6">
              <dd className="font-display text-4xl font-semibold leading-none text-ink sm:text-5xl">
                {s.value}
              </dd>
              <dt className="label mt-3 text-ink-soft">{s.label}</dt>
            </div>
          ))}
        </dl>
        <p className="label mt-3 text-ink-soft">Projected — Summit targets</p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  About — vision & mission                                           */
/* ------------------------------------------------------------------ */

export function About() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-line bg-paper-2 py-20 sm:py-28">
      <div className="container-x">
        <Marker index="01" label="About the Summit" />
        <div className="mt-10 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <h2 className="font-display text-3xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-[2.75rem]">
              Where engineering meets humanitarian impact.
            </h2>
            <div className="mt-7 space-y-4 text-base leading-relaxed text-ink-soft">
              {ABOUT_PARAGRAPHS.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          <div className="space-y-px self-start">
            <div className="border border-line bg-paper p-7">
              <span className="label text-clay">Our Vision</span>
              <p className="mt-3 font-display text-xl leading-snug text-ink">
                {VISION}
              </p>
            </div>
            <div className="border border-forest bg-forest p-7 text-paper">
              <span className="label text-ochre">Our Mission</span>
              <p className="mt-3 font-display text-xl leading-snug">{MISSION}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Tracks — editorial index / table of contents                      */
/* ------------------------------------------------------------------ */

export function Tracks() {
  return (
    <section id="tracks" className="scroll-mt-20 border-t border-line py-20 sm:py-28">
      <div className="container-x">
        <Marker index="02" label="Conference Programme" />
        <h2 className="mt-10 max-w-2xl font-display text-3xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-[2.75rem]">
          Eight thematic tracks.
        </h2>
        <p className="mt-4 max-w-xl text-lg text-ink-soft">
          Curated streams spanning the technologies shaping resilient, inclusive,
          and sustainable communities across the region.
        </p>

        <div className="mt-12 border-t border-line">
          {TRACKS.map((t) => (
            <article
              key={t.num}
              className="group grid grid-cols-[auto_1fr] items-start gap-x-5 gap-y-2 border-b border-line py-7 transition-colors hover:bg-paper-2 sm:grid-cols-[5rem_1fr_1.1fr] sm:gap-x-8"
            >
              <span className="font-display text-2xl font-semibold text-clay sm:text-3xl">
                {String(t.num).padStart(2, "0")}
              </span>
              <h3 className="font-display text-2xl font-medium leading-tight text-ink sm:text-[1.7rem]">
                {t.title}
              </h3>
              <p className="col-span-2 text-sm leading-relaxed text-ink-soft sm:col-span-1 sm:pt-2">
                {t.topics.join("  ·  ")}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Demonstration Village — forest full-bleed                         */
/* ------------------------------------------------------------------ */

export function DemoVillage() {
  return (
    <section id="village" className="scroll-mt-20 bg-forest py-20 text-paper sm:py-28">
      <div className="container-x">
        <Marker index="03" label="Hands-on Experience" light />
        <h2 className="mt-10 max-w-3xl font-display text-3xl font-semibold leading-[1.05] tracking-tight sm:text-[2.75rem]">
          The Humanitarian Technology{" "}
          <span className="italic font-normal text-ochre">Demonstration Village.</span>
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-paper/75">
          A live, immersive zone where technologies for disaster response,
          agriculture, health, and connectivity are deployed in real time.
        </p>

        <div className="mt-12 grid gap-px overflow-hidden border border-forest-soft bg-forest-soft md:grid-cols-2">
          {DEMO_VILLAGE.map((z, i) => (
            <article key={z.title} className="bg-forest p-8">
              <div className="flex items-baseline gap-3">
                <span className="label text-ochre">{String.fromCharCode(65 + i)}</span>
                <h3 className="font-display text-2xl font-medium text-paper">
                  {z.title}
                </h3>
              </div>
              <p className="mt-2 text-sm text-paper/65">{z.blurb}</p>
              <p className="mt-5 text-sm leading-relaxed text-paper/85">
                {z.items.join("  ·  ")}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Startup Challenge — clay full-bleed                                */
/* ------------------------------------------------------------------ */

export function StartupChallenge() {
  return (
    <section id="startup" className="scroll-mt-20 bg-clay py-20 text-paper sm:py-28">
      <div className="container-x">
        <Marker index="04" label="Innovation Challenge" light />
        <div className="mt-10 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <h2 className="font-display text-3xl font-semibold leading-[1.03] tracking-tight sm:text-[2.75rem]">
              Pitch the solutions East Africa needs.
            </h2>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-paper/85">
              We identify and accelerate startups addressing regional humanitarian
              and development challenges — connecting founders to mentorship,
              investors, and the IEEE network.
            </p>

            <p className="label mt-9 text-paper/70">Categories</p>
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
              {STARTUP_CATEGORIES.map((c) => (
                <li key={c} className="font-display text-xl italic text-paper">
                  {c}
                </li>
              ))}
            </ul>

            <a
              href={`mailto:${SUMMIT.contactEmail}?subject=Startup%20Challenge%20Application`}
              className="mt-10 inline-block bg-paper px-7 py-3.5 text-base font-semibold text-clay transition hover:bg-ink hover:text-paper"
            >
              Apply to the Challenge
            </a>
          </div>

          <div className="self-start border border-paper/25">
            <div className="border-b border-paper/25 p-7">
              <span className="label text-paper/70">Selected startups receive</span>
              <ol className="mt-4 space-y-3">
                {STARTUP_BENEFITS.map((b, i) => (
                  <li key={b} className="flex items-baseline gap-4 text-lg text-paper">
                    <span className="label text-ochre">0{i + 1}</span>
                    {b}
                  </li>
                ))}
              </ol>
            </div>
            <div className="p-7">
              <p className="text-sm leading-relaxed text-paper/85">
                Up to <span className="font-semibold text-paper">20 startups</span>{" "}
                are selected to exhibit in the Innovation Expo and compete for the
                Startup of the Year award.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Awards                                                             */
/* ------------------------------------------------------------------ */

export function Awards() {
  return (
    <section id="awards" className="scroll-mt-20 border-t border-line py-20 sm:py-28">
      <div className="container-x">
        <Marker index="05" label="Recognition" />
        <h2 className="mt-10 max-w-2xl font-display text-3xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-[2.75rem]">
          Humanitarian Technology Awards.
        </h2>
        <p className="mt-4 max-w-xl text-lg text-ink-soft">
          Celebrating the innovators, researchers, and communities turning
          technology into measurable social impact.
        </p>

        <ol className="mt-12 grid border-t border-line sm:grid-cols-2">
          {AWARDS.map((a, i) => (
            <li
              key={a}
              className="flex items-baseline gap-5 border-b border-line py-5 sm:odd:border-r sm:odd:pr-8 sm:even:pl-8"
            >
              <span className="font-display text-xl font-semibold text-clay">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-display text-xl leading-snug text-ink">{a}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Side events + Outcomes                                             */
/* ------------------------------------------------------------------ */

export function SideEventsOutcomes() {
  return (
    <section className="border-t border-line bg-paper-2 py-20 sm:py-28">
      <div className="container-x grid gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <Marker index="06" label="Beyond the Mainstage" />
          <h2 className="mt-8 font-display text-3xl font-semibold tracking-tight text-ink">
            Side events &amp; forums
          </h2>
          <ul className="mt-7 border-t border-line">
            {SIDE_EVENTS.map((e) => (
              <li
                key={e}
                className="border-b border-line py-3.5 text-lg text-ink"
              >
                {e}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Marker index="07" label="Lasting Impact" />
          <h2 className="mt-8 font-display text-3xl font-semibold tracking-tight text-ink">
            Expected outcomes
          </h2>
          <ul className="mt-7 border-t border-line">
            {OUTCOMES.map((o) => (
              <li
                key={o}
                className="flex items-baseline gap-4 border-b border-line py-3.5 text-lg text-ink"
              >
                <span className="text-clay">→</span>
                {o}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  SDGs                                                               */
/* ------------------------------------------------------------------ */

export function Sdgs() {
  return (
    <section className="border-t border-line py-20 sm:py-24">
      <div className="container-x">
        <Marker index="08" label="Global Alignment" />
        <h2 className="mt-10 max-w-3xl font-display text-3xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-[2.75rem]">
          Advancing ten of the UN Sustainable Development Goals.
        </h2>
        <div className="mt-12 grid grid-cols-2 gap-px border border-line bg-line sm:grid-cols-3 lg:grid-cols-5">
          {SDGS.map((s) => (
            <div key={s.num} className="bg-paper p-5">
              <span className="font-display text-3xl font-semibold text-clay">
                {String(s.num).padStart(2, "0")}
              </span>
              <p className="mt-2 text-sm font-medium leading-snug text-ink">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Partners                                                           */
/* ------------------------------------------------------------------ */

export function Partners() {
  return (
    <section id="partners" className="scroll-mt-20 border-t border-line bg-paper-2 py-20 sm:py-28">
      <div className="container-x">
        <Marker index="09" label="Partnership Opportunities" />
        <h2 className="mt-10 max-w-2xl font-display text-3xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-[2.75rem]">
          Seeking partners across sectors.
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-ink-soft">
          The Summit is inviting collaboration from leading IEEE, UN,
          development, and industry organizations. The groups below reflect the
          partners we aim to engage — not yet confirmed commitments.
        </p>

        <div className="mt-12 grid gap-px border border-line bg-line md:grid-cols-2 lg:grid-cols-4">
          {PARTNER_GROUPS.map((g) => (
            <div key={g.group} className="bg-paper p-7">
              <h3 className="label text-clay">{g.group}</h3>
              <ul className="mt-5 space-y-2.5">
                {g.members.map((m) => (
                  <li
                    key={m}
                    className="font-display text-lg text-ink-soft"
                  >
                    {m}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-2xl text-sm text-ink-soft">
          These are <span className="font-semibold text-ink">prospective</span>{" "}
          partners drawn from the Summit concept note and comparable IEEE and UN
          programmes; engagement is in progress. If your organization would like
          to be involved,{" "}
          <a
            href={`mailto:${SUMMIT.contactEmail}?subject=Partnership%20Inquiry`}
            className="link-underline font-semibold text-clay"
          >
            we&apos;d love to talk
          </a>
          .
        </p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Final CTA                                                          */
/* ------------------------------------------------------------------ */

export function CtaBanner() {
  return (
    <section className="border-t border-line bg-ink py-24 text-paper sm:py-32">
      <div className="container-x text-center">
        <p className="label text-ochre">{SUMMIT.location} &middot; {SUMMIT.year}</p>
        <h2 className="mx-auto mt-6 max-w-4xl font-display font-semibold leading-[1.0] tracking-tight text-[clamp(2.4rem,6.5vw,5rem)]">
          We&apos;ll see you in{" "}
          <span className="italic font-normal text-ochre">Kigali.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-paper/70">
          Join 700+ engineers, researchers, humanitarian actors, and innovators
          at East Africa&apos;s premier humanitarian technology event.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-x-7 gap-y-4">
          <a
            href={SUMMIT.registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-clay px-8 py-4 text-base font-semibold text-paper transition hover:bg-paper hover:text-ink"
          >
            Register your interest
          </a>
          <a
            href={`mailto:${SUMMIT.contactEmail}`}
            className="link-underline px-2 py-4 text-base font-semibold text-paper"
          >
            Partner with us →
          </a>
        </div>
      </div>
    </section>
  );
}
