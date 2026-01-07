const Products = () => {
  return (
    <div className="p-10 text-white">
      <h1 className="text-4xl font-bold mb-4">Our Products</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((p) => (
          <div key={p} className="bg-gray-800 p-6 rounded hover:bg-yellow-400 hover:text-black">
            <h3 className="text-xl font-semibold mb-2">Product {p}</h3>
            <p className="text-gray-300">High quality electronics</p>
            <button className="bg-yellow-400 text-black px-4 py-2 rounded mt-2">Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;