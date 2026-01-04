export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col justify-center">
      <h1 className="text-4xl sm:text-5xl font-bold mb-4">
        Shehzad Iqbal
      </h1>

      <p className="text-xl text-gray-700 mb-6">
        Software Engineer
      </p>

      <p className="max-w-xl text-gray-600 mb-8">
        Software Engineer building full-stack web applications with a
        strong foundation in problem solving, system design, and modern
        development workflows.
      </p>

      <div className="flex gap-4">
        <a
          href="https://github.com/ShehzadIqbal1"
          target="_blank"
          className="px-5 py-2 border rounded hover:bg-gray-100"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          className="px-5 py-2 border rounded hover:bg-gray-100"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}
