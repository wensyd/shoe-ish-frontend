import React from "react"
import { Link } from "react-router-dom"
import {AiOutlineCheck, AiOutlineClose} from "react-icons/ai"

const Shoe = ({Shoe}) => {

////////////////////
// Style objects
////////////////////

const div = {
    textAlign: "center",
    border: "3px solid",
    margin: "10px auto",
    width: "80%",
};

console.log(Shoe?.purchased) // see what the value is
console.log(Boolean(Shoe?.purchased)) // see if the expression resolves to true or false

  return (
    <div style={div}>
        <Link to={`/shoe/${Shoe?.id}`}>
        <img src={Shoe?.image} alt="shoeImage"/>
        <h1>{Shoe?.title}</h1>
        </Link>
        <h2>{Shoe?.description}</h2>
        <h3>$ {Shoe?.price}</h3>
        <h3>Size: {Shoe?.size}</h3>
        <h3>
          Purchased: 
          {Shoe?.purchased ? <AiOutlineCheck/> : <AiOutlineClose/>}
        </h3>
    </div>
  );
};



export default Shoe;

