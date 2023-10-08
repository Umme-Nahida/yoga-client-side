/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { data } from "autoprefixer";
import { Link } from "react-router-dom";


const Service = ({ dataItem }) => {
    const { title, img, price, description, id } = dataItem;
    console.log(dataItem)
    return (
        <div className="card w-96 bg-base-100 shadow-xl text-center">
            <figure><img src= {img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="text-[#49CF9E] text-2xl font-semibold">{title} </h2>
                 {
                    description.length > 200 
                    ? <p>{description.slice(0,280)} <Link className="text-blue-500" to="/">..read more</Link> </p> :
                     <p>{description} </p>
                 }
                <p className="text-xl text-blue-600 font-extrabold"> Price: {price} </p>

                <Link to={`/service/${id}`}>
                <div className="card-actions justify-center">
                     <button className="btn btn-primary w-full ">See Details</button>
                </div>
                </Link>

            </div>
        </div>
    );
};

export default Service;