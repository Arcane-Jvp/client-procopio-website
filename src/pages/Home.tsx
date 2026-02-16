import Hero from "@/components/organism/Hero";
import About from "@/components/organism/About";
import Strip from "@/components/molecule/Strip";
import Projects from "@/components/organism/Projects";
import SEO from "@/components/molecule/Seo";
import { SITE, SOCIAL_LINKS } from "@/data/site";

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE.name,
    url: SITE.url,
    jobTitle: SITE.jobTitle,
    description: SITE.description,
    sameAs: SOCIAL_LINKS.filter((link) => link.includeInSchema).map(
      (link) => link.href,
    ),
  };

  return (
    <>
      <SEO
        title={SITE.title}
        description={SITE.description}
        image="/media/dflvo098t/image/upload/c_crop,x_0,y_75,w_800,h_500/v1762373525/procopio_wp3slo.jpg"
        schema={schema}
      />
      <Hero />
      <About />
      <Strip />
      <Projects />
    </>
  );
}
