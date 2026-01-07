const Contact = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-20">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-yellow-400">
        Contact Us
      </h1>
      <p className="text-gray-300 mb-6 text-center max-w-xl">
        Have questions or want to order? Reach out to us and we'll get back to you as soon as possible.
      </p>

      <div className="w-full max-w-md bg-gray-900 p-8 rounded-lg shadow-lg">
        <form className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="px-4 py-2 rounded bg-black border border-gray-700 text-white focus:outline-none focus:border-yellow-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="px-4 py-2 rounded bg-black border border-gray-700 text-white focus:outline-none focus:border-yellow-400"
          />
          <textarea
            placeholder="Your Message"
            className="px-4 py-2 rounded bg-black border border-gray-700 text-white focus:outline-none focus:border-yellow-400 resize-none"
            rows="5"
          ></textarea>
          <button
            type="submit"
            className="bg-yellow-400 text-black px-6 py-3 rounded font-semibold hover:bg-yellow-300 transition"
          >
            Send Message
          </button>
        </form>

        <div className="mt-6 text-gray-400 text-center">
          <p>📞 Phone: 01XXXXXXXXX</p>
          <p>📧 Email: info@electrom