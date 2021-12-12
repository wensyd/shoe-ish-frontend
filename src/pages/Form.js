import {useState} from "react";
import {useNavigate, Link} from "react-router-dom"

const Form = ({initialShoe, handleSubmit, buttonLabel}) => {
  const navigate = useNavigate()

  //The Form State
  const [formData, setFormData] = useState(initialShoe)

  // Handle Change to Update State when Input changes
  const handleChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value})
  }

   // Handle Change to Update State when the checkbox changes
   const handleChange2 = (event) => {
    setFormData({...formData, [event.target.name]: event.target.checked})
  }

  // HandleSubmit for when the form is submitted
  const handleSubmission = (event) => {
    // prevent the page from refreshing
    event.preventDefault()
    //pass the formData to the handleSubmit function passes as props
    handleSubmit(formData)
    //push user back to main page
    navigate("/")

  }

  console.log(formData)

  return <form onSubmit={handleSubmission}>
  <label>   
      Image: 
  <input
    type="text"
    onChange={handleChange}
    value={formData.image}
    name="image"
    />
  </label>
  <label>   
      Title: 
  <input
    type="text"
    onChange={handleChange}
    value={formData.title}
    name="title"
    />
    </label>
    <label>
      Description:
  <input
  type="text"
  onChange={handleChange}
  value={formData.description}
  name="description"
  />
  </label>
  <label>
      Price:
  <input
  type="number"
  onChange={handleChange}
  value={formData.price}
  name="price"
  />
  </label>
  <label>
      Size:
  <input
  type="number"
  onChange={handleChange}
  value={formData.size}
  name="size"
  />
  </label>
  <label>
      Purchased:
  <input
  type="checkbox"
  checked={formData.purchased}  
  onChange={handleChange2}
  name="purchased"
  />
  </label>
  <input type="submit" class= "button button-outline " value={buttonLabel} />
  <Link to="/">
          <button class="button button-outline">Home</button>
      </Link>
</form>
};

export default Form;