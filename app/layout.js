import "./globals.css";

export const metadata = {
  title: "Form Kontak",
  description: "Form kontak sederhana dengan Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
