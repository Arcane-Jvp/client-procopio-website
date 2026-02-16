interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  schema?: object;
}

const SEO = ({
  title = "Procópio — Designer Gráfico & UX | Portfólio",
  description = "Portfólio de Procópio, Designer Gráfico e UX especializado em criar experiências visuais únicas e funcionais.",
  keywords = "design gráfico, ux design, portfólio, design visual, procópio",
  image = "https://portcopio.vercel.app/og-image.png",
  url = "https://portcopio.vercel.app/",
  type = "website",
  schema,
}: SEOProps) => {
  const fullTitle = title.includes("Procópio") ? title : `${title} | Procópio`;

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Canonical Link */}
      <link rel="canonical" href={url} />

      {/* JSON-LD Structured Data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </>
  );
};

export default SEO;
