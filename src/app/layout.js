import "./globals.css";

export const metadata = {
  title: "Shehzad Iqbal | Software Engineer",
  description: "Minimal, recruiter-friendly portfolio for Shehzad Iqbal (Software Engineer).",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 text-slate-900 antialiased relative overflow-x-hidden">
        {/* Floating background blobs */}
        <div className="floating-blob blob-1" />
        <div className="floating-blob blob-2" />
        <div className="floating-blob blob-3" />
        
        {children}
      </body>
    </html>
  );
}
