export default function Skills() {
  const skills = {
    "Programming Languages": ["PHP", "Python", "JavaScript", "SQL", "CSS3", "HTML5", "Liquid", "Twig", "Smarty", "Less", "GraphQL", "Tailwind CSS", "TypeScript"],
    "Frameworks": ["Symfony", "FastAPI", "Laravel"],
    "Frontend": ["React", "JavaScript", "HTML5", "CSS3"],
    "Backend": ["PHP", "Python"],
    "Tools & Platforms": ["Git", "AWS (Storage, EC2)", "RabbitMQ", "Redis", "Stripe", "Postman", "Ubuntu", "Windows"],
    "Databases": ["SQL"],
    "E-commerce Platforms": ["Shopify", "BigCommerce", "Prestashop", "WordPress", "Odoo"],
    "Libraries": ["jQuery", "React", "NumPy"],
    "Others": ["Product Management", "Team Management"]
  };

  return (
    <section id="skills" className="px-6 py-20 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
      <h2 className="text-3xl font-bold mb-10 text-center">Technical Skills</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-3">{category}</h3>
            <p className="text-gray-700 dark:text-gray-300">{items.join(", ")}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
