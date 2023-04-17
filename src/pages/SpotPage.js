import { useState, useEffect, useContext } from "react";
import axios from "axios";
import CreateSpot from "../components/CreateSpot";
import { AuthContext } from "../context/auth.context";
//import SpotCard from "../components/SpotCard";


const API_URL = "http://localhost:5005";

function SpotPage() {
  const [spots, setSpots] = useState([]);

  const {isLoggedIn } = useContext(AuthContext)

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
      
      {isLoggedIn && (
        <>
            <CreateSpot refreshSpots={getAllSpots} />
        </>
      )}
  
      {spots.map((spot) => (
        <div key={spot._id}>
          <h2>{spot.name}</h2>
          <p>{spot.description}</p>
          <p>{spot.category}</p>
          <img src={spot.image} alt={spot.name} />
        </div>
      ))}
    </div>
  );
}

export default SpotPage;
