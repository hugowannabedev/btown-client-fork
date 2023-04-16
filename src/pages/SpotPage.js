import { useState, useEffect } from "react";
import axios from "axios";
import CreateSpot from "../components/CreateSpot";
import IsPrivate from "../components/IsPrivate";
//import SpotCard from "../components/SpotCard";


const API_URL = "http://localhost:5005";

function SpotPage() {
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    getAllSpots();
  }, []);

  const getAllSpots = () => {
    axios.get(`${API_URL}/spots`)
      .then((response) => setSpots(response.data))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h1>All Spots</h1>

      <IsPrivate>  
        <CreateSpot refreshSpots={getAllSpots} />  
      </IsPrivate>  

      {spots.map((spot) => (
        <div key={spot._id}>
          <h2>{spot.title}</h2>
          <p>{spot.description}</p>
          <img src={spot.image} alt={spot.title} />
        </div>
      ))}
    </div>
  );
}

export default SpotPage;
