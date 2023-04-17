import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:5005";

function CreateSpot({ refreshSpots }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  //const [image, setImage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const requestBody = { name, description, category };

    const storedToken = localStorage.getItem('authToken');
  
    axios
      .post(`${API_URL}/spots`, 
      requestBody, 
      { headers: { Authorization: `Bearer ${storedToken}` } }
    )
      .then((response) => {
        const createdSpot = response.data

        setName("");
        setDescription("");
        setCategory("");
        //setImage("");
        refreshSpots();
        //navigate("/collection");
        return createdSpot
      })
      .catch((error) => console.log(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create a new Spot and add it to your collection.</h2>
      <div className="CreateSpot">
        <label htmlFor="name">Name:</label>
        <input 
          type="text"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)} 
        />
      </div>  
      <br />
      <div className="CreateSpot">
        <label htmlFor="description">Description:</label>
        <textarea 
          type="text"
          name="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)} 
        ></textarea>
      </div>
      <br />
      <div>
        <label htmlFor="category">Category:</label>
        <select 
          id="category" 
          name ="category" 
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="">-Select a category-</option>
          <option value="Food">Food</option>
          <option value="Viewpoint">Viewpoint</option>
          <option value="Others">Others</option>
        </select>
      </div>

      {/* <div>
        <label htmlFor="image">Image:</label>
        <input 
          type="text" 
          id="image"
          value={image}
          onChange={(event) => setImage(event.target.value)}  
        />
      </div> */}
      <br />
      <button type="submit">Create a Spot</button>
    </form>
  );
}

export default CreateSpot;