import "styles/global.css";

export const metadata = {
  generator: "Next.js",
  applicationName: "Multi step form",
  referrer: "origin-when-cross-origin",
  keywords: ["Next.js", "React", "JavaScript", "Form", "multi-step-form"],
  authors: { name: "Guilherme Moraes", url: "https://www.guimoraes.dev/" },
  themeColor: "#02295a",
  colorScheme: "light",
  creator: "Guilherme Moraes",
  publisher: "Guilherme Moraes",
  title: {
    default: "Multi step form",
    template: "%s | Multi step form",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Multi step form",
    description:
      "Multi step form it's an spike to test out some front-end skills",
    url: "https://multi-step-form-flame.vercel.app/",
    siteName: "Multi step form",
    images: [
      {
        url: "https://multi-step-form-flame.vercel.app/img/cover.webp",
        width: 800,
        height: 600,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Multi step form",
    description:
      "Multi step form it's an spike to test out some front-end skills",
    creator: "Guilherme Moraes",
    images: ["https://multi-step-form-flame.vercel.app/img/cover.webp"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />

      <body>
        <main className="flex items-center justify-center h-screen bg-alabaster font-sans xl:px-36 xl:py-40">
          <section className="flex items-center justify-center bg-magnolia h-full w-full shadow-xl max-w-[80%] max-h-[80%] xl:max-h-full xl:py-14 xl:px-24 ">
            {children}
          </section>
        </main>
      </body>
    </html>
  );
}
