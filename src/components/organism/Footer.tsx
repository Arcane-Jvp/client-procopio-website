import Logo from "@/components/atom/Logo";
import SocialLinks from "@/components/molecule/SocialLinks";
import { SITE } from "@/data/site";

function FooterBackgroundLogo() {
  return (
    <div
      aria-hidden="true"
      className="flex items-center overflow-hidden absolute left-0 top-0 bottom-0 right-0 h-full pointer-events-none"
    >
      <Logo className="h-90 sm:h-120 w-full text-footer-logo" ariaLabel="Logo" />
    </div>
  );
}

function FooterIntro() {
  return (
    <div className="col-span-6 flex flex-col items-center justify-start gap-2 text-center md:col-span-3 md:items-start md:text-left">
      <h2 className="hidden font-title text-3xl md:block md:text-5xl">
        {SITE.name}
      </h2>
      <p className="hidden max-w-sm text-lg text-white/90 md:block">
        Designer em busca de ascensão.
        <br />
        Design gráfico e UX design.
      </p>

      <p className="font-title text-lg md:hidden">Entre em contato</p>

      <nav aria-label="Redes sociais" className="max-md:-mt-1 md:pt-2">
        <SocialLinks listClassName="flex items-center justify-center gap-8 md:gap-4.5 md:justify-start" />
      </nav>
    </div>
  );
}

function FooterContact() {
  return (
    <div className="col-span-6 hidden flex-col justify-start gap-2 text-right md:flex md:col-span-3">
      <p className="text-lg text-white/90">
        Entre em contato para colocar as ideias em prática.
        <br />
        À disposição para o trabalho.
      </p>
      <a
        href={`mailto:${SITE.email}`}
        className="font-title text-2xl sm:text-[32px] hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-accent-muted rounded"
      >
        {SITE.email}
      </a>
    </div>
  );
}

export default function Footer() {
  // TODO: Melhorar responsividade aumentando o tamanho do grid

  return (
    <footer
      id="contato"
      role="contentinfo"
      aria-label="Rodapé"
      className="bg-accent grid grid-cols-6 py-[11vw] md:py-20 overflow-y-hidden relative"
    >
      <FooterBackgroundLogo />

      <div className="z-2 col-span-6 flex h-full flex-col items-center justify-center px-6 text-white mwdt footer md:grid md:grid-cols-6">
        <FooterIntro />
        <FooterContact />
      </div>
    </footer>
  );
}
