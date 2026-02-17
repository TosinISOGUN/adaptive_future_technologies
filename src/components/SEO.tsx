import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  canonical?: string;
  type?: string;
  twitterHandle?: string;
}

const SEO = ({
  title = "Adaptive Future Technologies — Digital Operating Systems",
  description = "Adaptive Future Technologies engineers Digital Operating Systems for governments and enterprises in emerging markets.",
  image = "/aft-website-logo.png",
  canonical = "https://adaptive-future.com",
  type = "website",
  twitterHandle = "@AdaptiveFuture",
}: SEOProps) => {
  const siteTitle = title.includes("Adaptive Future")
    ? title
    : `${title} | Adaptive Future Technologies`;

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph tags */}
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={canonical} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;
