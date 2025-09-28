export default function Projects() {
  const projects = [
    {
      title: "Shopify Multivendor Marketplace",
      desc: "Enabled Hyperlocal, B2C, B2B, C2C marketplaces with integrations and ChatGPT-powered product descriptions."
    },
    {
      title: "MVM API",
      desc: "Developed scalable APIs for seamless communication between app and external systems."
    },
    {
      title: "Amazon Connector (Shopify App)",
      desc: "Synced Amazon seller accounts with Shopify stores for product & order automation."
    },
    {
      title: "Product Auction (Shopify App)",
      desc: "Built auction system with real-time bidding and Popcorn Bidding feature."
    },
    {
      title: "Lightning Deals (Shopify App)",
      desc: "Created app for time-sensitive product deals with notifications & sales boost."
    }
  ];

  return (
    <section id="projects" className="px-6 py-20 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
      <h2 className="text-3xl font-bold mb-10 text-center">Key Projects</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((p, i) => (
          <div key={i} className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow">
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
