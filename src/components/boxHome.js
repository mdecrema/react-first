import React from "react";
import Box from "./box";    
import { faSprayCan } from "@fortawesome/free-solid-svg-icons";
import { faFlask } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";


const BoxHome = (props) => {
    const infos = [ 
        {
            title: "Technology",
            description: "Coatings based on chemistry and nano and microscale topography let's precisely tune your surface's properties. Easy applicable processes including low costs adds value to your products.",
            icon: faSprayCan,
            link: "/technologies"
        },
        {
            title: "Products & Applicatons",
            description: "Durable coatings for wettability management, from 100% anti wetting to superwettability. Waterproof coatings, oil repellent, uv protection, IR reflective coatings available",
            icon:  faFlask,
            link: "/products"
        },
        {
            title: "Service",
            description: "Working closely together with us enables you to deliver premium products to your customers. Generate a competitive advantage your customers will appreciate.",
            icon:  faEdit,
            link: "/service"
        }
    ];
    
  return (
      <div>
        {   infos.map((info) => (
            <Box title={info.title} description={info.description} name={info.icon} url={info.link} />
        ))}
        </div>
  );

}


export default BoxHome;