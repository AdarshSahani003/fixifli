const HowToUse = () => {
    return (
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-3xl font-semibold text-center mb-6">How to Use</h2>
        <div className="max-w-screen-md mx-auto text-center">
          <p className="text-gray-700 leading-relaxed mb-4">
            Start by exploring our vast range of services. Select a category that fits your need and browse through various options available. Add the service to your cart, choose your location, and proceed to checkout to book your service.
          </p>
          <ul className="list-disc text-left list-inside text-gray-600">
            <li>Browse services by category</li>
            <li>Compare service options and prices</li>
            <li>Secure checkout process</li>
            <li>Track your service order status easily</li>
          </ul>
        </div>
      </section>
    );
  };

  export default HowToUse;