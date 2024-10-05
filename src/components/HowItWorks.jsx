const HowItWorks = () => {
    return (
      <section className="bg-white py-12 px-6">
        <h2 className="text-3xl font-semibold text-center mb-6">How It Works</h2>
        <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-6">
          
          {/* Step 1 */}
          <div className="flex flex-col items-center p-4">
            <div className="bg-blue-100 p-6 rounded-full">
              <span className="text-3xl font-bold text-blue-600">1</span>
            </div>
            <h3 className="text-lg font-semibold mt-4">Select Service</h3>
            <p className="text-gray-600 text-center mt-2">
              Browse our catalog to find the services that meet your needs.
            </p>
          </div>
  
          {/* Step 2 */}
          <div className="flex flex-col items-center p-4">
            <div className="bg-blue-100 p-6 rounded-full">
              <span className="text-3xl font-bold text-blue-600">2</span>
            </div>
            <h3 className="text-lg font-semibold mt-4">Book Service</h3>
            <p className="text-gray-600 text-center mt-2">
              Add services to your cart and book them by providing the necessary details.
            </p>
          </div>
  
          {/* Step 3 */}
          <div className="flex flex-col items-center p-4">
            <div className="bg-blue-100 p-6 rounded-full">
              <span className="text-3xl font-bold text-blue-600">3</span>
            </div>
            <h3 className="text-lg font-semibold mt-4">Service Delivered</h3>
            <p className="text-gray-600 text-center mt-2">
              Enjoy hassle-free service delivery at your chosen location.
            </p>
          </div>
        </div>
      </section>
    );
  };

  export default HowItWorks;