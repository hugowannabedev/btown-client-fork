import { useEffect, useState } from "react";
import axios from "axios";
import SpotList from "../components/SpotList";

const API_URL = "http://localhost:5005";

function MySpotsPage() {
  const [mySpots, setMySpots] = useState([]);
  const storedToken = localStorage.getItem("authToken");

  useEffect(() => {
    axios
      .get(`${API_URL}/myspots`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => setMySpots(response.data))
      .catch((error) => console.log(error));
  }, [storedToken]);

  return (
    <div>
      <h1>My Spots</h1>
      {
        mySpots.length === 0 
        ? (<p>You have not added any spots yet.</p>) 
        : (<SpotList spots={mySpots.map((mySpot) => mySpot.spot)} />)
      }
    </div>
  );
}

export default MySpotsPage;