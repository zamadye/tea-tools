
export function Testimonials() {
  const testimonials = [
    {
      quote: "I use tea-tools in all my testnet bots!",
      author: "0xDev",
      avatar: "data:image/svg+xml,<svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'><circle cx='50' cy='50' r='50' fill='%234F46E5'/></svg>"
    },
    {
      quote: "CLI gas tracker is a must-have for my portfolio script.",
      author: "web3builder",
      avatar: "data:image/svg+xml,<svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'><circle cx='50' cy='50' r='50' fill='%2310B981'/></svg>"
    },
    {
      quote: "Best Web3 development toolkit I've used so far.",
      author: "cryptodev",
      avatar: "data:image/svg+xml,<svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'><circle cx='50' cy='50' r='50' fill='%236366F1'/></svg>"
    }
  ];

  return (
    <div className="bg-gray-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-white mb-12">
          Trusted by Web3 Developers
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
            >
              <p className="text-gray-300 mb-4">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <img
                  className="h-10 w-10 rounded-full"
                  src={testimonial.avatar}
                  alt={testimonial.author}
                />
                <span className="ml-3 font-medium text-cyan-400">
                  {testimonial.author}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
