// ServiceCard.js
const ServiceCard = ({cat_name, image}) => {
  return (
    <div className="cursor-pointer">
      <div className="bg-white shadow-md rounded-lg p-3 w-28 h-40" > {/* Adjust width */}
        <img src={image} alt={cat_name} className="w-20 h-20 object-cover rounded-t-lg " /> {/* Adjust height */}
        <h3 className="text-sm font-semibold mt-2">{cat_name}</h3> {/* Smaller font size */}
      </div>
    </div>
  );
};


export default ServiceCard;