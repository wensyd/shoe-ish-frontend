//import all components 
import AllShoes from "./pages/AllShoes";
import SingleShoe from "./pages/SingleShoe";
import Form from "./pages/Form";
import About from "./pages/About";

//import Hooks from React
import {useState, useEffect} from "react"

// Import Router 6 component (Route -> Route, Switch -> Routes)
import {Route, Routes, Link, useNavigate} from "react-router-dom"
import HeaderNav from "./components/HeaderNav";


/////////////////////
// Style Object
/////////////////////
const h1 = {
  textAlign: "center",
  margin: "10px"
}

const button = {
  backgroundColor: "purple",
  display: "block",
  margin: "auto",
};
function App() {


//////////////////////////////
// state and other variables
//////////////////////////////

const navigate = useNavigate()

const url = "https://shoe-ish.herokuapp.com/shoe/"

// state to hold the list of shoes
const [shoes, setShoes] = useState([]);

//an empty shoe for initializing the create form
const nullShoe = {
  image: "",
  title: "",
  description: "",
  price: 0,
  size: 0,
  purchased: false

}

const [targetShoe, setTargetShoe] = useState(nullShoe)

  ////////////////////////
  // Functions
  ////////////////////////

   // function to get list of shoes from API
   const getShoes = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setShoes(data);
  };

  // function to add shoes 
  const addShoes = async (newShoe) => {
    console.log(newShoe)
    const response = await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newShoe)
    });

    // update the list of shoes
    getShoes()
  }

  // to select a blog to edit 
  const getTargetShoe = (shoe) => {
    setTargetShoe(shoe)
    navigate("/edit")
  }

  //update the shoe for our handlesubmit prop
  const updateShoe = async (shoe) => {
    await fetch(url + shoe.id, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(shoe),
    });

    //update our blogs
    getShoes();
  };

    // delete the blog 

    const deleteShoe = async (shoe) => {
      await fetch(url + shoe.id, {
        method: "delete"
      })
  
      getShoes()
      navigate("/")
    }



  ////////////////////////
  // useEffects
  ////////////////////////

  useEffect(() => {
    getShoes()
  }, [])
  ////////////////////////
  // returned JSX
  ////////////////////////

  return (
    <div className="App">
      <HeaderNav/>
      {/* <h1 style={h1}>My Shoe Collection</h1>
      <Link to="/new"><button style={button}>Create New Collection</button></Link> */}

      <Routes>
        <Route path="/" element={<AllShoes shoes={shoes}/>}/>
        <Route path="/shoe/:id" element={<SingleShoe shoes={shoes}
        edit={getTargetShoe}
        deleteShoe={deleteShoe}/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/new" element={<Form
          initialShoe={nullShoe}
          handleSubmit={addShoes}
          buttonLabel="Create Shoe"
          />} />
        <Route path="/edit" element={<Form
        initialShoe={targetShoe}
        handleSubmit={updateShoe}
        buttonLabel="update Shoe"/>}/>
      </Routes>
    </div>
  );

}

export default App;
