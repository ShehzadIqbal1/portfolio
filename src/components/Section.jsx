export default function Section({ id, title, children }) {
  return (
    <section id={id} className="py-24">
      {title && (
        <h2 className="text-2xl font-semibold mb-8">{title}</h2>
      )}
      {children}
    </section>
  );
}
