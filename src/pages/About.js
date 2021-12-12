import React from "react"

const About = (props) => {

///////////////////
    // style objects
    ////////////////////
  
    const div = {
        textAlign: "center",
        border: "3px solid purple",
        width:"80%",
        margin: "30px auto"
      }



    return <div style={div}>
    <p><h2 className="aboutH1">Shoe-ish allows a user to find their most favorite shoes and add them to a collection which can be marked off as purchased making this the ultimate shoe wish app. 
    </h2></p>
    </div>
}

export default About;