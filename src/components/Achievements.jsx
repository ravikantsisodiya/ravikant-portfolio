export default function Achievements() {
  const achievements = [
    "Consistently recognized for outstanding work performance with Positive Badges.",
    "Acknowledged as an emerging leader for team contributions."
  ];

  return (
    <section id="achievements" className="px-6 py-20 max-w-4xl mx-auto bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <h2 className="text-3xl font-bold mb-6">Achievements</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
        {achievements.map((a, i) => <li key={i}>{a}</li>)}
      </ul>
    </section>
  );
}
