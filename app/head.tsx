const metadata = {
  title: "Multi step form",
  description:
    "Multi step form it's an spike to test out some front-end skills",
  keywords: "Front-end, Frontend, React, NextJS, HTML, CSS, JavaScript",
  author: "Guilherme Moraes",
  type: "website",
  locale: "pt-BR",
  url: "https://multi-step-form-flame.vercel.app/"
};

export default function Head() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#02295a" />
      <meta name="description" content={metadata.description} />
      <meta name="keywords" content={metadata.keywords} />
      <meta name="author" content={metadata.author} />

      <meta property="og:title" content={metadata.title} />
      <meta property="og:description" content={metadata.description} />
      <meta property="og:type" content={metadata.type} />
      <meta property="og:locale" content={metadata.locale} />
      <meta property="og:url" content={metadata.url} />
      <meta
        property="og:image"
        content="https://ahrefs.com/blog/wp-content/uploads/2019/12/fb-how-to-become-an-seo-expert.png"
      />

      <link rel="icon" href="/favicon.ico" />

      <title>{metadata.title}</title>
    </>
  );
}
