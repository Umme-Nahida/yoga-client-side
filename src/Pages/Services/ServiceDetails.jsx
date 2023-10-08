import { useLoaderData, useParams } from "react-router-dom";

const ServiceDetails = () => {
    const allServicesData = useLoaderData()
    console.log(allServicesData)
    const { id } = useParams();
    const idInt = parseInt(id)
    console.log(id)
    const getOneService = allServicesData.find(item => item.id == idInt)
    console.log(getOneService)
    const { description, img, title, price, } = getOneService
    return (
        <div>
            <div className="relative ">
                <img className="w-full h-[650px] bg-cover" src={img} alt="" />
            </div>
            <div className="bg-ovarly absolute p-32 w-[1200px] -mt-64 bg-opacity-60 bg-[#3BCCDD] rounded-tr-full text-right  ">
            </div>
            <div className="text-center my-20">
                <h1 className="text-[#49CF9E] text-5xl font-semibold mb-5">{title} </h1>
                <p className="text-lg w-1/2 mx-auto" >
                    {description}
                </p>

                <div className="card-actions justify-center mt-5">
                    <div className="badge badge-outline py-4 px-6">Price: {price}</div>
                    <div className="badge badge-outline py-4 px-6">Id: {id} </div>
                </div>

            </div>
        </div>
    );
};

export default ServiceDetails;