const categories = ["📱 Mobile", "💻 Laptop", "📺 TV", "🏠 Appliances", "🎧 Gadgets"];

const Categories = () => {
  return (
    <div className="py-16 bg-black text-white text-center">
      <h2 className="text-3xl font-bold mb-8">Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 px-6">
        {categories.map((cat, i) => (
          <div key={i} className="bg-gray-800 p-4 rounded hover:bg-yellow-400 hover:text-black">
            {cat}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;