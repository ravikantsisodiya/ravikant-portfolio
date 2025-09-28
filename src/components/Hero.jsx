export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-6 
                        bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
      <h1 className="text-5xl font-bold">Ravikant Sisodiya</h1>
      <h2 className="mt-2 text-2xl text-blue-600 dark:text-blue-400">Lead Software Engineer</h2>
      <p className="mt-4 text-gray-700 dark:text-gray-300 max-w-2xl">
        Dynamic Full-Stack Developer with 5+ years of experience designing, developing, 
        and maintaining scalable web applications using PHP, Python, Symfony, React, and JavaScript.
      </p>
      <div className="mt-6 flex gap-4">
        <a href="mailto:ravikantsisodiya97@gmail.com"
           className="px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Contact Me
        </a>
        <a href="https://www.linkedin.com/in/ravikant-sisodiya-3934051a3/" target="_blank"
           className="px-5 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white">
          LinkedIn
        </a>
      </div>
    </section>
  );
}
