export default function Certifications() {
  const certs = [
    "Problem Solving Through Programming in C – NPTEL",
    "Programming in Java – NPTEL"
  ];

  return (
    <section id="certifications" className="px-6 py-20 bg-gray-100 dark:bg-gray-800 max-w-4xl mx-auto text-gray-900 dark:text-gray-100">
      <h2 className="text-3xl font-bold mb-6">Certifications</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
        {certs.map((c, i) => <li key={i}>{c}</li>)}
      </ul>
    </section>
  );
}
