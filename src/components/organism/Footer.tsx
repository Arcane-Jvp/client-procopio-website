import Logo from "@/components/atom/Logo";
import { Mail, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  // TODO: Melhorar responsividade aumentando o tamanho do grid

  return (
    <footer
      id="contato"
      role="contentinfo"
      aria-label="Rodapé"
      className="bg-accent grid grid-cols-6 py-20 overflow-y-hidden relative"
    >
      <div
        aria-hidden="true"
        className="flex items-center overflow-hidden absolute left-0 top-0 bottom-0 right-0 h-full pointer-events-none"
      >
        <Logo
          className="h-90 sm:h-120 w-full text-footer-logo"
          ariaLabel="Logo"
        />
      </div>

      <div className="z-2 col-span-6 grid h-full grid-cols-6 px-6 text-white mwdt footer">
        <div className="col-span-6 flex flex-col justify-start gap-2 sm:col-span-3">
          <h2 className="font-title text-3xl sm:text-5xl">Procópio</h2>
          <p className="max-w-sm text-lg text-white/90">
            Designer em busca de ascensão.
            <br />
            Design gráfico e UX design.
          </p>

          <nav aria-label="Redes sociais" className="pt-2">
            <ul className="flex items-center gap-4">
              <li>
                <a
                  href="https://www.linkedin.com/in/jo%C3%A3o-victor-proc%C3%B3pio-dos-santos-540095294"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex items-center justify-center rounded-sm bg-accent-muted/30 p-1.5 text-accent-muted hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-accent-muted"
                >
                  <Linkedin className="h-4.5 w-4.5" aria-hidden="true" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </li>

              <li>
                <a
                  href="https://www.instagram.com/arcane_jvp"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex items-center justify-center rounded-sm bg-accent-muted/30 p-1.5 text-accent-muted hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-accent-muted"
                >
                  <Instagram className="h-4.5 w-4.5" aria-hidden="true" />
                  <span className="sr-only">Instagram</span>
                </a>
              </li>

              <li>
                <a
                  href="mailto:Procopiojvd@gmail.com"
                  aria-label="Enviar email"
                  className="flex items-center justify-center rounded-sm bg-accent-muted/30 p-1.5 text-accent-muted hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-accent-muted"
                >
                  <Mail className="h-4.5 w-4.5" aria-hidden="true" />
                  <span className="sr-only">Email</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="col-span-6 flex flex-col justify-start gap-2 text-right sm:col-span-3">
          <p className="text-lg text-white/90">
            Entre em contato para colocar as ideias em prática.
            <br />
            À disposição para o trabalho.
          </p>
          <a
            href="mailto:Procopiojvd@gmail.com"
            className="font-title text-2xl sm:text-[32px] hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-accent-muted rounded"
          >
            Procopiojvd@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
