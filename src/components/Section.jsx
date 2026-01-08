export default function Section({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-24 py-16 sm:py-24 border-t border-blue-100/40">
      {title ? (
        <header className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 tracking-tight">{title}</h2>
          <div className="mt-3 h-1 w-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
        </header>
      ) : null}

      {children}
    </section>
  );
}
