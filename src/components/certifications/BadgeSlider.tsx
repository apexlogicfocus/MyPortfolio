// Server Component - the slide animation is pure CSS (see .badge-marquee in globals.css)
import React from 'react';
import Image from 'next/image';

export interface CertificationBadge {
  readonly id: number;
  readonly title: string;
  readonly issuer: string;
  readonly badge: string;
  readonly verifyUrl?: string;
  readonly skills: readonly string[];
}

interface BadgeSliderProps {
  certifications: readonly CertificationBadge[];
}

// Each half of the track must be wider than the viewport for a seamless loop,
// so short lists are repeated before the track is doubled.
const MIN_ITEMS_PER_HALF = 10;

const BadgeItem: React.FC<{ cert: CertificationBadge; hidden: boolean }> = ({ cert, hidden }) => {
  const content = (
    <figure className="flex flex-col items-center gap-3 w-32 md:w-40">
      <div className="h-24 md:h-28 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-focus-visible:scale-110">
        <Image
          src={cert.badge}
          alt={hidden ? '' : `${cert.title} badge`}
          width={112}
          height={112}
          className="h-full w-auto object-contain drop-shadow-[0_0_18px_hsla(197,92%,56%,0.25)]"
        />
      </div>
      <figcaption className="text-center text-xs leading-snug text-muted-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
        <span className="block font-medium text-foreground">{cert.title}</span>
        <span className="block">{cert.issuer}</span>
      </figcaption>
    </figure>
  );

  if (cert.verifyUrl) {
    return (
      <li className="shrink-0 pr-10 md:pr-16" aria-hidden={hidden || undefined}>
        <a
          href={cert.verifyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group block rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          tabIndex={hidden ? -1 : undefined}
          aria-label={`Verify ${cert.title} (opens in a new tab)`}
        >
          {content}
        </a>
      </li>
    );
  }

  return (
    <li className="group shrink-0 pr-10 md:pr-16" aria-hidden={hidden || undefined} title={cert.title}>
      {content}
    </li>
  );
};

const BadgeSlider: React.FC<BadgeSliderProps> = ({ certifications }) => {
  if (certifications.length === 0) return null;

  const repeats = Math.max(1, Math.ceil(MIN_ITEMS_PER_HALF / certifications.length));
  const half = Array.from({ length: repeats }, () => certifications).flat();

  return (
    <div className="badge-marquee badge-marquee-mask relative overflow-hidden py-4" aria-label="Certification badges">
      <ul className="badge-marquee-track flex w-max">
        {[...half, ...half].map((cert, i) => (
          <BadgeItem
            key={`${cert.id}-${i}`}
            cert={cert}
            hidden={i >= certifications.length}
          />
        ))}
      </ul>
    </div>
  );
};

export default BadgeSlider;
