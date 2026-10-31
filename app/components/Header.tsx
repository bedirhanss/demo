import TopHeader from "./TopHeader";

export default function Header() {
  return (
    <>
      <TopHeader />
      <header className="site-header">
        <a className="brand" href="#top" aria-label="VitrinaOps home"><span>vitrina<span className="brand-light">ops</span></span></a>
        <nav className="main-nav" aria-label="Main menu">
          <a href="#hizmetler">Hizmetler</a><a href="#nasil-calisir">Nasil calisir?</a><a href="#platformlar">Platformlar</a><a href="#sss">SSS</a><a href="#paketler">Fiyatlandırma</a>
        </nav>
        <div className="header-contact-slot"><div className="aura aura-glow aura-sm header-contact-aura"><a className="header-cta" href="tel:+905555555555" aria-label="Bize ulasin"><svg className="phone-icon" aria-hidden="true" viewBox="0 0 24 24" fill="none" width="20" height="20"><path d="M7.2 3.8h2.7l1.3 4-1.8 1.8a15 15 0 0 0 5 5l1.8-1.8 4 1.3v2.7c0 1.1-.9 2-2 2A15.2 15.2 0 0 1 5.2 5.8c0-1.1.9-2 2-2Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg><span className="header-cta-label" aria-hidden="true">Bize ulasin</span></a></div></div>
      </header>
    </>
  );
}



