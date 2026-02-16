import Hero from "@/components/organism/Hero";
import About from "@/components/organism/About";
import Strip from "@/components/molecule/Strip";
import Projects from "@/components/organism/Projects";
import SEO from "@/components/molecule/Seo";

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Procópio",
    "url": "https://portcopio.vercel.app/",
    "jobTitle": "Designer Gráfico & UX",
    "description": "Portfólio de Procópio, Designer Gráfico e UX especializado em criar experiências visuais únicas e funcionais.",
    "sameAs": [
      // Adicione links sociais aqui se houver
    ]
  };

  return (
    <>
      <SEO 
        title="Procópio — Designer Gráfico & UX | Portfólio"
        description="Portfólio de Procópio, Designer Gráfico e UX especializado em criar experiências visuais únicas e funcionais."
        image="https://res.cloudinary.com/dflvo098t/image/upload/c_crop,x_0,y_75,w_800,h_500/v1762373525/procopio_wp3slo.jpg"
        schema={schema}
      />
      <Hero />
      <About />
      <Strip />
      <Projects />
    </>
  );
}
