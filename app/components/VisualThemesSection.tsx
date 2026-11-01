"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./VisualThemesSection.module.css";

const examples = [
  {
    id: "bracelet",
    number: "01",
    product: "Bakir bileklik",
    raw: "1-referans.jpg",
    themes: [
      { id: "canli", label: "Canlı", image: "1-1.jpg" },
      { id: "gercekci", label: "Gerçekçi", image: "1-2.jpg" },
      { id: "studyo", label: "Stüdyo", image: "1-3.jpg" },
    ],
  },
  {
    id: "pillow",
    number: "02",
    product: "Dokuma yastik",
    raw: "2-referans.jpg",
    themes: [
      { id: "canli", label: "Canlı", image: "2-1.jpg" },
      { id: "gercekci", label: "Gerçekçi", image: "2-2.jpg" },
      { id: "studyo", label: "Stüdyo", image: "2-3.jpg" },
    ],
  },
];

export default function VisualThemesSection() {
  const [selectedThemes, setSelectedThemes] = useState<Record<string, string>>({
    bracelet: "canli",
    pillow: "canli",
  });

  return (
    <section className={styles.section} id="gorsel-ornekleri" aria-labelledby="visual-themes-title">
      <div className={styles.heading}>
        <div>
          <div className="eyebrow"><span className="eyebrow-dot" /> GORSEL DUZENLEME</div>
          <h2 id="visual-themes-title">Ham goruntuden<br /><em>markaniza uygun vitrine.</em></h2>
        </div>
        <p>Ayni urun icin ham fotograf ve duzenlenmis sunum orneklerini yan yana inceleyin.</p>
      </div>

      <div className={styles.examples}>
        {examples.map((example) => (
          <ExampleCard
            example={example}
            key={example.number}
            selectedTheme={selectedThemes[example.id]}
            onSelectTheme={(themeId) => setSelectedThemes((current) => ({ ...current, [example.id]: themeId }))}
          />
        ))}
      </div>
      <p className={styles.note}>Gorsel duzenleme, urunun yapisina ve magazanizin gorsel diline gore sekillenir.</p>
    </section>
  );
}

function ExampleCard({
  example,
  selectedTheme,
  onSelectTheme,
}: {
  example: (typeof examples)[number];
  selectedTheme: string;
  onSelectTheme: (themeId: string) => void;
}) {
  const activeTheme = example.themes.find((theme) => theme.id === selectedTheme) ?? example.themes[0];

  return (
    <article className={styles.example}>
      <div className={styles.exampleHeading}>
        <span>{example.number} / ORNEK</span>
        <h3>{example.product}</h3>
      </div>
      <div className={styles.pair}>
        <figure>
          <figcaption><span>HAM GORSEL</span></figcaption>
          <div className={`${styles.imageFrame} ${styles.rawImage}`}>
            <Image src={`/theme-images/${example.raw}`} alt={`${example.product} ham urun fotografi`} fill sizes="(max-width: 650px) 42vw, 22vw" />
          </div>
        </figure>
        <figure>
          <figcaption><span>DUZENLENMIS</span><span className={styles.treatment}>{activeTheme.label}</span></figcaption>
          <div className={styles.imageFrame}>
            <Image
              key={activeTheme.id}
              className={styles.themeImage}
              src={`/theme-images/${activeTheme.image}`}
              alt={`${example.product} ${activeTheme.label} temasinda duzenlenmis gorsel`}
              fill
              sizes="(max-width: 650px) 42vw, 22vw"
            />
          </div>
        </figure>
      </div>
      <div className={styles.themeOptions} role="group" aria-label={`${example.product} gorsel temalari`}>
        {example.themes.map((theme) => (
          <button
            className={activeTheme.id === theme.id ? styles.activeOption : ""}
            key={theme.id}
            type="button"
            aria-pressed={activeTheme.id === theme.id}
            onClick={() => onSelectTheme(theme.id)}
          >
            {theme.label}
          </button>
        ))}
      </div>
    </article>
  );
}

