export function Footer() {
  return (
    <footer className="py-12 px-6 border-t-2 border-gray-900 dark:border-gray-100">
      <div className="max-w-5xl mx-auto text-center">
        <h3
          className="text-2xl md:text-3xl font-bold mb-2"
          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
        >
          Mitesh Vasoya
        </h3>
        <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 mb-4">
          Backend Engineer · Building systems that scale.
        </p>
        <p className="text-xs text-gray-600 dark:text-gray-400">
          © 2025 Mitesh Vasoya. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
