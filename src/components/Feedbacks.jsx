const Feedbacks = () => {
    return (
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-3xl font-semibold text-center mb-6">Our Feedbacks</h2>
        <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Feedback 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-gray-600">
              “Fixifli made it so easy for me to book a home cleaning service. The service was quick and reliable, and I will definitely use it again!”
            </p>
            <p className="text-right text-blue-600 mt-4">- John Doe</p>
          </div>
  
          {/* Feedback 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-gray-600">
              “Amazing platform! The whole process was seamless and the quality of service was top-notch. Highly recommended!”
            </p>
            <p className="text-right text-blue-600 mt-4">- Jane Smith</p>
          </div>
  
          {/* Feedback 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-gray-600">
              “Booking a service has never been this easy. From browsing to checkout, Fixifli’s platform is user-friendly and fast.”
            </p>
            <p className="text-right text-blue-600 mt-4">- Alex Brown</p>
          </div>
        </div>
      </section>
    );
  };
 
  export default Feedbacks;