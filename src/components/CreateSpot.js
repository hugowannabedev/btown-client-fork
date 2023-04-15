/* import { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5005";

function CreateSpot({ refreshSpots }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleCreateSpot = () => {
    const data = {
      title: name,
      description,
      category: "",
      image: "",
      userId: "",
    };

    axios
      .post(`${API_URL}/api/spots`, data)
      .then(() => {
        setName("");
        setDescription("");
        refreshSpots();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="CreateSpot">
      <h2>Create a Spot</h2>
      <label>
        Name:
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <label>
        Description:
        <textarea value={description} onChange={handleDescriptionChange} />
      </label>
      <button onClick={handleCreateSpot}>Create a Spot</button>
    </div>
  );
}

export default CreateSpot; */