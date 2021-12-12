import React from "react";
import Shoe from "../components/shoe";

const AllShoes = (props) => {
    // for each shoe in the array, render a shoe component

 return props.shoes.map((shoe) => {
    return <Shoe key={shoe.id} Shoe={shoe}/>
 }) 
 
};

export default AllShoes;