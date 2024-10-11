import { Link } from "react-router-dom";

const ServiceCard = ({cat_name, image, category_slug}) => {
  
  return (
    <div className="cursor-pointer">
      <Link to={`/service/${category_slug}`}>
      <div className="bg-white shadow-md rounded-lg p-3 w-28 h-40" > {/* Adjust width */}
        <img src={image} alt={cat_name} className="w-20 h-20 object-cover rounded-t-lg " /> {/* Adjust height */}
        <h3 className="text-sm font-semibold mt-2">{cat_name}</h3> {/* Smaller font size */}
      </div>
      </Link>
    </div>
  );
};


export default ServiceCard;