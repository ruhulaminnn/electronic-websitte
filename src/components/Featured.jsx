const Featured = () => {
  return (
    <div className="py-16 bg-gray-900 text-white text-center">
      <h2 className="text-3xl font-bold mb-8">Featured Products</h2>

      <div className="grid md:grid-cols-3 gap-6 px-6">
        {[1,2,3].map(p => (
          <div key={p} className="bg-black p-6 rounded">
            <h3 className="text-xl font-semibold mb-2">Product {p}</h3>
            <p className="text-gray-400 mb-3">High quality electronics</p>
            <button className="bg-yellow-400 text-black px-4 py-2 rounded">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;