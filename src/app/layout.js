import "./globals.css";

export const metadata = {
  title: "Shehzad Iqbal | Software Engineer",
  description:
    "Software Engineer building scalable full-stack applications with modern web technologies.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
