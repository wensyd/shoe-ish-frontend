import React from "react"
import {AiOutlineCheck, AiOutlineClose} from "react-icons/ai"
import {Link, useParams} from "react-router-dom"

const SingleShoe = ({shoes, edit, deleteShoe}) => {
    //get params from the url 
    const params = useParams()
    const id = parseInt(params.id)
  
    // find the particular blog the user wants to see based on the param 
  
    const shoe = shoes.find((p) => p.id === id)
    console.log(shoe)
  
    ////////////////////
    // style objects
    ////////////////////
  
    const div = {
      textAlign: "center",
      border: "3px solid purple",
      width:"80%",
      margin: "30px auto"
    }
  
    return <div style={div}>
      <img src= {shoe?.image}></img>
      <h1>{shoe?.title}</h1>
      <h2>{shoe?.description}</h2>
      <h3>$ {shoe?.price}</h3>
      <h3>Size: {shoe?.size}</h3>
      <h3>
          Purchased: 
          {shoe?.purchased ? <AiOutlineCheck/> : <AiOutlineClose/>}
        </h3>
      <button class="button button-outline" onClick={() => deleteShoe(shoe)}>Delete</button>
      <button class="button button-outline" onClick={() => edit(shoe)}>Edit</button>
    {/* add a button to lead back to main page */}
      <Link to="/">
          <button class="button button-outline">Home</button>
      </Link>
    </div>
  };

  export default SingleShoe;