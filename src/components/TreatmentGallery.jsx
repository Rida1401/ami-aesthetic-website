function TreatmentGallery() {
  const results = [
    {
      id: 1,
      title: "Laser Hair Reduction",
      before: "https://via.placeholder.com/300x200?text=Before+Hair", // Replace with real image
      after: "https://via.placeholder.com/300x200/e0f2fe/000000?text=After+6+Sessions", // Replace with real image
    },
    {
      id: 2,
      title: "Tattoo Removal",
      before: "https://via.placeholder.com/300x200?text=Before+Tattoo",
      after: "https://via.placeholder.com/300x200/e0f2fe/000000?text=After+Laser",
    },
    {
      id: 3,
      title: "Acne Scar Treatment",
      before: "https://via.placeholder.com/300x200?text=Before+Acne",
      after: "https://via.placeholder.com/300x200/e0f2fe/000000?text=After+Resurfacing",
    },
    {
      id: 4,
      title: "Cryolipolysis (Fat Freezing)",
      before: "https://via.placeholder.com/300x200?text=Before+Fat",
      after: "https://via.placeholder.com/300x200/e0f2fe/000000?text=After+Slimming",
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-4">
          Real Clinical Results
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          See the transformative power of our advanced aesthetic technology.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {results.map((item) => (
            <div key={item.id} className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-center font-semibold text-gray-700 mb-3">{item.title}</h3>
              <div className="flex gap-2">
                <div className="w-1/2 relative">
                  <img src={item.before} alt="Before" className="rounded-lg w-full h-32 object-cover" />
                  <span className="absolute bottom-1 left-1 bg-black/50 text-white text-[10px] px-2 py-0.5 rounded">Before</span>
                </div>
                <div className="w-1/2 relative">
                  <img src={item.after} alt="After" className="rounded-lg w-full h-32 object-cover" />
                  <span className="absolute bottom-1 left-1 bg-green-600/80 text-white text-[10px] px-2 py-0.5 rounded">After</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TreatmentGallery;